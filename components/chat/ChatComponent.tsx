"use client";

import { useChat, type UseChatOptions } from "ai/react";

import { Chat } from "@/components/ui/chat";

type ChatDemoProps = {
  initialMessages?: UseChatOptions["initialMessages"];
};

const ChatComponent = (props: ChatDemoProps) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    stop,
    isLoading,
  } = useChat(props);

  return (
    <div className="flex h-[500px] w-full">
      <Chat
        className="grow"
        messages={messages}
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        suggestions={[
          "Who is head of racing  for Aston Martin's F1 Academy team?",
          "Who is the highest paid F1 driver?",
          "Who will be the newest driver for Ferrari?",
          "Who is the current Formula One World Driver's Champion?",
        ]}
      />
    </div>
  );
};

export default ChatComponent;
