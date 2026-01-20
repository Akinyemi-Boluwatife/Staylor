import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  const navigate = useNavigate();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-muted/50 p-4">
      <div className="mb-8 flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Staylor</h1>
        <p className="text-muted-foreground">
          Log in to your account or{" "}
          <Button
            variant="link"
            className="h-auto p-0 font-semibold"
            onClick={() => navigate("/create-account")}
          >
            create a new account
          </Button>
        </p>
      </div>
      <LoginForm />
    </main>
  );
}

export default Login;
