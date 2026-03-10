"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Entry {
  id: number;
  text: string;
  time: string;
}

const ACTIVITY = [
  "recalled a conversation from 12 days ago",
  "linked two unrelated memories together",
  "stored a new context fragment",
  "noticed a recurring pattern",
  "updated its understanding of a topic",
  "merged duplicate memories",
  "replayed a decision from last week",
  "built a new association chain",
  "compressed old memories into summary",
  "flagged a contradiction in its history",
  "processed an incoming input",
  "deepened a long-term memory",
  "traced a thought back to its origin",
  "reinforced a fading connection",
  "reorganized a cluster of related memories",
];

function now() {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function MemoryStream() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    let n = 0;
    const seed = Array.from({ length: 5 }, () => ({
      id: n++,
      text: ACTIVITY[Math.floor(Math.random() * ACTIVITY.length)],
      time: now(),
    }));
    setEntries(seed);

    const iv = setInterval(() => {
      setEntries((prev) =>
        [
          {
            id: n++,
            text: ACTIVITY[Math.floor(Math.random() * ACTIVITY.length)],
            time: now(),
          },
          ...prev,
        ].slice(0, 7)
      );
    }, 3500);

    return () => clearInterval(iv);
  }, []);

  return (
    <div>
      <AnimatePresence mode="popLayout">
        {entries.map((e, i) => (
          <motion.div
            key={e.id}
            layout
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: i === 0 ? 1 : 0.35, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="py-3"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}
          >
            <span className="text-[14px]" style={{ color: "var(--dark)" }}>
              {e.text}
            </span>
            <span className="text-[13px] ml-3" style={{ color: "var(--gray-300)" }}>
              {e.time}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
