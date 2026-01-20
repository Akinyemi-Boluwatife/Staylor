import supabase from "./supabase";

export async function getParkingSlots() {
  const { data: parkingSlots, error } = await supabase
    .from("parkingSlots")
    .select("*, Rentals(id, status, startTime, endTime)");

  if (error)
    throw new Error("Something wrong happened when getting parking slots");

  return parkingSlots;
}
