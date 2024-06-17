'use client'
import { useDescope, useSession } from "@descope/nextjs-sdk/client";
import { useEffect, useState } from "react";
let oneTapInitialized = false;

export default function Home() {
  const [response, setResponse] = useState('');

  const { isAuthenticated, isSessionLoading } = useSession();
  const { logout } = useDescope();

  if (isSessionLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <OneTapComp />
      {isAuthenticated ? <div>
        <p>
          Authenticated
        </p>
        <button onClick={async () => await logout()}>Logout</button>
      </div> : <p>Not Authenticated</p>}
    </main>
  );
}




const OneTapComp = () => {
  const oneTap = true;
  const sdk = useDescope();
  const { isAuthenticated, isSessionLoading } = useSession();

  const startOneTap = async () => {
    // eslint-disable-next-line
    if (oneTapInitialized) return;

    const res: any = await sdk.fedcm.oneTap('google-implicit');
    // setResponse(JSON.stringify(res.data, null, 2));

    oneTapInitialized = true;
  };
  useEffect(() => {
    if (oneTap && !isAuthenticated && !isSessionLoading) {
      startOneTap();
    }
  }, [isAuthenticated, isSessionLoading]);

  // Return some JSX here. For example, return null if there's nothing to render:
  return null;
};