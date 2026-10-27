const SUPABASE_URL = 'https://nrevwzygkkhhnhsggzbt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yZXZ3enlna2toaG5oc2dnemJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE1NDQyNzMsImV4cCI6MjEwNzEyMDI3M30.4FDsr2JH3aGan28-HHLyWTjHwKuCAWHV-Tu5J3iEBd8';

// Inicializa o cliente do Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true, // Mantém a sessão ativa/fixa no navegador
    autoRefreshToken: true // Renova o token automaticamente
  }
});