'use client'

import { useDescope } from "@descope/nextjs-sdk/client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LoaderIcon, LogOut } from "lucide-react";
import { useState } from "react";

export default function LogoutDropdownMenuItem() {
    const { logout } = useDescope();
    const [loading, setLoading] = useState(false);

    return <DropdownMenuItem className="cursor-pointer" onClick={async () => {
        // setLoading(true);
        await logout();
        window.location.reload();
        // setTimeout(() => setLoading(false), 1000);
    }}>
        {loading ? <>
            <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
            <span>Logging out...</span>
        </> : <>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
        </>}
        {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
    </DropdownMenuItem>
}