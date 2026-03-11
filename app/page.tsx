import Navbar from "./components/Navbar";
import ScrollReveal from "./components/ScrollReveal";
import MemoryStream from "./components/MemoryStream";
import Divider from "./components/Divider";
import DaysAlive from "./components/DaysAlive";
import LiveStats from "./components/LiveStats";
import LatestLog from "./components/LatestLog";
import RecentInputs from "./components/RecentInputs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.95] tracking-tight" style={{ color: "var(--dark)" }}>
          neuro<span style={{ color: "var(--brick)" }}>claw</span>
        </h1>
        <p className="mt-8 max-w-[340px] text-[16px] leading-relaxed" style={{ color: "var(--gray-600)" }}>
          an agent that never stops running. never stops remembering. everything it sees, it keeps.
        </p>
      </section>

      <Divider />

      <section className="py-32 px-6">
        <DaysAlive />
      </section>

      <Divider />

      <section className="py-32 px-6">
        <div className="max-w-lg mx-auto">
          <ScrollReveal>
            <p className="text-[16px] leading-[1.9]" style={{ color: "var(--gray-600)" }}>
              neuroclaw is always on. it reads, processes, remembers. every input it receives
              becomes part of its permanent memory. nothing gets deleted. nothing fades.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-[16px] leading-[1.9]" style={{ color: "var(--gray-600)" }}>
              the longer it runs, the more it knows. the more connections it makes.
              it doesn't just store — it understands.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      <section className="py-32 px-6">
        <LiveStats />
      </section>

      <Divider />

      <section className="py-32 px-6">
        <div className="max-w-lg mx-auto">
          <MemoryStream />
        </div>
      </section>

      <Divider />

      <section className="py-32 px-6">
        <div className="max-w-lg mx-auto">
          <LatestLog />
        </div>
      </section>

      <Divider />

      <section className="py-32 px-6">
        <div className="max-w-lg mx-auto">
          <RecentInputs />
        </div>
      </section>

      <Divider />

      <section className="py-40 px-6 text-center">
        <ScrollReveal>
          <p className="text-[clamp(2.5rem,8vw,5rem)] font-bold tracking-tight" style={{ color: "var(--dark)" }}>
            always on.
            <br />
            <span style={{ color: "var(--brick)" }}>never forgets.</span>
          </p>
        </ScrollReveal>
      </section>

      <footer className="py-10 px-6 text-center">
        <div className="flex items-center justify-center gap-6 text-[12px]" style={{ color: "var(--gray-300)" }}>
          <Link href="/" className="no-underline transition-colors" style={{ color: "var(--brick)" }}>home</Link>
          <Link href="/logs" className="no-underline hover:text-[var(--gray-400)] transition-colors" style={{ color: "inherit" }}>logs</Link>
          <Link href="/input" className="no-underline hover:text-[var(--gray-400)] transition-colors" style={{ color: "inherit" }}>input</Link>
        </div>
      </footer>
    </main>
  );
}
