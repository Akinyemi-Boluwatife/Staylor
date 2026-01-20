function ErrorMessage({ errorMessage }) {
  return (
    <div className="flex h-full w-full items-center justify-center text-2xl text-red-500">
      <p>{errorMessage}</p>
    </div>
  );
}

export default ErrorMessage;
