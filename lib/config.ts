export const APP_NAME = "Sara's Projects";
export const MY_GITHUB = "https://github.com/saradau";

export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS || "";
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";
export const EMAIL_HOST = process.env.EMAIL_HOST || "";
export const EMAIL_PORT = process.env.EMAIL_PORT || 587;

export const PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const PRIVATE_SUPABASE_SERVICE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const SUPABASE_ENABLED =
  PUBLIC_SUPABASE_URL &&
  PUBLIC_SUPABASE_ANON_KEY &&
  PRIVATE_SUPABASE_SERVICE_KEY
    ? true
    : false;

export const NASA_API_KEY = process.env.NASA_API_KEY || "";
