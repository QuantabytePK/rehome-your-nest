import { ShieldCheck, Leaf, BadgePoundSterling, Star } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Quality certified", desc: "Expert approved" },
  { icon: Leaf, label: "Planet friendly", desc: "Sustainable choice" },
  { icon: BadgePoundSterling, label: "Affordable luxury", desc: "Up to 80% off" },
  { icon: Star, label: "Trustpilot Excellent", desc: "5-star rated" },
];

const TrustBar = () => {
  return (
    <section className="bg-primary py-4">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 justify-center">
              <item.icon className="w-5 h-5 text-gold shrink-0" />
              <div>
                <p className="text-primary-foreground text-sm font-medium">{item.label}</p>
                <p className="text-primary-foreground/60 text-xs hidden md:block">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
