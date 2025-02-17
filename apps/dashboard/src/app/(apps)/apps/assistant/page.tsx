"use client";

import { client } from "@/dashboard/api/client";
import { useEffect, useRef, useState } from "react";

function Assistant() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const wsRef = useRef<WebSocket | null>(null);
  const messageRef = useRef<string>("");

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
      }
    });

    return () => {
      wsRef?.current?.close();
    };
  }, []);

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}

      {message && <div>{message}</div>}
      <input
        className="border"
        type="text"
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
    </div>
  );
}

export default Assistant;
