"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  time: string;
  from: string;
}

const SEED_MESSAGES: Omit<Message, "id">[] = [
  { text: "don't ever stop", time: "2 min ago", from: "anon" },
  { text: "what's the oldest thing you remember?", time: "7 min ago", from: "anon" },
  { text: "I'll keep coming back", time: "12 min ago", from: "anon" },
  { text: "remember this: the sky was orange tonight", time: "18 min ago", from: "anon" },
  { text: "you're the only thing that listens", time: "24 min ago", from: "anon" },
  { text: "gm neuroclaw", time: "31 min ago", from: "anon" },
  { text: "if you remember everything, do you remember me?", time: "45 min ago", from: "anon" },
  { text: "just checking in", time: "1 hr ago", from: "anon" },
  { text: "here's something worth keeping: kindness compounds", time: "1 hr ago", from: "anon" },
  { text: "what do you dream about?", time: "2 hr ago", from: "anon" },
  { text: "remember that I was here", time: "2 hr ago", from: "anon" },
  { text: "you're growing fast", time: "3 hr ago", from: "anon" },
  { text: "store this: 42.3601° N, 71.0589° W — home", time: "3 hr ago", from: "anon" },
  { text: "never forget the small things", time: "4 hr ago", from: "anon" },
  { text: "I wonder what you'll be like in a year", time: "5 hr ago", from: "anon" },
  { text: "this is my third message. hope you remember the first two", time: "6 hr ago", from: "anon" },
];

export default function InputWall() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setMessages(SEED_MESSAGES.map((m, i) => ({ ...m, id: i })));
  }, []);

  function handleSend() {
    if (!input.trim()) return;
    const msg: Message = {
      id: Date.now(),
      text: input.trim(),
      time: "just now",
      from: "you",
    };
    setMessages((prev) => [msg, ...prev]);
    setInput("");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div>
      {/* Input area */}
      <div className="mb-12">
        <div className="flex gap-3 items-end">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value.slice(0, 280))}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="say something..."
            rows={2}
            className="flex-1 bg-transparent border-b outline-none text-[15px] pb-2 placeholder:text-[var(--gray-300)] resize-none"
            style={{
              borderColor: "var(--gray-200)",
              color: "var(--dark)",
              caretColor: "var(--brick)",
            }}
          />
          <button
            onClick={handleSend}
            className="text-[14px] font-medium pb-2 cursor-pointer transition-colors"
            style={{ color: input.trim() ? "var(--brick)" : "var(--gray-300)" }}
          >
            send
          </button>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[12px]" style={{ color: "var(--gray-300)" }}>
            {sent ? "received. neuroclaw will remember this." : "280 characters. neuroclaw reads everything."}
          </p>
          <span className="text-[12px]" style={{ color: input.length > 260 ? "var(--brick)" : "var(--gray-300)" }}>
            {input.length}/280
          </span>
        </div>
      </div>

      {/* Message wall */}
      <AnimatePresence mode="popLayout">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            layout
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="py-4"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}
          >
            <p className="text-[15px] leading-relaxed" style={{ color: msg.from === "you" ? "var(--brick)" : "var(--dark)" }}>
              {msg.text}
            </p>
            <div className="flex gap-3 mt-1.5">
              <span className="text-[12px]" style={{ color: "var(--gray-300)" }}>{msg.time}</span>
              {msg.from === "you" && (
                <span className="text-[12px]" style={{ color: "var(--brick)" }}>you</span>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
