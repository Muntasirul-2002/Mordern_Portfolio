import Approch from "@/components/Approch";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Services from "@/components/Services";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";


export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
      <Hero/>
      <Grid/>
      <RecentProjects />
      <Clients />
      <Experience />
      <Approch />
      <Services />
      <Footer />
    </div>
   </main>
  );
}
