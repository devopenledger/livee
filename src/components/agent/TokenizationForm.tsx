
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  propertyName: z.string().min(1, "Property name is required"),
  location: z.string().min(1, "Location is required"),
  numberOfTokens: z.string().min(1, "Number of tokens is required"),
  pricePerToken: z.string().min(1, "Price per token is required"),
});

export const TokenizationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyName: "",
      location: "",
      numberOfTokens: "",
      pricePerToken: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Tokenization</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="propertyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter property name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <select 
                      {...field}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Select location</option>
                      <option value="downtown">Downtown Dubai</option>
                      <option value="marina">Dubai Marina</option>
                      <option value="palm">Palm Jumeirah</option>
                      <option value="jbr">JBR</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numberOfTokens"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Tokens</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter number of tokens" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pricePerToken"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price per Token (AED)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter price per token" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <FormLabel>Upload Documents</FormLabel>
              <Input type="file" multiple accept=".pdf,image/*" />
            </div>
            <Button type="submit" className="w-full">Submit Tokenization</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
