// Sign in page ki js file
import supabase from "./config.js";
const loginForm = document.getElementById("login");
const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");

async function  loginUser(e) {
    e.preventDefault();

    if (!loginEmail.value || !loginPassword.value){
        alert("All fields are required");
        return;
    }else{
        const {data, error} = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPassword.value,

        });
        if (error){
            alert(error.message);
        }else{
            window.location.href = "homepage.html";
        }
    }
}

loginForm.addEventListener("submit", loginUser);

