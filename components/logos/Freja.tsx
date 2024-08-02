import type { SVGAttributes } from "react";
import { useId } from "react";

export type FrejaLogoProps = SVGAttributes<SVGSVGElement>;

export const FrejaLogo = (props: FrejaLogoProps) => {
  const id = useId();

  const gradientId = `hume-logo-gradient-${id}`;

  return (
    <div className="flex items-center gap-2 w-fit">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#22d3ee", stopOpacity: 1 }}
            ></stop>
            <stop
              offset="100%"
              style={{ stopColor: "#c084fc", stopOpacity: 1 }}
            ></stop>
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#gradient1)"
          stroke-width="10"
          stroke-dasharray="283 283"
          stroke-dashoffset="0"
          className="svg-elem-1"
        ></circle>
      </svg>
      <h2 className="text-4xl text-white">Freja.ai</h2>
    </div>
  );
};
