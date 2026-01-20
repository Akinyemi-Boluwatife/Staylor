import supabase from "./supabase";

export async function getProfile(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function updateProfile({ userId, updates }) {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", userId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function updateCurrentUserDetails({ userId, updates, avatar }) {
  // 1. Determine if we are dealing with a new file or an existing URL
  const isNewFile = avatar instanceof File;
  let avatarUrl = avatar;

  if (isNewFile) {
    // 2. Generate a unique name
    const fileName = `avatar-${userId}-${Math.random()}`;

    // 3. Perform the upload
    const { error: storageError } = await supabase.storage
      .from("avatar") // Bucket name is "avatar"
      .upload(fileName, avatar);

    if (storageError) throw new Error(storageError.message);

    // 4. THIS IS THE KEY: Generate the public URL that matches your manual link
    const { data } = supabase.storage.from("avatar").getPublicUrl(fileName);

    avatarUrl = data.publicUrl;
    // This will result in: https://.../public/avatar/avatar-123...
  }

  // 5. Update the profile table
  const { data, error } = await supabase
    .from("profiles")
    .update({ ...updates, avatarUrl })
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}
