import ChatComponent from "@/components/chat/ChatComponent";

export default function Home() {
  return (
    <main className="m-8">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Chat</h1>
      </div>
      <ChatComponent />
    </main>
  );
}
