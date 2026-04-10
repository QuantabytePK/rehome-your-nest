import CategoryListingLayout from "@/components/CategoryListingLayout";
import { getProductsByCategory } from "@/data/products";

const Appliances = () => (
  <CategoryListingLayout
    title="Appliances"
    description="Shop premium ex-display and nearly new kitchen appliances from Miele, Gaggenau, Quooker, and more — all quality certified and priced to save you thousands."
    products={getProductsByCategory("appliances")}
    filters={[
      { label: "Condition", options: ["Ex Display", "Approved Used", "New"] },
      { label: "Type", options: ["Oven", "Hob", "Tap", "Fridge", "Dishwasher"] },
      { label: "Brand", options: ["Miele", "Gaggenau", "Quooker"] },
    ]}
  />
);

export default Appliances;
