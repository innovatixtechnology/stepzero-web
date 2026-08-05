import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/blog", label: "Blog" },
  { href: "/free-guide", label: "Free Guide" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/terms-of-use", label: "Terms of Use" },
];

export default function Footer() {
  return (
    <footer className="bg-[#252A26] text-[#FAF7F2] mt-auto">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto pt-20 md:pt-24 pb-14">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#F0B429] font-semibold mb-4">Begin at the beginning</p>
          <h2 className="text-3xl md:text-[46px] leading-tight font-semibold text-white">A clearer relationship with your health starts at Step Zero.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr_1fr] gap-12 border-t border-white/10 pt-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Step Zero<span className="text-[#F0B429]">.</span></h3>
            <p className="text-sm text-white/60 mb-5 leading-relaxed max-w-xs">Where every transformation begins—with understanding.</p>
            <a href="https://instagram.com/stepzero_with_palashaa" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F0B429] hover:text-white transition-colors">@stepzero_with_palashaa</a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase mb-6 text-white/40">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-[#F0B429] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase mb-6 text-white/40">Let&apos;s talk</h4>
            <p className="text-sm text-white/70 mb-6 break-all">hello@stepzerowithpalasha.com</p>
            <Link href="/contact" className="inline-block bg-[#F0B429] text-[#252A26] text-sm font-bold px-6 py-3.5 rounded-full hover:bg-white transition-colors">Book a Clarity Call</Link>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/35">&copy; {new Date().getFullYear()} Step Zero with Palasha. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-white/35 hover:text-[#F0B429] transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
