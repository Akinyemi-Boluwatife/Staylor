import { ClipLoader } from "react-spinners";

function LittleSpinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ClipLoader
        color="#000"
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LittleSpinner;
