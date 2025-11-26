import { twMerge } from "tailwind-merge"

import { cn } from "@/lib/utils"


export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={twMerge(
        `group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]
        ${vertical? "flex-col" : "flex-row"}`,
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", 
            //   "": !vertical,
            //   "animate-marquee-vertical flex-col": vertical,

            vertical?"animate-marquee flex-row" : "animate-marquee-vertical flex-col",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
