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
import { routes } from "../utils/routes";

type Props = {
  title: string;
  description: string;
  metaData: string;
  link: string;
};

function AppCard(props: Props) {
  const { title, description, link, metaData } = props;

  return (
    <li className="h-full">
      <Card className="h-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{metaData}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
        <CardFooter className="flex items-center gap-2 justify-end">
          <Link
            href={routes.app(link)}
            className={cn(buttonVariants({ size: "sm", variant: "secondary" }))}
          >
            Read More
          </Link>
          <Link
            href="/storefront"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Add Now
          </Link>
        </CardFooter>
      </Card>
    </li>
  );
}

export default AppCard;
