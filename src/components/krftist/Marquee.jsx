const items = [
  "Crafting Visual Stories",
  "Cinematic Direction",
  "Master Artisans",
  "Brand Films",
  "Editorial Motion",
  "Dolby-Standard Audio",
  "TV Show Production",
  "Worldwide Commissions",
];

export default function Marquee() {
  return (
    <div
      data-testid="marquee"
      className="border-y border-[#EED5B7]/10 overflow-hidden bg-[#0A1418]"
    >
      <div className="marquee-track flex whitespace-nowrap py-7">
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center px-8 shrink-0">
            <span className="font-display text-3xl md:text-5xl uppercase tracking-tight text-[#EED5B7]">
              {it}
            </span>
            <span className="mx-8 text-[#B89261] text-3xl md:text-5xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
