import {
  ChatAlt2Icon,
  DotsVerticalIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import * as EmailValidator from "email-validator";
import {
  setDoc,
  addDoc,
  collection,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

function Sidebar() {
  const { data: session } = useSession();
  const createChat = () => {
    const input = prompt("Please enter email");
    chatAlreadyExists(input);
    if (!input) return null;
    if (EmailValidator.validate(input) && input !== session?.user.email) {
      setDoc(doc(db, "chats", `${session?.user.email}${input}`), {
        users: [session?.user.email, input],
      });
    }
  };

  const chatAlreadyExists = async (recipientEmail) => {
    const key = `${session?.user.email}${recipientEmail}`;
    console.log(key)
    const docRef = doc(db, "chats", key );
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  };

  return (
    <div className="">
      <div className="sticky top-0 bg-white z-50 mt-2">
        <div className="relative">
          <img
            src={session?.user.image}
            alt="profile-pic"
            className="h-10 rounded-full cursor-pointer inline-block"
          />
          <ChatAlt2Icon className="justify-end space-x-4 navBtn inline-block absolute right-10 mt-2" />
          <DotsVerticalIcon className="justify-end space-x-4 navBtn inline-block absolute right-0 mt-2" />
        </div>
        <div className="mt-3 relative p-3 rounded-md ">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <div>
            <input
              type="text"
              placeholder="search"
              className="bg-gray-50 block w-full pl-10 border-gray-300 focus:ring-black focus:border-black rounded-md  "
            />
          </div>
        </div>
        <div className="pl-3">
          <button
            onClick={createChat}
            className="text-center bg-gray-100 rounded-md p-2 "
          >
            Start A New Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
