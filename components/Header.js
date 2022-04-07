import Image from "next/image";
import logo from "../assets/health-plus-logo.svg";
import logo_min from "../assets/health-plus-logo-min.svg";
import {
  UserCircleIcon,
  ChatAltIcon,
  MenuIcon,
  HomeIcon,
  UserGroupIcon,
  ChipIcon,
  DocumentAddIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left Side of the Navbar Header - Contains the image of the app in svg format */}
        {/* Logo responsive at Higher resolutions of the display screen */}
        <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
          <Image src={logo} layout="fill" objectFit="contain" />
        </div>
        {/* Logo min responsive at mobile resolutions */}
        <div className="relative h-24 w-24  lg:hidden flex-shrink-0 cursor-pointer">
          <Image src={logo_min} layout="fill" objectFit="contain" />
        </div>
        {/* Right Side of the Navbar Header - Contains the shortcut icons to differnt sections of the profile of the user*/}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <ChatAltIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <DocumentAddIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <ChipIcon className="navBtn" />
          <UserCircleIcon className="navBtn" />
        </div>
      </div>
    </div>
  );
}

export default Header;
