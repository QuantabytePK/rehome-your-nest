import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
            <Bell className="w-5 h-5 text-secondary" />
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-3">
            Be first to know
          </h2>
          <p className="text-muted-foreground mb-8">
            Get notified when the perfect kitchen, bathroom or appliance arrives at Rehome.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" className="flex-1" required />
            <Button variant="gold">Create alert</Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
