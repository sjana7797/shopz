import { Button, buttonVariants } from "@repo/ui/button";
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
import Render from "@repo/ui/components/render";

type Props = {
  title: string;
  description: string;
  metaData: string;
  link: string;
  comingSoon: boolean;
};

function AppCard(props: Props) {
  const { title, description, link, metaData, comingSoon } = props;

  return (
    <li className="h-full">
      <Card className="flex h-full flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-xs">{metaData}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm">{description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-end gap-2">
          <Link
            href={routes.app(link)}
            className={cn(buttonVariants({ size: "sm", variant: "secondary" }))}
          >
            Read More
          </Link>
          <Render renderIf={!comingSoon}>
            <Link
              href={`/${link}`}
              className={cn(buttonVariants({ size: "sm" }))}
            >
              Add Now
            </Link>
          </Render>
          <Render renderIf={comingSoon}>
            <Button variant="outline" size="sm">
              Coming Soon
            </Button>
          </Render>
        </CardFooter>
      </Card>
    </li>
  );
}

export default AppCard;
