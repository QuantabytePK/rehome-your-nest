import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Who We Are",
    content: `UKE Home Solutions Ltd, trading as Rehome, is the data controller responsible for your personal data. Registered Address: Unit 14, Turnstone Business Park, Mulberry Avenue, Widnes WA8 0WN. Company No: 09875521.`,
  },
  {
    title: "2. Information We Collect",
    content: `We may collect: your name, email address, phone number, delivery address, and payment details when you place an order; browsing data and cookies when you visit our website; information you provide when contacting us or subscribing to alerts; and details about items you wish to sell through our platform.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your information to process and deliver orders; manage your account and wishlist; communicate about your purchases or sales; send marketing communications (with your consent); improve our website and services; and comply with legal and regulatory obligations.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your data on the basis of: contract performance (to fulfil your orders); legitimate interests (to improve our services and prevent fraud); consent (for marketing communications); and legal obligation (for tax, financial regulation, and consumer protection compliance).`,
  },
  {
    title: "5. Sharing Your Data",
    content: `We may share your data with: delivery and installation partners to fulfil orders; payment processors (including Novuna Personal Finance for credit applications); professional advisors and auditors; and law enforcement where required by law. We do not sell your personal data to third parties.`,
  },
  {
    title: "6. Cookies",
    content: `Our website uses cookies to ensure functionality, analyse traffic, and personalise your experience. You can manage cookie preferences through your browser settings. Essential cookies are required for the website to function and cannot be disabled.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain your personal data only as long as necessary: order data is kept for 7 years for tax and legal purposes; account data is kept until you request deletion; marketing consent records are kept until you unsubscribe.`,
  },
  {
    title: "8. Your Rights",
    content: `Under UK GDPR, you have the right to: access your personal data; rectify inaccurate data; request erasure ("right to be forgotten"); restrict processing; data portability; and object to processing. To exercise any of these rights, contact us at privacy@rehome.co.uk.`,
  },
  {
    title: "9. Data Security",
    content: `We implement appropriate technical and organisational measures to protect your data, including encryption of payment data, secure server infrastructure, and staff training on data protection. However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: "10. Children's Privacy",
    content: `Our services are not directed at individuals under 18. We do not knowingly collect data from children. If we become aware that a child has provided personal data, we will take steps to delete it.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.`,
  },
  {
    title: "12. Contact Us",
    content: `For any privacy-related queries, contact our Data Protection Officer at privacy@rehome.co.uk or write to: Data Protection Officer, UKE Home Solutions Ltd, Unit 14, Turnstone Business Park, Mulberry Avenue, Widnes WA8 0WN.`,
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="bg-muted py-12 md:py-16">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2">Last updated: January 2024</p>
      </div>
    </section>

    <section className="container py-12 max-w-3xl">
      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">{s.title}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default PrivacyPolicy;
