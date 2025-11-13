import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#001738] text-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.svg"
              alt="Limm Logo"
              width={80}
              height={20}
              className="mb-4"
            />
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Empowering businesses across Africa with simple, powerful management tools.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <span className="text-sm">f</span>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#hardware" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Hardware
                </Link>
              </li>
              <li>
                <Link href="/#app" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Mobile App
                </Link>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Delete Account
                </Link>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Limm. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
              Status
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
              Security
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
              Sitemap
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">📧 Email</h4>
              <p className="text-blue-200">support@limm.app</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📞 Phone</h4>
              <p className="text-blue-200">+221 XX XXX XXXX</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📍 Location</h4>
              <p className="text-blue-200">Dakar, Senegal</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
