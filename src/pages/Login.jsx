import LoginForm from "../features/authentication/LoginForm";

function Login() {
  //Only the admin can login to do everything in this app. Users cannot do anything for now, i will implement it later.
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-muted/50 p-4">
      <div className="mb-8 flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Staylor</h1>
        <p className="text-muted-foreground">Log in to your account </p>
      </div>
      <LoginForm />
    </main>
  );
}

export default Login;
