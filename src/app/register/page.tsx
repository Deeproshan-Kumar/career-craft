"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import FormFooter from "@/components/FormFooter";
import { registrationAction } from "./registration.action";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface RegisterFormData {
  name: string;
  userName: string;
  email: string;
  phoneNumber: string;
  role: "applicant" | "employer";
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
    name: "",
    userName: "",
    email: "",
    phoneNumber: "",
    role: "applicant",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const registerData = {
      name: registerFormData.name.trim(),
      userName: registerFormData.userName.toLowerCase().trim(),
      email: registerFormData.email.toLowerCase().trim(),
      phoneNumber: registerFormData.phoneNumber.trim(),
      role: registerFormData.role,
      password: registerFormData.password.trim(),
      confirmPassword: registerFormData.confirmPassword.trim(),
    };

    const result = await registrationAction(registerData);

    if (result.success) {
      toast.success(result.message);
      setRegisterFormData({
        name: "",
        userName: "",
        email: "",
        phoneNumber: "",
        role: "applicant",
        password: "",
        confirmPassword: "",
      });
    } else {
      toast.error("Registration failed: " + result.message);
    }
  };

  return (
    <section className="h-full w-full p-5 pb-24">
      <div className="max-w-md w-full mx-auto">
        <Logo className="justify-center mb-4" />
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Welcome to Career Craft!</CardTitle>
            <CardDescription>Already have an account?</CardDescription>
            <CardAction>
              <Link href="/login">
                <Button variant="link" className="underline cursor-pointer">
                  Login
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
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={registerFormData.name}
                      placeholder="Full Name"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="userName"
                    type="text"
                    value={registerFormData.userName}
                    placeholder="Username"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={registerFormData.email}
                    placeholder="Email"
                    required
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Role</Label>
                  </div>
                  <Select
                    onValueChange={(value) =>
                      setRegisterFormData((prevData) => ({
                        ...prevData,
                        role: value as "applicant" | "employer",
                      }))
                    }
                    name="role"
                    value={registerFormData.role}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="applicant">Job Applicant</SelectItem>
                        <SelectItem value="employer">Employer</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={registerFormData.password}
                      placeholder="Password"
                      required
                      onChange={handleInputChange}
                    />
                    <button
                      className="bg-white absolute top-1/2 -translate-y-1/2 right-1 px-2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                    >
                      {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                  </div>
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                  </div>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={registerFormData.confirmPassword}
                      placeholder="Confirm Password"
                      required
                      onChange={handleInputChange}
                    />
                    <button
                      className="bg-white absolute top-1/2 -translate-y-1/2 right-1 px-2 cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      type="button"
                    >
                      {showConfirmPassword ? (
                        <Eye size={18} />
                      ) : (
                        <EyeOff size={18} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Button type="submit" className="w-full cursor-pointer">
                    Register
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

export default Register;
