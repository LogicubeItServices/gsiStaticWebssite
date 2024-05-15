import EmergencyServices from "@/components/EmergencyServices";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import OurDepartment from "@/components/OurDepartment";
import OurDoctors from "@/components/OurDoctors";
import OurTeam from "@/components/OurTeam";

export default function Home() {
  return (
    <main className="w-full h-full  flex flex-col " id="mainBody">
      <HeroSection/>
      <OurDepartment/>
      <OurDoctors/>
      <EmergencyServices/>
      <Gallery/>
      <OurTeam/>
    </main>
  );
}
