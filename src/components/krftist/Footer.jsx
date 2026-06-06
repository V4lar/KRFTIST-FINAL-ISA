import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#0A1418] border-t border-[#EED5B7]/10 pt-20 pb-10"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start">
          <h3 className="font-display uppercase tracking-[-0.04em] leading-[0.85] text-[18vw] md:text-[16vw] text-[#EED5B7]/[0.04] select-none">
            KRFTIST<span className="text-[#B89261]/10">.</span>
          </h3>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-[#EED5B7]/10">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B89261] mb-3">Studio</div>
            <p className="text-[#C6C4C4] text-sm leading-relaxed mb-4">Egypt · Saudi Arabia<br />Turkey · Qatar · Worldwide</p>
            <a href="mailto:info@krftist.com" className="text-[#C6C4C4] text-sm hover:text-[#EED5B7] block break-all">info@krftist.com</a>
            <a href="tel:+966508417473" className="text-[#C6C4C4] text-sm hover:text-[#EED5B7] block mt-1">+966 50 841 7473</a>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B89261] mb-3">Navigate</div>
            <div className="flex flex-col gap-1 text-sm">
              <Link to="/services" className="text-[#C6C4C4] hover:text-[#EED5B7]">Services</Link>
              <Link to="/work" className="text-[#C6C4C4] hover:text-[#EED5B7]">Work</Link>
              <Link to="/process" className="text-[#C6C4C4] hover:text-[#EED5B7]">Process</Link>
              <Link to="/articles" className="text-[#C6C4C4] hover:text-[#EED5B7]">Articles &amp; News</Link>
              <Link to="/contact" className="text-[#C6C4C4] hover:text-[#EED5B7]">Contact</Link>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B89261] mb-3">Social</div>
            <div className="flex flex-col gap-1 text-sm">
              <a href="https://instagram.com/krftist" target="_blank" rel="noopener noreferrer" className="text-[#C6C4C4] hover:text-[#EED5B7]">Instagram</a>
              <a href="https://vimeo.com/user100868538" target="_blank" rel="noopener noreferrer" className="text-[#C6C4C4] hover:text-[#EED5B7]">Vimeo</a>
              <a href="https://www.behance.net/AHMEDALIPHOTOGRPHY/projects" target="_blank" rel="noopener noreferrer" className="text-[#C6C4C4] hover:text-[#EED5B7]">Behance</a>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B89261] mb-3">Legal</div>
            <p className="text-[#C6C4C4] text-sm">© {new Date().getFullYear()} KRFTIST Studio.<br />Crafting visual stories since 2010.</p>
          </div>
        </div>

        <div className="mt-10 text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/60 flex justify-between items-center">
          <span className="font-script normal-case tracking-normal text-base text-[#B89261]">We Know How It’s Made</span>
          <span>N°001 / Reel</span>
        </div>
      </div>
    </footer>
  );
}
