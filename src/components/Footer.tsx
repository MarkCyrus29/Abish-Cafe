import Link from "next/link";
import { Facebook, MapPin, Clock, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-primary/40">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-lg font-serif font-bold text-black mb-3">
              Abish Cafe
            </div>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Handcrafted comfort, everyday. Specialty coffee and pastries made
              with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-black mb-4">
              Quick Links
            </h3>
            <div className="space-y-2 text-sm flex flex-col">
              <Link
                href="/"
                className="text-foreground-muted hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-foreground-muted hover:text-accent transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="text-foreground-muted hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="text-foreground-muted hover:text-accent transition-colors"
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif font-bold text-black mb-4 flex items-center gap-2">
              <Clock size={18} /> Hours
            </h3>
            <div className="space-y-1 text-sm text-foreground-muted">
              <p>Mon - Fri: --------</p>
              <p>Sat: --------</p>
              <p>Sun: --------</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-black mb-4">Connect</h3>
            <div className="space-y-3 flex flex-col">
              <a
                href="https://www.facebook.com/profile.php?id=61574892443762"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-muted transition-colors text-sm"
              >
                <Facebook size={18} /> Facebook
              </a>
              <a
                href="https://www.instagram.com/abishcafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-muted transition-colors text-sm"
              >
                <Instagram size={18} /> Instagram
              </a>
              <div className="flex items-start gap-2 text-sm text-accent!  ">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <a
                  className="items-center gap-2 transition-colors text-sm hover:text-accent-muted"
                  title="Abish Cafe on Google Maps"
                  rel="noopener"
                  href="https://maps.app.goo.gl/6Su4XoD1ZJ8yy2Tr7"
                  target="_blank"
                >
                  Purok 7 Barangay Sampaguita, Lipa City, Philippines, 4217
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/40 pt-8">
          <div className="text-center text-sm text-foreground-muted">
            <p>&copy; 2026 Abish Cafe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
