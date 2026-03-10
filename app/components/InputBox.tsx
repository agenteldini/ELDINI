"use client";

import { useState } from "react";

export default function InputBox() {
  const [value, setValue] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend() {
    if (!value.trim()) return;
    setSent(true);
    setValue("");
    setTimeout(() => setSent(false), 2000);
  }

  return (
    <div>
      <div className="flex gap-3">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="say something to neuroclaw..."
          maxLength={280}
          className="flex-1 bg-transparent border-b outline-none text-[15px] pb-2 placeholder:text-[var(--gray-300)]"
          style={{
            borderColor: "var(--gray-200)",
            color: "var(--dark)",
            caretColor: "var(--brick)",
          }}
        />
        <button
          onClick={handleSend}
          className="text-[14px] font-medium pb-2 cursor-pointer transition-colors"
          style={{ color: value.trim() ? "var(--brick)" : "var(--gray-300)" }}
        >
          send
        </button>
      </div>
      {sent && (
        <p className="mt-3 text-[13px]" style={{ color: "var(--gray-400)" }}>
          received. neuroclaw will remember this.
        </p>
      )}
      <p className="mt-3 text-[13px]" style={{ color: "var(--gray-300)" }}>
        280 characters. neuroclaw reads everything.
      </p>
    </div>
  );
}
