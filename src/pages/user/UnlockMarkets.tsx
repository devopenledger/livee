
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const countries = [
  { id: "uae", label: "United Arab Emirates" },
  { id: "usa", label: "United States" },
  { id: "uk", label: "United Kingdom" },
  { id: "sg", label: "Singapore" },
  { id: "sa", label: "Saudi Arabia" },
];

const formSchema = z.object({
  countries: z.array(z.string()).min(1, "Select at least one country"),
});

const UnlockMarkets = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countries: [],
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Unlock Global Markets</h1>
      
      <Card className="p-6">
        <div className="prose max-w-none mb-6">
          <h2 className="text-xl font-semibold">KYC Consent Form</h2>
          <p className="text-gray-600">
            To invest in properties across different countries, you must consent to KYC verification
            in each jurisdiction. Select the countries where you would like to unlock investment
            opportunities.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="countries"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Available Countries</FormLabel>
                  </div>
                  {countries.map((country) => (
                    <FormField
                      key={country.id}
                      control={form.control}
                      name="countries"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={country.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(country.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, country.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== country.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {country.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit Consent
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default UnlockMarkets;
