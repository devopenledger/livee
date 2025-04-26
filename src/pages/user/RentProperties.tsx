
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

// Mock property data
const properties = [
  {
    id: 1,
    name: "Marina View Apartment",
    location: "Dubai Marina",
    price: 250,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  {
    id: 2,
    name: "Downtown Luxury Suite",
    location: "Downtown Dubai",
    price: 350,
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
  },
  // Add more properties as needed
];

const RentProperties = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search Section */}
      <div className="mb-8">
        <div className="flex gap-4 flex-wrap">
          <Input
            placeholder="Search by location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Select Dates
          </Button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <CardContent className="pt-4">
              <h3 className="text-lg font-semibold">{property.name}</h3>
              <p className="text-muted-foreground">{property.location}</p>
              <p className="text-lg font-bold mt-2">${property.price}/night</p>
            </CardContent>
            <CardFooter className="bg-muted/5 border-t">
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RentProperties;
