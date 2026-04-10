import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", contactBy: "email", reference: "", message: "" });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Contact Us
          </motion.h1>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Have a question? Our friendly team is here to help. Complete the form below, email us, or give us a call.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Call us</h3>
                <p className="text-muted-foreground text-sm">0151 541 9420</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Email us</h3>
                <p className="text-muted-foreground text-sm">info@rehome.co.uk</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Address</h3>
                <p className="text-muted-foreground text-sm">Unit 14, Turnstone Business Park,<br />Mulberry Avenue, Widnes WA8 0WN</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Opening Hours</h3>
                <div className="text-sm text-muted-foreground space-y-1 mt-1">
                  <div className="flex justify-between gap-8"><span>Monday – Friday</span><span>9:00am – 5:30pm</span></div>
                  <div className="flex justify-between gap-8"><span>Saturday</span><span>9:30am – 1:00pm</span></div>
                  <div className="flex justify-between gap-8"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium text-foreground">First Name *</label>
                <input type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Last Name *</label>
                <input type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Phone *</label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-foreground">Product Reference (if applicable)</label>
                <input type="text" value={form.reference} onChange={(e) => setForm({ ...form, reference: e.target.value })} className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-foreground">How can we help? *</label>
                <textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none resize-none" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
