import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stories = [
  {
    name: "Sarah & James",
    location: "Manchester",
    title: "Dream Kitchen for Half the Price",
    quote: "We saved over £12,000 on a stunning Howdens kitchen that was barely a year old. The quality is incredible — you'd never know it wasn't brand new.",
    savings: "£12,400",
    category: "Kitchen",
    rating: 5,
  },
  {
    name: "The Patel Family",
    location: "Birmingham",
    title: "Complete Bathroom Transformation",
    quote: "Rehome made selling our old bathroom and buying a replacement so easy. The team handled everything from dismantling to delivery. Exceptional service.",
    savings: "£6,800",
    category: "Bathroom",
    rating: 5,
  },
  {
    name: "David Thompson",
    location: "London",
    title: "Premium Appliances, Fraction of the Cost",
    quote: "I got a Miele dishwasher and a Smeg range cooker — both ex-display — for less than the price of one at retail. They look and perform like new.",
    savings: "£3,200",
    category: "Appliances",
    rating: 5,
  },
  {
    name: "Claire Robinson",
    location: "Leeds",
    title: "Sustainable Choice, Beautiful Result",
    quote: "We wanted to renovate responsibly. Rehome let us give a gorgeous Shaker kitchen a second life instead of it ending up in landfill. It's perfect.",
    savings: "£9,500",
    category: "Kitchen",
    rating: 5,
  },
  {
    name: "Mark & Lisa Chen",
    location: "Bristol",
    title: "Sold Our Kitchen in Two Weeks",
    quote: "We were renovating and dreaded the waste. Rehome sold our old kitchen within two weeks — we got paid and someone else got a bargain. Win-win!",
    savings: "Earned £4,200",
    category: "Seller",
    rating: 5,
  },
  {
    name: "Emma Williams",
    location: "Edinburgh",
    title: "Garden Furniture Finds",
    quote: "Found a beautiful teak garden set and a designer parasol for our patio. Both in immaculate condition and a third of the original price.",
    savings: "£2,100",
    category: "Home & Garden",
    rating: 5,
  },
];

const CustomerStories = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="bg-secondary/10 py-16 md:py-24">
      <div className="container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4"
        >
          Customer Stories
        </motion.h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real people, real savings. See how our customers have transformed their homes with Rehome.
        </p>
      </div>
    </section>

    <section className="container py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, i) => (
          <motion.div
            key={story.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl border border-border p-8 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-secondary/15 text-secondary text-xs font-semibold rounded-full">
                {story.category}
              </span>
              <div className="flex ml-auto">
                {Array.from({ length: story.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
            </div>
            <Quote className="w-8 h-8 text-secondary/30 mb-3" />
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{story.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">"{story.quote}"</p>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground text-sm">{story.name}</p>
                <p className="text-xs text-muted-foreground">{story.location}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Saved</p>
                <p className="font-bold text-secondary">{story.savings}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="bg-primary py-16 text-center">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Ready to Write Your Own Story?
        </h2>
        <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
          Join thousands of happy customers who've found premium interiors at unbeatable prices.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/kitchens" className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors">
            Start Shopping
          </a>
          <a href="/something-to-sell" className="px-8 py-3 border border-primary-foreground/20 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors">
            Sell With Us
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CustomerStories;
