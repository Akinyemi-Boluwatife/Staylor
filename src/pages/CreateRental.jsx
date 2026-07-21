import CreateRentalForm from "../components/Rentals/CreateRentalForm";
import { useUser } from "../features/authentication/useUser";

function CreateRental() {
  const { isDemo } = useUser();

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Create Rental</h1>
        <p className="text-muted-foreground">
          {isDemo
            ? "Creating rentals is disabled for the demo account."
            : "Fill in the details below to create a new rental."}
        </p>
      </div>

      {!isDemo && <CreateRentalForm />}
    </div>
  );
}

export default CreateRental;
