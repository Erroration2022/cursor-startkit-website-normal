import { site } from "@/lib/site";

export function SampleBanner() {
  return (
    <div className="border-b border-gold/30 bg-foreground px-4 py-2 text-center text-xs tracking-wide text-white/90">
      {site.sampleNotice}
    </div>
  );
}
