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
    <footer className="bg-[#2C2C2C] text-[#FAF7F2] mt-auto">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4">Step Zero</h3>
            <p className="text-sm text-[#FAF7F2]/80 mb-4 leading-relaxed">Where Every Transformation Begins</p>
            <a href="https://instagram.com/stepzero_with_palashaa" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F0B429] hover:underline">@stepzero_with_palashaa</a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.08em] uppercase mb-6 text-[#FAF7F2]/60">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#FAF7F2]/80 hover:text-[#F0B429] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.08em] uppercase mb-6 text-[#FAF7F2]/60">Contact</h4>
            <p className="text-sm text-[#FAF7F2]/80 mb-6">hello@stepzerowithpalasha.com</p>
            <Link href="/contact" className="inline-block bg-[#F0B429] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#d9a123] transition-colors">Book a Clarity Call</Link>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#FAF7F2]/10">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#FAF7F2]/50">&copy; {new Date().getFullYear()} Step Zero with Palasha. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-[#FAF7F2]/50 hover:text-[#F0B429] transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
