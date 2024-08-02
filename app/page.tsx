import { FrejaCard } from "@/components/FrejaCard";
import { WavyBackground } from "@/components/ui/wavy-backgounrd";
import dynamic from "next/dynamic";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";

const Chat = dynamic(() => import("../components/Chat"), {
  ssr: false,
});

export default async function Page() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto md:mt-40 mt-20">
      <WavyBackground className="flex flex-col gap-6 md:gap-20 px-2 md:px-0">
        <Hero />
        <div className="flex flex-col-reverse md:flex-row gap-4 md:justify-between items-center">
          <Contact />
          <FrejaCard />
        </div>
        <div className="flex items-center my-4 justify-center w-full text-gray-400 text-sm">
          Kontakt os på 51517783 og hør hvordan Freja.ai kan hjælpe dig.
        </div>
      </WavyBackground>
    </div>
  );
}
