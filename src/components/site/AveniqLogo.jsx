import { cn } from "@/lib/utils";
export function AveniqLogo({ className, full = true }) {
  if (!full) {
    return (
      <img
        src="/aveniq-mark.svg"
        alt="Aveniq Technologies icon"
        className={cn("block h-9 w-9 shrink-0 object-contain md:h-10 md:w-10", className)}
      />
    );
  }
  return (
    <div className={cn("flex items-center gap-2.5 leading-none", className)}>
      <img
        src="/aveniq-mark.svg"
        alt="Aveniq Technologies icon"
        className="h-9 w-9 shrink-0 object-contain md:h-11 md:w-11"
      />

      <div className="flex flex-col justify-center">
        <span className="font-display text-[1.08rem] font-extrabold tracking-[-0.06em] text-foreground md:text-[1.54rem]">
          Aveniq
        </span>
        <span className="font-display text-[0.66rem] font-semibold tracking-[-0.04em] text-foreground/80 md:text-[0.82rem]">
          Technologies
        </span>
      </div>
    </div>
  );
}
