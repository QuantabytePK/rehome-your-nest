import { Leaf } from "lucide-react";

const footerLinks = {
  "Shop Rehome": ["Kitchens", "Bathrooms", "Appliances", "Home & Garden", "Partner Offers"],
  Inspiration: ["Customer Stories", "Tips & Tricks", "Sustainability"],
  Information: ["Why Rehome?", "How it Works", "FAQs", "Terms & Conditions", "Privacy Policy"],
  "Your Rehome": ["My Account", "Saved Items", "My Alerts", "Something to Sell"],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-2xl font-bold mb-4 block">Rehome</a>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Quality interiors are built to last. We give them a second life — affordable, sustainable, beautiful.
            </p>
            <div className="flex items-center gap-2 text-gold text-sm">
              <Leaf className="w-4 h-4" />
              <span>Planet friendly</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-sm mb-4 text-primary-foreground">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/50 text-sm hover:text-gold transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs text-center md:text-left">
            © 2024 UKE Home Solutions Ltd. Trading as Rehome. Company No: 09875521. VAT: 236246316.
          </p>
          <p className="text-primary-foreground/40 text-xs text-center md:text-right max-w-md">
            UKE Home Solutions trading as Rehome is a credit broker authorised and regulated by the Financial Conduct Authority.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
