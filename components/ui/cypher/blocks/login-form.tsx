import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/cypher/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/cypher/card";
import { Input } from "@/components/ui/cypher/input";
import { Label } from "@/components/ui/cypher/label";

import "@/components/ui/cypher/styles/cyberpunk.css";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 cyphercn", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">TERMINAL ACCESS</CardTitle>
          <CardDescription className="text-xs">
            Enter credentials to authenticate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">EMAIL</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@terminal.sys"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <Label htmlFor="password">PASSWORD</Label>
                  <a
                    href="#"
                    className="inline-block text-xs underline-offset-4 hover:underline"
                  >
                    FORGOT CREDENTIALS?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                [ AUTHENTICATE ]
              </Button>
            </div>
            <div className="mt-4 text-center text-xs">
              No access?{" "}
              <a href="#" className="underline underline-offset-4">
                REQUEST ACCESS
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
