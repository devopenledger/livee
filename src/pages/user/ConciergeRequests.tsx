
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ConciergeRequestForm } from "@/components/concierge/ConciergeRequestForm";
import { PastRequestsList } from "@/components/concierge/PastRequestsList";

const ConciergeRequests = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Concierge Services</h1>
      
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">New Request</h2>
          <ConciergeRequestForm />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Past Requests</h2>
          <PastRequestsList />
        </Card>
      </div>
    </div>
  );
};

export default ConciergeRequests;
