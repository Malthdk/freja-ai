import Image from "next/image";
import StartCall from "./StartCall";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";

export const FrejaCard = () => {
  return (
    <Card className="max-w-[260px] gap-2">
      <Image
        src="/freja.webp"
        alt="Freja"
        width={120}
        height={120}
        className=" rounded-full"
      />
      <div className="flex gap-1 rounded-full bg-gray-100 items-center px-2 text-sm">
        <div className="rounded-full bg-green-500 w-3 h-3 inline-block mr-2" />
        Online
      </div>
      <CardHeader>Freja</CardHeader>
      <CardTitle>Head of Marketing hos Syv.ai ApS</CardTitle>

      <CardFooter>
        <StartCall />
      </CardFooter>
    </Card>
  );
};
