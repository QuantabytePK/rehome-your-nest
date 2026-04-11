import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Introduction",
    content: `These terms and conditions ("Terms") govern your use of the Rehome website (rehome.co.uk) and all services provided by UKE Home Solutions Ltd, trading as Rehome ("we", "us", "our"). By using our website or services, you agree to be bound by these Terms. If you do not agree, please do not use our services.`,
  },
  {
    title: "2. About Us",
    content: `Rehome is a trading name of UKE Home Solutions Ltd, a company registered in England and Wales. Company Number: 09875521. VAT Number: 236246316. Registered Address: Unit 14, Turnstone Business Park, Mulberry Avenue, Widnes WA8 0WN.`,
  },
  {
    title: "3. Our Services",
    content: `We provide an online marketplace for buying and selling pre-owned, ex-display, and approved used kitchens, bathrooms, appliances, and home furnishings. We also offer dismantling, delivery, and installation services through our network of trusted professionals.`,
  },
  {
    title: "4. Pricing & Payment",
    content: `All prices are displayed in GBP and include VAT where applicable. We accept payment via major credit and debit cards. Finance options are available through Novuna Personal Finance (a trading style of Mitsubishi HC Capital UK PLC), authorised and regulated by the Financial Conduct Authority (FCA Register No: 704348). Prices are subject to change without notice, but changes will not affect orders already placed.`,
  },
  {
    title: "5. Product Descriptions & Condition",
    content: `We make every effort to describe and photograph items accurately. All items are graded by condition: "Ex-Display" (showroom items, never installed), "Excellent" (minimal signs of use), "Good" (light wear consistent with age), and "Fair" (visible wear but fully functional). Minor variations in colour may occur due to screen settings.`,
  },
  {
    title: "6. Delivery",
    content: `Delivery timescales are estimates only. We aim to deliver within the timeframe stated at the point of sale. Risk of damage or loss passes to you upon delivery. Items must be checked at the point of delivery and any damage reported within 48 hours.`,
  },
  {
    title: "7. Returns & Refunds",
    content: `Under the Consumer Contracts Regulations 2013, you have 14 days from delivery to cancel your order and request a return. Items must be in the same condition as received. Return shipping costs are the responsibility of the buyer unless the item is faulty or not as described. Refunds are processed within 14 days of receiving the returned item.`,
  },
  {
    title: "8. Selling With Rehome",
    content: `When you list items for sale through our service, we act as your agent. We charge a commission on successful sales, which is deducted from the sale price before payment to you. Commission rates are agreed before listing and are detailed in your seller agreement. We reserve the right to decline items that do not meet our quality standards.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `To the fullest extent permitted by law, our liability for any claim arising from the use of our services is limited to the price paid for the relevant product or service. We are not liable for indirect or consequential losses. Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.`,
  },
  {
    title: "10. Intellectual Property",
    content: `All content on this website — including text, images, logos, and design — is owned by or licensed to UKE Home Solutions Ltd. You may not reproduce, distribute, or use any content without our prior written consent.`,
  },
  {
    title: "11. Changes to These Terms",
    content: `We may update these Terms from time to time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the revised Terms.`,
  },
  {
    title: "12. Governing Law",
    content: `These Terms are governed by English law. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: "13. Contact",
    content: `If you have questions about these Terms, please contact us at hello@rehome.co.uk or visit our Contact page.`,
  },
];

const TermsAndConditions = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="bg-muted py-12 md:py-16">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Terms & Conditions</h1>
        <p className="text-muted-foreground mt-2">Last updated: January 2024</p>
      </div>
    </section>

    <section className="container py-12 max-w-3xl">
      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">{s.title}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{s.content}</p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default TermsAndConditions;
