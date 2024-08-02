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
    <div className="flex flex-col max-w-3xl mx-auto mt-40">
      <WavyBackground className="flex flex-col gap-20">
        <Hero />
        <div className={"flex gap-2 justify-between"}>
          <Contact />
          <FrejaCard />
        </div>
        <div className="flex items-center my-4 justify-center w-full text-gray-400 text-sm">
          Kontakt os på
          <span className="text-white px-1"> 51 51 77 83 </span> og hør hvordan
          Freja.ai kan hjælpe dig.
        </div>
      </WavyBackground>
    </div>
  );
}
