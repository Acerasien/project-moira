import { useEffect, useState } from "react";
import PageAtmosphere from "../components/decorative/PageAtmosphere";
import HeroSection from "../components/home/HeroSection";
import PhilosophySection from "../components/home/PhilosophySection";
import TarotPrimer from "../components/home/TarotPrimer";
import DailyReflection from "../components/home/DailyReflection";
import BeginTransition from "../components/home/BeginTransition";
import ActionPanels from "../components/home/ActionPanels";
import Footer from "../components/home/Footer";

const STAGGER_DELAY = 150;
const SECTION_DURATION = 400;

function useStaggeredEntrance(totalSections: number) {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mq.matches) {
      setVisible(Array.from({ length: totalSections }, (_, i) => i));
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    setVisible([0]);

    for (let i = 1; i < totalSections; i++) {
      timers.push(
        setTimeout(() => {
          setVisible((prev) => [...prev, i]);
        }, i * STAGGER_DELAY),
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [totalSections]);

  return visible;
}

function SectionWrapper({
  visible,
  index,
  children,
}: {
  visible: number[];
  index: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="transition-all"
      style={{
        opacity: visible.includes(index) ? 1 : 0,
        transform: visible.includes(index)
          ? "translateY(0)"
          : "translateY(6px)",
        transitionDuration: `${SECTION_DURATION}ms`,
        transitionTimingFunction: "var(--ease-out)",
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const visible = useStaggeredEntrance(7);

  return (
    <main className="relative">
      <PageAtmosphere />
      <a
        href="#actions"
        className="sr-only focus:not-sr-only focus:fixed focus:left-lg focus:top-lg focus:z-50 focus:rounded-md focus:bg-surface focus:px-lg focus:py-md focus:text-text focus:outline-2 focus:outline-offset-4 focus:outline-accent"
      >
        Skip to actions
      </a>
      <div className="relative z-10">
        <SectionWrapper visible={visible} index={0}>
          <HeroSection />
        </SectionWrapper>
        <SectionWrapper visible={visible} index={1}>
          <PhilosophySection />
        </SectionWrapper>
        <SectionWrapper visible={visible} index={2}>
          <TarotPrimer />
        </SectionWrapper>
        <SectionWrapper visible={visible} index={3}>
          <DailyReflection />
        </SectionWrapper>
        <SectionWrapper visible={visible} index={4}>
          <BeginTransition />
        </SectionWrapper>
        <SectionWrapper visible={visible} index={5}>
          <ActionPanels />
        </SectionWrapper>
        <SectionWrapper visible={visible} index={6}>
          <Footer />
        </SectionWrapper>
      </div>
    </main>
  );
}
