import CategoryListingLayout from "@/components/CategoryListingLayout";
import { getProductsByCategory } from "@/data/products";

const Bathrooms = () => (
  <CategoryListingLayout
    title="Bathrooms"
    description="Browse premium ex-display and approved used bathroom suites, vanity units, baths, and showers from leading brands at incredible prices."
    products={getProductsByCategory("bathrooms")}
    filters={[
      { label: "Condition", options: ["Ex Display", "Approved Used", "New"] },
      { label: "Type", options: ["Suite", "Vanity Unit", "Bath", "Shower"] },
      { label: "Brand", options: ["Victoria + Albert", "Duravit", "Burlington"] },
    ]}
  />
);

export default Bathrooms;
