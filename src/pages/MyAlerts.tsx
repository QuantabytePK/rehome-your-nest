import { Bell, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sampleAlerts = [
  { category: "Kitchens", query: "Howdens Shaker", maxPrice: "£3,000" },
  { category: "Appliances", query: "Smeg Range Cooker", maxPrice: "£800" },
  { category: "Bathrooms", query: "Freestanding Bath", maxPrice: "£500" },
];

const MyAlerts = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="bg-muted py-12 md:py-16">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">My Alerts</h1>
        <p className="text-muted-foreground mt-2">
          Get notified when items matching your criteria are listed.
        </p>
      </div>
    </section>

    <section className="container py-12 max-w-2xl">
      <div className="space-y-4 mb-8">
        {sampleAlerts.map((alert) => (
          <div
            key={alert.query}
            className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border"
          >
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5 text-secondary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground text-sm">{alert.query}</p>
              <p className="text-xs text-muted-foreground">
                {alert.category} · Max {alert.maxPrice}
              </p>
            </div>
            <button className="text-xs text-destructive hover:underline">Remove</button>
          </div>
        ))}
      </div>

      <button className="w-full flex items-center justify-center gap-2 p-4 border-2 border-dashed border-border rounded-xl text-muted-foreground hover:border-secondary hover:text-secondary transition-colors">
        <Plus className="w-5 h-5" />
        <span className="font-medium text-sm">Create New Alert</span>
      </button>

      <p className="text-center text-xs text-muted-foreground mt-8">
        Sign in to save and manage your alerts across devices.
      </p>
    </section>

    <Footer />
  </div>
);

export default MyAlerts;
