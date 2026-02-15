import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/cypher/button";
import { Card, CardContent } from "@/components/ui/cypher/card";
import { Input } from "@/components/ui/cypher/input";
import { Label } from "@/components/ui/cypher/label";

import "@/components/ui/cypher/styles/cyberpunk.css";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 cyphercn", className)} {...props}>
      <Card className="p-5">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-xl font-bold">SYSTEM LOGIN</h1>
                <p className="text-balance text-xs text-muted-foreground">
                  Enter credentials to authenticate
                </p>
              </div>
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
                <div className="flex items-center">
                  <Label htmlFor="password">PASSWORD</Label>
                  <a
                    href="#"
                    className="ml-auto text-xs underline-offset-2 hover:underline"
                  >
                    FORGOT CREDENTIALS?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                [ AUTHENTICATE ]
              </Button>
              <div className="text-center text-xs">
                No access?{" "}
                <a href="#" className="underline underline-offset-4">
                  REQUEST ACCESS
                </a>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:flex items-center justify-center border-l border-foreground dark:border-ring">
            <pre className="text-xs text-foreground/70 leading-relaxed text-center select-none">
{`╔══════════════════════╗
║                      ║
║   CYPHERCN v1.0      ║
║   SECURE TERMINAL    ║
║                      ║
║   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ║
║   SYSTEM ONLINE      ║
║                      ║
╚══════════════════════╝`}
            </pre>
          </div>
        </CardContent>
      </Card>
      <p className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By continuing, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </p>
    </div>
  );
}
