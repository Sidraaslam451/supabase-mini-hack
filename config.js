// configuration page ki file
import {createClient} from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://irrxftnykslhxmswvjwv.supabase.co";
const supabaseKey = "sb_publishable_wVqKR-zyxps4fhAf4UG-pg_3PSwJE-5";

const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabase);

export default supabase;