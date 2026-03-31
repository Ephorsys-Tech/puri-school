"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type QuickLink = {
  label: string;
  to: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const quickLinks: QuickLink[] = [
  { label: "About Us", to: "/about" },
  { label: "Career", to: "/career" },
  { label: "Our Program", to: "/program" },
  { label: "News", to: "/news" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Usthi-Foundation-India",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/usthifoundationindia",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/usthi-foundation-india/",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@usthifoundationindia",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)",
        borderTop: "1px solid rgba(21,154,191,0.15)",
        color: "#ffffff",
      }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* About */}
          <div>
            <div
              className="mb-5 overflow-hidden"
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "16px",
                border: "1px solid rgba(21,154,191,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://dummyimage.com/150x150/ffffff/159ABF&text=Usthi"
                alt="Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain", background: "white" }}
              />
            </div>

            <p className="text-sm leading-relaxed text-white/50">
              Usthi Foundation India, a Social Organization committed to uplifting underprivileged communities across Odisha since 1977.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-2">Quick Links</h4>
            <div className="h-0.5 w-8 mb-5 bg-[#F5C518]" />

            <ul className="space-y-3">
              {quickLinks.map(({ label, to }) => (
                <li key={label} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#159ABF] rounded-full" />
                  <Link
                    href={to}
                    className={`text-sm transition ${
                      isActive(to)
                        ? "text-[#159ABF]"
                        : "text-white/50 hover:text-[#159ABF]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-black mb-2">Contact Us</h4>
            <div className="h-0.5 w-8 mb-5 bg-[#F5C518]" />

            <p className="text-sm text-white/50">
              Bhubaneswar, Odisha, India
            </p>
            <p className="text-sm text-white/50 mt-2">
              usthifoundation@gmail.com
            </p>
            <p className="text-sm text-white/50 mt-2">
              +91 9861495200
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-black mb-2">Social Media</h4>
            <div className="h-0.5 w-8 mb-5 bg-[#F5C518]" />

            <ul className="space-y-4">
              {socialLinks.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-[#159ABF]"
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#159ABF]/10 border border-[#159ABF]/20 text-[#159ABF]">
                      {icon}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between text-xs text-white/40">
          <span>© {new Date().getFullYear()} Usthi Foundation</span>
          <span>
            Developed by{" "}
            <a href="https://www.ephorsys.com" className="text-[#159ABF]">
              Ephorsys Pvt. Ltd.
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}