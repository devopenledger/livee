
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ClientFilters = () => {
  return (
    <div className="flex gap-4">
      <div className="w-72">
        <Input type="text" placeholder="Search clients..." />
      </div>
      <Select>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="prospect">Prospect</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
