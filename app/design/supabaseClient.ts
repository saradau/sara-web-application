import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://your-project-ref.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkbXB6YmtjbmF2ZGpiemNybGpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMTA2MTksImV4cCI6MjA0NTg4NjYxOX0.K5rNoRqmjkB2pcyZ899xFXLnNANerWwHa8mkXSBB058";
//TODO: key like this? saradau's project?
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
