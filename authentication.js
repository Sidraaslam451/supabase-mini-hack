// Sign up page ki js file
import supabase from "./config.js";

const signUp = document.getElementById("signup-user");
const userName = document.getElementById("username");
const userEmail = document.getElementById("email");
const password = document.getElementById("password");

async function register(e) {
  e.preventDefault();

  if (!userName.value || !userEmail.value || !password.value) {
    console.log("All fields are required");
    return;
  }
  const { data, error } = await supabase.auth.signUp({
    email: userEmail.value,
    password: password.value,
    options: {
      data: {
        username: userName.value,
      },
    },
  });

  if (error) {
    console.log("error aagya");
  } else {
    console.log(data);
    
    const { error : profileError } = await supabase
    .from("profiles")
    .insert([
        {
            id : data.user.id,
            email : userEmail.value,
            role : "user"
        }
    ])
    if (profileError){
        console.log("profile error insert", profileError.message);
        
    }
    window.location.href = "signInpage.html";
  }
}

signUp.addEventListener("submit", register);
