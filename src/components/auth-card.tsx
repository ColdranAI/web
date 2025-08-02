"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function AuthCard({
  title,
  description,
  mode = "sign-in",
}: {
  title: string;
  description: string;
  mode?: "sign-in" | "sign-up";
}) {
  const [googleLoading, setGoogleLoading] = useState(false);
  const [discordLoading, setDiscordLoading] = useState(false);

  return (
    <div className="flex items-center justify-center w-full min-h-[60vh]">
      <Card className="max-w-md w-full border border-neutral-100">
        <div className="flex items-center justify-center">
          <ColdranLogo />
        </div>
        <CardHeader className="text-center">
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 my-6">
            <div className="w-full gap-4 flex flex-col">
              <SignInButton
                title="Sign in with Google"
                provider="google"
                loading={googleLoading}
                setLoading={setGoogleLoading}
                callbackURL="/dashboard"
                icon={<Icons.Google />}
              />
              <SignInButton
                title="Sign in with Discord"
                provider="discord"
                loading={discordLoading}
                setLoading={setDiscordLoading}
                callbackURL="/dashboard"
                icon={<Icons.Discord />}
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link
              href="/terms"
              className="text-primary font-medium hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-primary font-medium hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-neutral-100 pt-4">
          <p className="text-sm text-muted-foreground">
            {mode === "sign-in" ? (
              <>
                Don't have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-primary font-medium hover:underline"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="text-primary font-medium hover:underline"
                >
                  Sign in
                </Link>
              </>
            )}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

const SignInButton = ({
  title,
  provider,
  loading,
  setLoading,
  callbackURL,
  icon,
}: {
  title: string;
  provider: "google" | "discord";
  loading: boolean;
  setLoading: (loading: boolean) => void;
  callbackURL: string;
  icon: React.ReactNode;
}) => {
  return (
    <Button
      variant="outline"
      size="lg"
      className={cn("w-full gap-2 border border-neutral-200")}
      disabled={loading}
      onClick={async () => {
        await signIn.social(
          {
            provider: provider,
            callbackURL: callbackURL,
          },
          {
            onRequest: (ctx) => {
              setLoading(true);
            },
          },
        );
      }}
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : icon}
      {title}
    </Button>
  );
};

const ColdranLogo = () => {
  return (
    <div className="group relative overflow-visible">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 90 60"
        width="64"
        height="48"
        style={{ overflow: "visible" }}
      >
        <defs>
          <style>
            {`
              .cls-1 {
                fill: #f6461a;
                transition: transform 0.3s ease-in-out, fill 0.3s ease;
              }
              .cls-2 {
                fill: #db342c;
                transition: transform 0.3s ease-in-out, fill 0.3s ease;
              }
              svg:hover .cls-1 {
                fill: #ff5733;
                z-index: 5;
                transform: translateX(-25px);
              }
              svg:hover .cls-2 {
                fill: #ff2a1f;
                z-index: 1;
                transform: translateX(-13px);
              }
            `}
          </style>
        </defs>
        <title>Kite logo trimmed</title>
        <polygon className="cls-1" points="30 0 0 30 30 60 60 30 90 0 30 0" />
        <polygon className="cls-2" points="30 60 60 30 90 60 30 60" />
      </svg>
    </div>
  );
};
