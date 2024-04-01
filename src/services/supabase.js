import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rjxmchjutdwawphhpnvr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqeG1jaGp1dGR3YXdwaGhwbnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NjE0NDQsImV4cCI6MjAyNTIzNzQ0NH0.f4R1xxCBlCnDh3mzW3G6j7QDWaFVfbDwbTJanuXzD5Y";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
