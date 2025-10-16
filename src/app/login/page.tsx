"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import FormFooter from "@/components/FormFooter";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface LoginFormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [loginFormDate, setLoginFormDate] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setLoginFormDate((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginFormDate);
  };

  return (
    <section className="h-full w-full p-5 pb-24">
      <div className="max-w-md w-full mx-auto px-3">
        <Logo className="justify-center mb-4" />
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Welcome back to Career Craft!</CardTitle>
            <CardDescription>Don't have an account?</CardDescription>
            <CardAction>
              <Link href="/register">
                <Button variant="link" className="underline cursor-pointer">
                  Register
                </Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardHeader>
            <hr />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Username or Email</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    value={loginFormDate.username}
                    placeholder="Username or Email"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={togglePassword ? "text" : "password"}
                      value={loginFormDate.password}
                      placeholder="Password"
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      className="bg-white absolute top-1/2 -translate-y-1/2 right-1 px-2 cursor-pointer"
                      onClick={() => setTogglePassword(!togglePassword)}
                      type="button"
                    >
                      {togglePassword ? (
                        <Eye size={18} />
                      ) : (
                        <EyeOff size={18} />
                      )}
                    </button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Button type="submit" className="w-full cursor-pointer">
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <FormFooter />
    </section>
  );
};

export default Login;
