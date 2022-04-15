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
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import Chat from "./Chat";
import {useCollection} from 'react-firebase-hooks/database'

function Sidebar() {
  const { data: session } = useSession();
  const userEmail = session?.user.email;
  const chatRef = query(collection(db, 'chats'),where('users','array-contains',`${userEmail}`))
  const [chatSnap] = useCollection(chatRef);
  // const getChats = async () => {
  //   const querySnapshot = await getDocs(collection(db, "chats"));

  //   return querySnapshot.forEach((chat) => {
  //     <Chat key={chat.id} id={chat.id} user={chat.data().users} />;
  //   });
  // };
  const createChat = async () => {
    const input = prompt("Please enter email");
    const chatExists = await chatAlreadyExists(input);
    if (!input) return null;
    if (
      EmailValidator.validate(input) &&
      input !== session?.user.email &&
      !chatExists
    ) {
      setDoc(doc(db, "chats", `${session?.user.email}${input}`), {
        users: [session?.user.email, input],
      });
    }
  };

  const chatAlreadyExists = async (recipientEmail) => {
    const keyLeft = `${session?.user.email}${recipientEmail}`;
    const keyRight = `${recipientEmail}${session?.user.email}`;
    const docRefL = doc(db, "chats", keyLeft);
    const docRefR = doc(db, "chats", keyRight);
    const docSnapL = await getDoc(docRefL);
    const docSnapR = await getDoc(docRefR);
    const lE = docSnapL.exists();
    const rE = docSnapR.exists();
    return lE || rE;
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
        <div className="p-3">
          {chatSnap?.doc.map(chat => (
            <Chat key={chat.id} id={chat.id} user={chat.data().users} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
