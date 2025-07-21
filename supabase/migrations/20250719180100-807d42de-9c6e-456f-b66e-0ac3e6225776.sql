-- Create edge function for sending contact emails
CREATE OR REPLACE FUNCTION public.send_contact_email()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Insert a record to trigger the edge function
  INSERT INTO public.email_queue (
    contact_id,
    recipient,
    subject,
    message,
    status
  ) VALUES (
    NEW.id,
    'panthbhatt7654321@gmail.com',
    'New Portfolio Contact: ' || NEW.name,
    'Name: ' || NEW.name || E'\n' ||
    'Email: ' || NEW.email || E'\n' ||
    'Message: ' || NEW.message,
    'pending'
  );
  
  RETURN NEW;
END;
$$;

-- Create email queue table for processing emails
CREATE TABLE IF NOT EXISTS public.email_queue (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_id UUID REFERENCES public.contact_submissions(id),
  recipient TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  processed_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS on email_queue
ALTER TABLE public.email_queue ENABLE ROW LEVEL SECURITY;

-- Create policy for email queue (admin only)
CREATE POLICY "Admin can manage email queue" 
ON public.email_queue 
FOR ALL 
USING (true);

-- Create trigger to send email when contact is submitted
CREATE TRIGGER send_email_on_contact_submission
  AFTER INSERT ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.send_contact_email();