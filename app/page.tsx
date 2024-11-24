import ChatComponent from "@/components/chat/ChatComponent";

export default function Home() {
  return (
    <main className="m-8">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">F1-GPT</h1>
      </div>
      <div className="mt-4">
        <ChatComponent />
      </div>
    </main>
  );
}
