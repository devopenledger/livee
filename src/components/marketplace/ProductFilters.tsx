
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export const ProductFilters = () => {
  return (
    <Card className="p-4">
      <h2 className="font-semibold mb-4">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Categories</h3>
          <div className="space-y-2">
            {["Smart Home", "Security", "Appliances", "Furniture"].map((category) => (
              <div key={category} className="flex items-center">
                <Checkbox id={category} />
                <label htmlFor={category} className="ml-2 text-sm">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Price Range</h3>
          <div className="space-y-2">
            {["Under AED 500", "AED 500 - 1000", "AED 1000 - 2000", "Above AED 2000"].map((range) => (
              <div key={range} className="flex items-center">
                <Checkbox id={range} />
                <label htmlFor={range} className="ml-2 text-sm">
                  {range}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
