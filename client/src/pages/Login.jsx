import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PageWrapper from "../components/PageWrapper";

export default function Login() {
  return (
    <PageWrapper title="Login">
      <div className="flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Email</Label>
              <Input placeholder="you@example.com" />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" />
            </div>
            <Button className="w-full">Login</Button>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
}
