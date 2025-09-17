import { signOut as nextAuthSignOut } from "next-auth/react";

export function useCustomSignOut() {
  return () => nextAuthSignOut({ callbackUrl: "/" });
}

