import { useForm } from "react-hook-form";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useNavigate, useSearchParams } from "react-router";
import { useParkingSlots } from "../Parking-Slots/useParkingSlots";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Loader from "../ui/Loader";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import LittleSpinner from "../ui/LittleSpinner";
import { useCreateRental } from "./useCreateRental";

function CreateRentalForm() {
  const { createRental, isCreatingRental } = useCreateRental();
  const { parkingSlots } = useParkingSlots();

  const [searchParams] = useSearchParams();
  const preSelectedSlotId = searchParams.get("slotId").toString() || "";
  const navigate = useNavigate();

  const { userInfo, isLoading: isLoadingUserInfo } = useCurrentUser();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      slotId: preSelectedSlotId,
    },
  });

  function onSubmit(data) {
    createRental(data);
  }

  if (isLoadingUserInfo) return <Loader />;

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Parking Slot Selection */}
            <div className="space-y-2">
              <Label htmlFor="slotId">Parking Slot</Label>
              <Select
                onValueChange={(val) => setValue("slotId", val)}
                defaultValue={preSelectedSlotId}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a parking slot" />
                </SelectTrigger>
                <SelectContent>
                  {parkingSlots?.map((slot) => (
                    <SelectItem key={slot.id} value={slot.id.toString()}>
                      {slot.slotNumber}{" "}
                      {slot.slotName ? `(${slot.slotName})` : ""}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="hidden"
                {...register("slotId", {
                  required: "Parking slot is required",
                })}
              />
              {errors.slotId && (
                <p className="text-sm text-red-500">{errors.slotId.message}</p>
              )}
            </div>

            {/* Guest Selection */}
            <div className="space-y-2">
              <Label htmlFor="userId">Guest</Label>
              <Select onValueChange={(val) => setValue("userId", val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a guest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={userInfo?.id || ""}>
                    {userInfo?.fullName || "Anonymous"}
                  </SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" {...register("userId")} />
              {errors.userId && (
                <p className="text-sm text-red-500">{errors.userId.message}</p>
              )}
            </div>

            {/* Start Time */}
            <div className="space-y-2">
              <Label htmlFor="startTime">Check-in Time</Label>
              <Input
                id="startTime"
                type="datetime-local"
                {...register("startTime", {
                  required: "Check-in time is required",
                  setValueAs: (v) => (v ? new Date(v).toISOString() : null),
                })}
              />
              {errors.startTime && (
                <p className="text-sm text-red-500">
                  {errors.startTime.message}
                </p>
              )}
            </div>

            {/* End Time */}
            <div className="space-y-2">
              <Label htmlFor="endTime">Check-out Time</Label>
              <Input
                id="endTime"
                type="datetime-local"
                {...register("endTime", {
                  required: "Check-out time is required",
                  setValueAs: (v) => (v ? new Date(v).toISOString() : null),
                })}
              />
              {errors.endTime && (
                <p className="text-sm text-red-500">{errors.endTime.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
              disabled={isCreatingRental}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isCreatingRental}>
              {isCreatingRental ? <LittleSpinner /> : "Create Rental"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default CreateRentalForm;
