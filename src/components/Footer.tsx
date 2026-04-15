import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import yuhLogoWhite from "@/assets/yuh-logo-white.svg";

const Footer = () => (
  <footer className="bg-foreground text-background section-padding">
    <div className="container-wide mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Own Your Money</h3>
          <p className="text-background/70 text-sm leading-relaxed">
            A non-profit association dedicated to financial education for teenagers. 
            Because understanding money is a life skill everyone deserves.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-background/70 text-sm hover:text-background transition-colors">Home</Link>
            <Link to="/about" className="text-background/70 text-sm hover:text-background transition-colors">About Us</Link>
            <Link to="/approach" className="text-background/70 text-sm hover:text-background transition-colors">Our Approach</Link>
            <Link to="/contact" className="text-background/70 text-sm hover:text-background transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Get Involved</h4>
          <p className="text-background/70 text-sm leading-relaxed">
            Interested in bringing a workshop to your school? Want to support our mission? 
            We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Partners line */}
      <div className="border-t border-background/10 pt-6 pb-6 flex items-center justify-center gap-3">
        <span className="text-background/40 text-xs uppercase tracking-wider">Supported by</span>
        <img src={yuhLogoWhite} alt="Yuh" className="h-5 opacity-30" />
      </div>

      <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-background/50 text-xs">
          © {new Date().getFullYear()} Own Your Money. All rights reserved.
        </p>
        <p className="text-background/50 text-xs flex items-center gap-1">
          Made with <Heart size={12} className="text-primary" /> for financial literacy
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
