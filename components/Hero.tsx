import { FlipWords } from "./FlipWords";
import { FrejaLogo } from "./logos/Freja";

export const Hero = () => {
  const words = ["AI-drevet", "risikofri"];

  return (
    <>
      <FrejaLogo className="h-20 mx-auto" />
      <div className="flex flex-col items-center justify-center gap-4 md:gap-10 pt-4 md:pt-16">
        <h1 className="text-6xl font-bold text-white">
          Freja.ai er en{" "}
          <FlipWords className="text-white" words={words}></FlipWords> <br />
          salgstræning der efterligner din købers persona.
        </h1>
        <div className="text-2xl font-bold text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#22d3ee] via-[#38bdf8] to-[#818cf8]">
            Skær ned på det akavede rolle-spil med salgschefen eller
            teamlederen. Undgå de dyre ansættelser og den lange ramp-up time på
            nye mødebookere og sælgere.
          </span>
        </div>
      </div>
    </>
  );
};
