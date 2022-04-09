import Image from "next/image";
import logo from "../assets/health-plus-logo.svg";
import logo_min from "../assets/health-plus-logo-min.svg";
import {
  ChatAltIcon,
  HomeIcon,
  UserGroupIcon,
  ChipIcon,
  DocumentAddIcon,
} from "@heroicons/react/outline";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";


function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left Side of the Navbar Header - Contains the image of the app in svg format */}
        {/* Logo responsive at Higher resolutions of the display screen */}
        <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
          <Image
            onClick={() => router.push("/")}
            src={logo}
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Logo min responsive at mobile resolutions */}
        <div className=" h-24 w-24  lg:hidden flex-shrink-0 cursor-pointer items-center">
          <Image
            onClick={() => router.push("/")}
            src={logo_min}
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Right Side of the Navbar Header - Contains the shortcut icons to differnt sections of the profile of the user*/}
        {session ? (
          <div className="flex items-center justify-end space-x-4 ">
            <HomeIcon
              onClick={() => router.push("/feed/1")}
              className="navBtn"
            />
            <ChatAltIcon
              onClick={() => router.push("/messages")}
              className="navBtn"
            />
            <DocumentAddIcon
              onClick={() => router.push("/documents")}
              className="navBtn"
            />
            <UserGroupIcon
              onClick={() => router.push("/people")}
              className="navBtn"
            />
            <ChipIcon onClick={() => router.push("/diagnosis")} className="navBtn" />
            <img
              onClick={signOut}
              src={session.user.image}
              alt="profile-pic"
              className="h-10 rounded-full cursor-pointer navBtn"
            />
          </div>
        ) : (
          <button className="" onClick={signIn}>
            {" "}
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
