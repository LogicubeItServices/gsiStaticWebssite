import HeroSection from "@/components/HeroSection";
import OurDepartment from "@/components/OurDepartment";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-36">
      <HeroSection/>
      <OurDepartment/>
    </main>
  );
}
