"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Pulse from "./Pulse";

const NAV_ITEMS = [
  { href: "/", label: "home" },
  { href: "/logs", label: "logs" },
  { href: "/input", label: "input" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5"
      style={{ background: "rgba(239,241,243,0.85)", backdropFilter: "blur(20px)" }}
    >
      <Link href="/" className="text-[14px] font-medium no-underline" style={{ color: "var(--dark)" }}>
        neuroclaw
      </Link>

      <div className="flex items-center gap-6">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[13px] no-underline transition-colors hidden sm:inline"
            style={{ color: path === item.href ? "var(--brick)" : "var(--gray-400)" }}
          >
            {item.label}
          </Link>
        ))}
        <div className="flex items-center gap-2">
          <Pulse />
          <span className="text-[13px]" style={{ color: "var(--gray-400)" }}>
            active
          </span>
        </div>
      </div>
    </motion.nav>
  );
}
