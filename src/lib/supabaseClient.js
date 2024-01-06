import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://tuhbqzfobdxsfgzqoifq.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1aGJxemZvYmR4c2ZnenFvaWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwODQ1NzQsImV4cCI6MjAxOTY2MDU3NH0.-5RpmjRfF3yfSR5k7MKiF_sU1XH6m38_GvKsh4LyHAU'
);