import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, LogOut, MapPin, Phone, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Profile {
  display_name: string | null;
  phone: string | null;
  address_line1: string | null;
  address_line2: string | null;
  city: string | null;
  postcode: string | null;
}

const Account = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile>({
    display_name: "",
    phone: "",
    address_line1: "",
    address_line2: "",
    city: "",
    postcode: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      supabase
        .from("profiles")
        .select("display_name, phone, address_line1, address_line2, city, postcode")
        .eq("user_id", user.id)
        .single()
        .then(({ data }) => {
          if (data) setProfile(data);
        });
    }
  }, [user]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);

    const { error } = await supabase
      .from("profiles")
      .update(profile)
      .eq("user_id", user.id);

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Saved!", description: "Your profile has been updated." });
    }
    setSaving(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-muted py-12 md:py-16">
        <div className="container flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">My Account</h1>
            <p className="text-muted-foreground mt-1">{user.email}</p>
          </div>
          <Button variant="outline" onClick={handleSignOut} className="gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </section>

      <section className="container py-12 max-w-2xl">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSave}
          className="space-y-8"
        >
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-secondary" />
              <h2 className="font-display font-bold text-foreground">Personal Details</h2>
            </div>
            <div>
              <Label htmlFor="display_name">Display Name</Label>
              <Input
                id="display_name"
                value={profile.display_name || ""}
                onChange={(e) => setProfile({ ...profile, display_name: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="flex items-center gap-1"><Phone className="w-3 h-3" /> Phone</Label>
                <Input
                  id="phone"
                  value={profile.phone || ""}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center gap-1"><Mail className="w-3 h-3" /> Email</Label>
                <Input id="email" value={user.email || ""} disabled className="bg-muted" />
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-secondary" />
              <h2 className="font-display font-bold text-foreground">Address</h2>
            </div>
            <div>
              <Label htmlFor="address_line1">Address Line 1</Label>
              <Input
                id="address_line1"
                value={profile.address_line1 || ""}
                onChange={(e) => setProfile({ ...profile, address_line1: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="address_line2">Address Line 2</Label>
              <Input
                id="address_line2"
                value={profile.address_line2 || ""}
                onChange={(e) => setProfile({ ...profile, address_line2: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={profile.city || ""}
                  onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="postcode">Postcode</Label>
                <Input
                  id="postcode"
                  value={profile.postcode || ""}
                  onChange={(e) => setProfile({ ...profile, postcode: e.target.value })}
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </motion.form>
      </section>

      <Footer />
    </div>
  );
};

export default Account;
