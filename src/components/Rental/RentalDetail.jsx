import { IconArrowBack } from "@tabler/icons-react";
import { Button } from "../ui/button";
import RentalInfo from "./RentalInfo";
import { useParams } from "react-router";
import { useGoBack } from "../../hooks/useGoBack";

function RentalDetail() {
  const { rentalId } = useParams();
  const goBack = useGoBack();

  return (
    <>
      <div className="mb-3.5 flex items-center justify-between text-5xl font-semibold">
        <div className="flex items-center justify-center">
          <div>Rental #{rentalId}</div>
        </div>

        <Button onClick={goBack}>
          <IconArrowBack /> BACK
        </Button>
      </div>

      <RentalInfo />
    </>
  );
}

export default RentalDetail;
