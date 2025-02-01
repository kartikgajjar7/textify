"use client";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { signIn } from "next-auth/react";
import FormError from "@/components/auth/Formerror";
import login from "../../../actions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import FormSuccess from "@/components/auth/Formsuccess";
import { Button } from "@/components/ui/button";
import { DEFAULT_REDIRECT } from "@/routes";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "../../../schema";
import { useState } from "react";
import { useTransition } from "react";

export default function Loginform() {
  const router = useRouter();
  const [ispending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log("hey");
    setSuccess("");
    setError("");
    startTransition(() => {
      login(values).then((res) => {
        setError(
          res?.error instanceof z.ZodError ? res.error.message : res?.error
        );
        setSuccess(res?.success ? "Email sent" : undefined);
      });
    });
  }

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email<span style={{ color: "red" }}>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={ispending}
                    placeholder="your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Password<span style={{ color: "red" }}>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={ispending}
                    placeholder="your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex my-6 items-center">
            <div className="w-auto h-1 bg-slate-400 flex-grow rounded-full"></div>
            <div className="mx-2 ">or</div>
            <div className="w-auto h-1 bg-slate-400 flex-grow rounded-full"></div>
          </div>
          <div className="w-[100%] flex flex-row  items-center justify-around space-x-4">
            <Button
              disabled={ispending}
              type="button"
              onClick={() => {
                signIn("github", {
                  callbackUrl: DEFAULT_REDIRECT,
                });
              }}
              className="bg-white text-black hover:bg-gray-100 w-[45%]"
            >
              <img src="/github.svg" alt="sda" />
            </Button>
            <Button
              disabled={ispending}
              type="button"
              onClick={() => {
                signIn("google", {
                  callbackUrl: DEFAULT_REDIRECT,
                });
              }}
              className="bg-white text-black hover:bg-gray-100 w-[45%]"
            >
              <img className=" w-[29px]" src="/goggle.svg" alt="" />
            </Button>
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button className="w-[100%]" type="submit" disabled={ispending}>
            {ispending ? (
              <div className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </div>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
      <Button
        onClick={() => {
          router.push("/auth/signup");
        }}
        className=" bg-transparen w-full  border-none shadow-none text-black hover:bg-white opacity-100"
      >
        Dont have an account? Sign up{" "}
      </Button>
    </>
  );
}
