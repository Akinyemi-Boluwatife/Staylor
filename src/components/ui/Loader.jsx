import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <ClipLoader
        color="gray"
        loading={true}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
