import { buttonVariants } from "@repo/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";
import { cn } from "@repo/ui/utils";
import Link from "next/link";

function Apps() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold">Our Apps</h1>
      <ul className="grid auto-rows-min gap-4 md:grid-cols-3">
        <li>
          <Card>
            <CardHeader>
              <CardTitle>StoreFront</CardTitle>
              <CardDescription>
                Manage all your inventory and orders from one place.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                StoreFront is a powerful inventory management system. Which
                allow you to manage your inventory and orders from one place. It
                also provide you with a dashboard to view your inventory and
                orders.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/storefront"
                className={cn(buttonVariants({ size: "sm" }))}
              >
                Add Now
              </Link>
            </CardFooter>
          </Card>
        </li>
      </ul>
    </main>
  );
}

export default Apps;
