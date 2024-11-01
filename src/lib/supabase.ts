import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://ufjpedumrjbtnxlwxsff.supabase.co";
// const supabaseAnonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmanBlZHVtcmpidG54bHd4c2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0MjI0NTUsImV4cCI6MjA0NTk5ODQ1NX0.gTcAAAIOo3aOjji-1epohCqrx06aoN1orI0o6ipUOXc";

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
