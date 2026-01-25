import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useUpdateCurrentUserDetails } from "../../features/user-management/useUpdateCurrentUserDetails";

function EditUserDetails({ onClose }) {
  const { userData } = useCurrentUser();
  const { updateCurrentUserDetails, isUpdating } =
    useUpdateCurrentUserDetails();

  const { fullName, gender, nationalId, nationality, vehicleModel } =
    userData || {};

  const {
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
    },
  });

  function handleUpdate(eOrValue, field) {
    const value = eOrValue?.target ? eOrValue.target.value : eOrValue;

    if (!value) return;

    if (field === "avatar") {
      const file = eOrValue.target.files?.[0];
      if (!file) return;

      updateCurrentUserDetails(
        {
          userId: userData.id,
          avatar: file,
        },
        {
          onSuccess: () => {
            onClose();
          },
        },
      );
      return;
    }

    updateCurrentUserDetails(
      {
        userId: userData.id,
        updates: { [field]: value },
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  }

  return (
    <form className="space-y-8 py-6">
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
            onBlur={(e) => handleUpdate(e, "vehicleModel")}
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
            onBlur={(e) => handleUpdate(e, "nationality")}
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
            onBlur={(e) => handleUpdate(e, "nationalId")}
          />
          {errors.nationalId && (
            <p className="text-sm font-medium text-destructive">
              {errors.nationalId.message}
            </p>
          )}
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
                onValueChange={(value) => {
                  field.onChange(value); // Updates the form internal state
                  handleUpdate(value, "gender"); // Your immediate update function
                }}
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
            // onBlur={(e) => handleUpdate(e, "gender")}
            onChange={(e) => handleUpdate(e, "gender")}
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
            onChange={(e) => handleUpdate(e, "avatar")}
          />
        </div>
      </div>
    </form>
  );
}

export default EditUserDetails;
