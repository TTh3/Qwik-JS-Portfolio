/* eslint-disable qwik/valid-lexical-scope */
import {
  component$,
  useStore,
  useClientEffect$,
  useSignal,
} from "@builder.io/qwik";
import widgetPhoto from "./myPhoto-square.png";
import FirebaseLogo from "./FirebaseLogo.png";

import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db } from "../../firebase";
import {
  query,
  orderBy,
  onSnapshot,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

export default component$(({ ChatVisibility }) => {
  if (!ChatVisibility.value) return;
  const authDetails = useStore({ userDetails: {} });
  const Messages = useStore({ messages: [] });
  const MsgInputRef = useSignal();
  const MsgAutoScrollRef = useSignal();
  useClientEffect$(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      messages = messages.map((e) => {
        return { ...e, timestamp: "" };
      });
      Messages.messages = messages;
    });
    return () => unsubscribe();
  });
  return (
    <div className="flex ChatWrapper bottom-0 w-full overflow-y-auto fixed z-10">
      <div className="Chat lg:w-1/2 w-5/6 md-lg:w-2/3 min-h-[400px] h-[80vh] rounded-xl overflow-hidden flex relative">
        <button
          aria-label="Exit Chat"
          className="ExitBtn absolute top-5 bg-violet-500 hover:bg-violet-600 active:scale-95 transtion-all ease duration-200 flex right-5 p-1 rounded-full z-10"
          onClick$={() => {
            ChatVisibility.value = false;
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <div className="head sm:flex hidden flex-col justify-between text-center items-center p-4 bg-violet-500">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full mb-2 object-cover overflow-hidden border-2 border-gray-200">
              <img
                src={widgetPhoto}
                className="w-full h-full"
                alt="Widget Photo"
              />
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-violet-400 shadow-sm">
              Jsilverio.
            </span>
          </div>
          <div className="flex flex-col gap-2 text-center items-center">
            <img src={FirebaseLogo} className="w-8" alt="Firebase Logo" />
          </div>
        </div>
        <div className="content flex flex-col justify-between w-full">
          <div className="messages w-full h-full overflow-y-auto p-6">
            <span>Jsilverio.</span>
            <li>Hi! Welcome To Da Chat!</li>
            <li>Feel Free To Chat Safely With Others</li>
            <li>I will be with you in a bit...</li>
            <div className="three-dot flex-col flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#323e4e"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
            {Messages.messages.length != 0 ? (
              Messages.messages.map((msg) => (
                <ul className={`${msg.name}`}>
                  <span>
                    {msg.name}
                    {Object.keys(authDetails.userDetails).length !== 0 &&
                    authDetails.userDetails.displayName === msg.name
                      ? " (You)"
                      : ""}
                  </span>
                  <li
                    className={`${
                      Object.keys(authDetails.userDetails).length !== 0 &&
                      authDetails.userDetails.displayName === msg.name
                        ? " you"
                        : ""
                    }`}
                  >
                    {msg.text}
                  </li>
                </ul>
              ))
            ) : (
              <li className="loading text-2xl font-semibold">
                Loading Messages....
              </li>
            )}
            <div ref={MsgAutoScrollRef}></div>
          </div>
          <div className="message-sender w-full h-fit justify-center flex border-t border-gray-800">
            {Object.keys(authDetails.userDetails).length !== 0 ? (
              <>
                <input
                  type="text"
                  className="outline-none bg-transparent w-full px-3 py-6 text-lg"
                  placeholder="Message"
                  ref={MsgInputRef}
                />
                <button
                  className="px-5 bg-gray-800 text-lg hover:bg-gray-900 transition-all duration-250"
                  onClick$={async () => {
                    if (MsgInputRef.value.value === "") {
                      MsgInputRef.value.placeholder = "Valid Message Please...";
                      return;
                    }
                    const { uid, displayName } = auth.currentUser;
                    await addDoc(collection(db, "messages"), {
                      text: MsgInputRef.value.value,
                      name: displayName,
                      uid,
                      timestamp: serverTimestamp(),
                    });
                    MsgInputRef.value.value = "";
                    MsgAutoScrollRef.value?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Send
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick$={() => {
                  const provider = new GoogleAuthProvider();
                  signInWithPopup(auth, provider)
                    .then((result) => {
                      const user = result.user;
                      authDetails.userDetails = {
                        uuid: user.uid,
                        displayName: user.displayName,
                      };
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      alert(`${errorCode} ${errorMessage}`);
                      window.location.reload();
                    });
                }}
                className="login-with-google-btn my-4"
              >
                Sign in with Google to Chat
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
