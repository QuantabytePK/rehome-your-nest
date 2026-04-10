import CategoryListingLayout from "@/components/CategoryListingLayout";
import { getProductsByCategory } from "@/data/products";

const Kitchens = () => (
  <CategoryListingLayout
    title="Kitchens"
    description="Discover the UK's widest range of approved used and ex-display kitchens from premium brands like Neptune, Tom Howley, and SieMatic — all at up to 80% off."
    products={getProductsByCategory("kitchens")}
    filters={[
      { label: "Condition", options: ["Ex Display", "Approved Used", "New"] },
      { label: "Type", options: ["Shaker", "Modern", "Traditional"] },
      { label: "Brand", options: ["Neptune", "Tom Howley", "Chalon", "Harvey Jones", "Howdens", "SieMatic"] },
    ]}
  />
);

export default Kitchens;
