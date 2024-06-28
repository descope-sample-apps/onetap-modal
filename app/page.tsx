
import AuthenticationDialog from "@/components/features/AuthenticationDialog";
import LogoutButton from "@/components/features/LogoutButton";
import OneTapComp from "@/components/features/OneTapComp";
import UserButton from "@/components/features/UserButton/UserButton";
import { AvatarFallback } from "@/components/ui/avatar";
import { useSession, useUser } from "@descope/nextjs-sdk/client";
import { session } from "@descope/nextjs-sdk/server";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
  const sessionRes = session();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <OneTapComp />
      {sessionRes ? <div>
        <p>Authenticated</p>
        <UserButton
          session={sessionRes}
        />
        {/* <LogoutButton /> */}
      </div> : <div>
        <p>Not Authenticated</p>
        <AuthenticationDialog />
      </div>}
    </main>
  );
}
