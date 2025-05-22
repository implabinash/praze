// To initialize supabase client

import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY, SUPABASE_URL } from '$env/static/private';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
