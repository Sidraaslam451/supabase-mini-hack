import supabase from "./config";
function savePost() {
    // 1. Inputs se data nikalna
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title === "" || content === "") {
        alert("Please fill all fields!");
        return;
    }

    // 2. Ek Post Object banana
    const newPost = {
        id: Date.now(), // Unique ID dene ke liye
        title: title,
        content: content
    };

    // 3. Purani posts ko Storage se nikalna (agar hain)
    let posts = JSON.parse(localStorage.getItem('myPosts')) || [];

    // 4. Nayi post ko list mein add karna
    posts.push(newPost);

    // 5. Wapis Storage mein save karna
    localStorage.setItem('myPosts', JSON.stringify(posts));

    // 6. Form clear karna
    document.getElementById('post-title').value = "";
    document.getElementById('post-content').value = "";

    alert("Post added successfully!");
}