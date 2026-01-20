import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogFooter } from "@/components/ui/dialog";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useUpdateCurrentUserDetails } from "../../features/user-management/useUpdateCurrentUserDetails";
import LittleSpinner from "../ui/LittleSpinner";

function EditUserDetails({ onClose }) {
  const { userData } = useCurrentUser();
  const { updateCurrentUserDetails, isUpdating } =
    useUpdateCurrentUserDetails();

  const {
    fullName,
    email,
    role,
    gender,
    nationalId,
    nationality,
    countryCode,
    avatarUrl,
    vehicleModel,
    createdAt,
  } = userData || {};

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: fullName,
      vehicleModel: vehicleModel || "",
      gender: gender || "",
      nationality: nationality || "",
      nationalId: nationalId || "",
      role: role || "customer",
    },
  });

  function onSubmit(data) {
    const { fullName, vehicleModel, gender, nationality, nationalId, avatar } =
      data;

    updateCurrentUserDetails(
      {
        userId: userData.id,
        updates: { fullName, vehicleModel, gender, nationality, nationalId },
        avatar: avatar?.[0],
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 py-6">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
        <div className="space-y-3">
          <Label htmlFor="vehicleModel" className="text-base font-medium">
            Vehicle Model
          </Label>
          <Input
            id="vehicleModel"
            className="h-12 bg-muted/30 px-4 text-base md:h-14"
            placeholder="Please Enter your vehicle model"
            disabled={isUpdating}
            {...register("vehicleModel", {
              // required: "Your Vehicle Model is required",
            })}
          />
          {errors.vehicleModel && (
            <p className="text-sm font-medium text-destructive">
              {errors.vehicleModel.message}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="nationality" className="text-base font-medium">
            Nationality
          </Label>
          <Input
            id="nationality"
            className="h-12 bg-muted/30 px-4 text-base md:h-14"
            placeholder="Please enter your nationality"
            disabled={isUpdating}
            {...register("nationality", {
              // required: "Nationality is required",
            })}
          />
          {errors.nationality && (
            <p className="text-sm font-medium text-destructive">
              {errors.nationality.message}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="nationalId" className="text-base font-medium">
            National ID
          </Label>
          <Input
            id="nationalId"
            type="text"
            className="h-12 bg-muted/30 px-4 text-base md:h-14"
            placeholder="Please enter your national ID"
            disabled={isUpdating}
            {...register(
              "nationalId",
              // { required: "National ID is required" }
            )}
          />
          {errors.nationalId && (
            <p className="text-sm font-medium text-destructive">
              {errors.nationalId.message}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="role" className="text-base font-medium">
            Role
          </Label>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={true}
              >
                <SelectTrigger className="h-12 bg-muted/30 px-4 text-base md:h-14">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin" className="py-3 text-base">
                    Admin
                  </SelectItem>
                  <SelectItem value="customer" className="py-3 text-base">
                    Customer
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="gender" className="text-base font-medium">
            Gender
          </Label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isUpdating}
              >
                <SelectTrigger className="h-12 bg-muted/30 px-4 text-base md:h-14">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male" className="py-3 text-base">
                    Male
                  </SelectItem>
                  <SelectItem value="female" className="py-3 text-base">
                    Female
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="avatar" className="text-base font-medium">
            Profile Photo
          </Label>
          <Input
            id="avatar"
            type="file"
            accept="image/*"
            className="h-12 bg-muted/30 px-4 py-2 text-base md:h-14"
            disabled={isUpdating}
            {...register("avatar")}
          />
        </div>
      </div>

      <DialogFooter className="mt-8 space-x-2 sm:gap-0">
        <Button
          variant="outline"
          type="reset"
          size="lg"
          className="h-12 px-8 text-base md:h-12"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          size="lg"
          className="h-12 px-10 text-base md:h-12"
          disabled={isUpdating}
        >
          {isUpdating ? <LittleSpinner /> : "Save Changes"}
        </Button>
      </DialogFooter>
    </form>
  );
}

export default EditUserDetails;
