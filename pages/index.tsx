import { Inter } from "next/font/google";
import { Hero, FeaturesSection, JobExperience } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <FeaturesSection />
      <JobExperience />
    </main>
  );
}
