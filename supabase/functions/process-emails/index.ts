import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!
const supabase = createClient(supabaseUrl, supabaseKey)

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('Processing email queue...')
    
    // Get pending emails from queue
    const { data: pendingEmails, error: fetchError } = await supabase
      .from('email_queue')
      .select('*')
      .eq('status', 'pending')
      .limit(10)

    if (fetchError) {
      console.error('Error fetching emails:', fetchError)
      throw fetchError
    }

    if (!pendingEmails || pendingEmails.length === 0) {
      console.log('No pending emails found')
      return new Response(JSON.stringify({ message: 'No pending emails' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      })
    }

    console.log(`Found ${pendingEmails.length} pending emails`)

    // Process each email
    for (const emailData of pendingEmails) {
      try {
        console.log(`Sending email ${emailData.id}`)
        
        const { data: emailResponse, error: emailError } = await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [emailData.recipient],
          subject: emailData.subject,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #6366F1;">New Portfolio Contact</h2>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                ${emailData.message.split('\n').map(line => `<p style="margin: 10px 0;">${line}</p>`).join('')}
              </div>
              <p style="color: #6b7280; font-size: 14px;">This email was sent from your portfolio contact form.</p>
            </div>
          `,
        })

        if (emailError) {
          console.error(`Error sending email ${emailData.id}:`, emailError)
          
          // Mark as failed
          await supabase
            .from('email_queue')
            .update({ 
              status: 'failed',
              processed_at: new Date().toISOString()
            })
            .eq('id', emailData.id)
        } else {
          console.log(`Email ${emailData.id} sent successfully:`, emailResponse)
          
          // Mark as sent
          await supabase
            .from('email_queue')
            .update({ 
              status: 'sent',
              processed_at: new Date().toISOString()
            })
            .eq('id', emailData.id)
        }
      } catch (error) {
        console.error(`Error processing email ${emailData.id}:`, error)
        
        // Mark as failed
        await supabase
          .from('email_queue')
          .update({ 
            status: 'failed',
            processed_at: new Date().toISOString()
          })
          .eq('id', emailData.id)
      }
    }

    return new Response(JSON.stringify({ 
      message: `Processed ${pendingEmails.length} emails` 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    console.error('Error in process-emails function:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})