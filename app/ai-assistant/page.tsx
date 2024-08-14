import { DarkModeToggle } from "../components/dark-toggle-mode";
import { Chat } from "../components/chat";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="relative container flex min-h-screen flex-col">
      {/* <div className=" p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <span className="font-bold">pdf-chat-ai-sdk</span>
        <DarkModeToggle />
      </div> */}
      <Navbar/>
   
      <div className="flex flex-1 py-4 max-w-screen">
        <div className="w-[60vw] mx-auto">
          <Chat />
        </div>
      </div>
     </main>
  );
}
