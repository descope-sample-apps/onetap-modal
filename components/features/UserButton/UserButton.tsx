import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuShortcut } from "../../ui/dropdown-menu";
import LogoutDropdownMenuItem from "./LogoutDropdownMenuItem";

function UserButton({ session }: { session: any }) {

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase())
            .join("");
    };

    if (!session) {
        return null;
    }
    const name = session.token.name

    return <UserDropdown>
        <div className="flex space-x-2 w-full justify-center items-center hover:bg-slate-100 transition p-2">
            <Avatar>
                {/* <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" /> */}
                <AvatarFallback className="font-serif text-sm text-gray-200 bg-slate-800">{getInitials(name)}</AvatarFallback>
            </Avatar>
            <p className="font-serif text-sm">{name}</p>
        </div>
    </UserDropdown>
}

export default UserButton


function UserDropdown({ children }: { children: React.ReactNode }) {
    return <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
            {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem> */}
           <LogoutDropdownMenuItem />
        </DropdownMenuContent>
    </DropdownMenu>
}