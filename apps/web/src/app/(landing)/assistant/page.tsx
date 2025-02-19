"use client";

import { client } from "@/dashboard/api/client";
import { useEffect, useRef, useState } from "react";
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/components/button";
import { Send } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

function Assistant() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const wsRef = useRef<WebSocket | null>(null);
  const messageRef = useRef<string>("");
  const lastMessageRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (wsRef.current) return;

    wsRef.current = client.ai.chat.$ws(0);

    wsRef.current.addEventListener("open", () => {});
    wsRef.current.addEventListener("message", (evt) => {
      if (evt.data.toString() === "'END'") {
        const message = messageRef.current;
        setMessages((prev) => [...prev, message]);
        setMessage("");
        messageRef.current = "";
      } else {
        messageRef.current = messageRef.current + evt.data.toString();
        setMessage((prev) => prev + evt.data.toString());
        lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
      }
    });

    return () => {
      wsRef?.current?.close();
      wsRef.current = null;
    };
  }, []);

  return (
    <div className="flex h-[calc(100vh-64px)] w-[calc(100vw-240px)] flex-col gap-y-4 bg-gray-100 p-4">
      <ul className="scrollbar-none flex flex-grow flex-col gap-2 overflow-auto">
        {messages.map((message, index) => (
          <li
            key={index}
            className={cn(
              "w-fit rounded-lg border p-2",
              index % 2 !== 0
                ? "text-secondary-foreground self-end rounded-tr-none bg-white"
                : "bg-primary text-primary-foreground rounded-tl-none",
            )}
          >
            {message}
          </li>
        ))}
        {message && (
          <li className="bg-primary text-primary-foreground w-fit rounded-lg rounded-tl-none border p-2">
            {message}
          </li>
        )}
        <li ref={lastMessageRef} />
      </ul>

      <div className="flex w-full shrink-0 items-start gap-x-2 rounded-xl border bg-gray-50 px-4 py-2 shadow">
        <Input
          className="w-full border-none bg-transparent p-0 !ring-0 shadow-none !ring-offset-0 !outline-none"
          type="text"
          placeholder="Type your message here..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (!wsRef.current) return;
              const message = e.target?.value ?? "";
              wsRef.current?.send(message);
              setMessages((prev) => [...prev, message]);
              e.target.value = "";
            }
          }}
        />
        <Button size="icon">
          <Send className="size-5" />
        </Button>
      </div>
    </div>
  );
}

export default Assistant;
