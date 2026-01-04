import supabase  from "./config";

async function createPost() {

  // 1️⃣ Logged-in user lao
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    alert("Login required");
    return;
  }

  // 2️⃣ Input values
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let imageFile = document.getElementById("image").files[0];

  // 3️⃣ Image upload
  let fileName = Date.now() + imageFile.name;

  const { error: uploadError } = await supabase
    .storage
    .from("posts-images")
    .upload(fileName, imageFile);

  if (uploadError) {
    alert("Image upload failed");
    return;
  }

  // 4️⃣ Image URL lo
  const { data } = supabase
    .storage
    .from("posts-images")
    .getPublicUrl(fileName);

  // 5️⃣ Post insert karo
  const { error } = await supabase
    .from("posts")
    .insert({
      user_id: user.id,
      title: title,
      content: content,
      image_url: data.publicUrl
    });

  if (error) {
    alert("Post add nahi hui");
  } else {
    alert("Post successfully added 🎉");
  }
}
