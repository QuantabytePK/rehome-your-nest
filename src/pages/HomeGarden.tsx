import CategoryListingLayout from "@/components/CategoryListingLayout";
import { getProductsByCategory } from "@/data/products";

const HomeGarden = () => (
  <CategoryListingLayout
    title="Home & Garden"
    description="Explore quality pre-loved furniture, dressers, utility rooms, wardrobes, lighting, and outdoor pieces from premium brands."
    products={getProductsByCategory("home-garden")}
    filters={[
      { label: "Condition", options: ["Ex Display", "Approved Used", "New"] },
      { label: "Type", options: ["Dresser", "Utility Room", "Office", "Wardrobe", "Lighting"] },
      { label: "Brand", options: ["Neptune", "Tom Howley", "Clive Christian"] },
    ]}
  />
);

export default HomeGarden;
