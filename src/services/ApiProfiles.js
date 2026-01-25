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
  const isNewFile = avatar instanceof File;
  let avatarUrl = avatar;

  if (isNewFile) {
    const fileName = `avatar-${userId}-${Math.random()}`;

    const { error: storageError } = await supabase.storage
      .from("avatar")
      .upload(fileName, avatar);

    if (storageError) throw new Error(storageError.message);

    const { data } = supabase.storage.from("avatar").getPublicUrl(fileName);

    avatarUrl = data.publicUrl;
  }

  const { data, error } = await supabase
    .from("profiles")
    .update({ ...updates, avatarUrl })
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}
