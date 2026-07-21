import { ShieldOff } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function PermissionDenied() {
  return (
    <div className="flex flex-col items-center justify-center p-4 font-sans">
      <Card className="w-full max-w-md">
        <CardHeader className="items-center space-y-3 text-center">
          <ShieldOff className="h-10 w-10 text-muted-foreground" />
          <CardTitle className="text-2xl font-bold">
            Permission denied
          </CardTitle>
          <CardDescription>
            You can&apos;t access this feature. New accounts are created by the
            administrator.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default PermissionDenied;
