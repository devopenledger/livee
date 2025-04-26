
import { ProductGrid } from "@/components/marketplace/ProductGrid";
import { ProductFilters } from "@/components/marketplace/ProductFilters";

const ProductMarketplace = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Product Marketplace</h1>
      
      <div className="flex gap-6">
        <aside className="w-64 flex-shrink-0">
          <ProductFilters />
        </aside>
        
        <div className="flex-1">
          <div className="mb-6">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full p-2 rounded-lg border"
            />
          </div>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default ProductMarketplace;
