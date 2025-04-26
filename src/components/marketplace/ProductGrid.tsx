
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data
const products = [
  {
    id: 1,
    name: "Smart Home Security System",
    price: "AED 2,499",
    image: "https://raw.githubusercontent.com/devopenledger/openledger-assets/main/placeholder.png",
  },
  {
    id: 2,
    name: "Premium Air Purifier",
    price: "AED 999",
    image: "https://raw.githubusercontent.com/devopenledger/openledger-assets/main/placeholder.png",
  },
  {
    id: 3,
    name: "Smart Thermostat",
    price: "AED 599",
    image: "https://raw.githubusercontent.com/devopenledger/openledger-assets/main/placeholder.png",
  },
];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-lg font-bold text-primary mt-2">{product.price}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
