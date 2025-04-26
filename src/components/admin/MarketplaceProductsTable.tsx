
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash } from "lucide-react";

type MarketplaceProduct = {
  id: string;
  name: string;
  category: string;
  price: string;
  stockStatus: "In Stock" | "Low Stock" | "Out of Stock";
};

const mockProducts: MarketplaceProduct[] = [
  {
    id: "1",
    name: "Smart Home Hub - Dubai Edition",
    category: "Smart Home",
    price: "AED 1,200",
    stockStatus: "In Stock"
  },
  {
    id: "2",
    name: "Premium Cleaning Service - 4 Bedrooms",
    category: "Services",
    price: "AED 650",
    stockStatus: "In Stock"
  },
  {
    id: "3",
    name: "Luxury Bathroom Fixtures Set",
    category: "Home Improvement",
    price: "AED 4,800",
    stockStatus: "Low Stock"
  },
  {
    id: "4",
    name: "Personal Chef - Special Occasions",
    category: "Services",
    price: "AED 2,500",
    stockStatus: "In Stock"
  },
  {
    id: "5",
    name: "Smart Security System",
    category: "Smart Home",
    price: "AED 3,200",
    stockStatus: "Out of Stock"
  },
  {
    id: "6",
    name: "Interior Design Consultation",
    category: "Services",
    price: "AED 1,800",
    stockStatus: "In Stock"
  }
];

interface MarketplaceProductsTableProps {
  searchQuery: string;
}

export function MarketplaceProductsTable({ searchQuery }: MarketplaceProductsTableProps) {
  const filteredProducts = mockProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <Badge variant={
                  product.stockStatus === "In Stock" ? "success" :
                  product.stockStatus === "Low Stock" ? "outline" : "destructive"
                }>
                  {product.stockStatus}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
