import { Inter } from "next/font/google";
import { Hero, FeaturesSection, JobExperience } from "@/components";
import { navStates, useNavContext } from "@/contexts/NavContext";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { setActiveNav } = useNavContext();

  useEffect(() => {
    setActiveNav(navStates.HOME);
  }, []);
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <FeaturesSection />
      <JobExperience />
    </main>
  );
}
