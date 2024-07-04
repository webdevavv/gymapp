import { createClient } from "@supabase/supabase-js";

const URL: string = "https://dhjtsbjmozaiqbdppxji.supabase.co";

const PROJECT_API_KEY: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoanRzYmptb3phaXFiZHBweGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1MDc5OTMsImV4cCI6MjAzNTA4Mzk5M30.ogzlJHwnw5S7TqFXVwEaoyeg80LPUI30Q0IUA4MblKc";

// Create a single supabase client for interacting with your database
export const supabase = createClient(URL, PROJECT_API_KEY);
