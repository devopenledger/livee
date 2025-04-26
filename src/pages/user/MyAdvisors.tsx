
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const advisors = [
  {
    id: 1,
    name: "John Smith",
    specialization: "UAE Property Specialist",
    image: "https://raw.githubusercontent.com/devopenledger/openledger-assets/main/placeholder.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    specialization: "Global Investment Advisor",
    image: "https://raw.githubusercontent.com/devopenledger/openledger-assets/main/placeholder.png",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    specialization: "Islamic Finance Consultant",
    image: "https://raw.githubusercontent.com/devopenledger/openledger-assets/main/placeholder.png",
  },
];

const MyAdvisors = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">My Advisors</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {advisors.map((advisor) => (
          <Card key={advisor.id} className="p-6">
            <div className="flex items-start space-x-4">
              <img
                src={advisor.image}
                alt={advisor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{advisor.name}</h3>
                <p className="text-sm text-gray-600">{advisor.specialization}</p>
                
                <div className="mt-4 space-x-2">
                  <Button size="sm" className="w-full mb-2">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    View Offers
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyAdvisors;
