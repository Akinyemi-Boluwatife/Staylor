import supabase from "./supabase";

export async function getRentals() {
  const { data, error } = await supabase
    .from("Rentals")
    .select(
      "*, parkingSlots(slotNumber, slotName, description), profiles(fullName)",
    )
    .order("startTime", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Rentals could not be loaded");
  }

  return data;
}

export async function getRental(id) {
  const { data, error } = await supabase
    .from("Rentals")
    .select("*, parkingSlots(slotNumber, slotName, description), profiles(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Rental not found");
  }

  return data;
}

export async function createRental({ userId, slotId, startTime, endTime }) {
  const cleanedUserId = userId === "" ? null : userId;
  const { data, error } = await supabase.rpc("create_rental_api", {
    user_id_input: cleanedUserId,
    slot_id_input: slotId,
    start_time_input: startTime,
    end_time_input: endTime,
  });

  if (error) {
    console.error("Rental Error:", error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function updateRental(id, updates) {
  const { data, error } = await supabase
    .from("bookings")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Rental could not be updated");
  }

  return data;
}

export async function deleteRental(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Rental could not be deleted");
  }

  return data;
}
