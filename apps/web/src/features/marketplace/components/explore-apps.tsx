import { Button } from "@repo/ui/components/button";
import { Card } from "@repo/ui/components/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import {
  Gemini,
  Replit,
  MagicUI,
  VSCodium,
  MediaWiki,
  GooglePaLM,
} from "@/components/logos";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/tabs";

export default function ExploreApps() {
  return (
    <section>
      <div className="py-32">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Integrate with your favorite tools
            </h2>
            <p className="text-muted-foreground mt-6">
              Connect seamlessly with popular platforms and services to enhance
              your workflow.
            </p>
          </div>

          <Tabs defaultValue="all" className="my-5 md:my-10">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="sellOnline">Sell Online</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="flex flex-col gap-y-6">
                <div className="mt-5 space-y-5">
                  <h2 className="bg-primary text-primary-foreground w-fit select-none rounded-xl px-2 py-1 text-lg font-semibold tracking-wide shadow md:text-xl lg:text-2xl">
                    Sell Online
                  </h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <IntegrationCard
                      title="Google Gemini"
                      description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                    >
                      <Gemini />
                    </IntegrationCard>

                    <IntegrationCard
                      title="Replit"
                      description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                    >
                      <Replit />
                    </IntegrationCard>

                    <IntegrationCard
                      title="Magic UI"
                      description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                    >
                      <MagicUI />
                    </IntegrationCard>

                    <IntegrationCard
                      title="VSCodium"
                      description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                    >
                      <VSCodium />
                    </IntegrationCard>

                    <IntegrationCard
                      title="MediaWiki"
                      description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                    >
                      <MediaWiki />
                    </IntegrationCard>

                    <IntegrationCard
                      title="Google PaLM"
                      description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                    >
                      <GooglePaLM />
                    </IntegrationCard>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="featured">
              <div className="mt-5 space-y-5">
                <h2 className="bg-primary text-primary-foreground w-fit rounded-xl px-2 py-1 text-lg font-semibold tracking-wide shadow md:text-xl lg:text-2xl">
                  Featured
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <IntegrationCard
                    title="Google Gemini"
                    description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                  >
                    <Gemini />
                  </IntegrationCard>

                  <IntegrationCard
                    title="Replit"
                    description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                  >
                    <Replit />
                  </IntegrationCard>

                  <IntegrationCard
                    title="Magic UI"
                    description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                  >
                    <MagicUI />
                  </IntegrationCard>

                  <IntegrationCard
                    title="VSCodium"
                    description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                  >
                    <VSCodium />
                  </IntegrationCard>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sellOnline">
              <div className="mt-5 space-y-5">
                <h2 className="bg-primary text-primary-foreground w-fit rounded-xl px-2 py-1 text-lg font-semibold tracking-wide shadow md:text-xl lg:text-2xl">
                  Sell Online
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <IntegrationCard
                    title="Google Gemini"
                    description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                  >
                    <Gemini />
                  </IntegrationCard>

                  <IntegrationCard
                    title="Replit"
                    description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                  >
                    <Replit />
                  </IntegrationCard>

                  <IntegrationCard
                    title="Magic UI"
                    description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                  >
                    <MagicUI />
                  </IntegrationCard>

                  <IntegrationCard
                    title="VSCodium"
                    description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                  >
                    <VSCodium />
                  </IntegrationCard>

                  <IntegrationCard
                    title="MediaWiki"
                    description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                  >
                    <MediaWiki />
                  </IntegrationCard>

                  <IntegrationCard
                    title="Google PaLM"
                    description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                  >
                    <GooglePaLM />
                  </IntegrationCard>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  title,
  description,
  children,
  link = "https://github.com/meschacirung/cnblocks",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  link?: string;
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="*:size-10">{children}</div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-dashed pt-6">
          <Button
            asChild
            variant="default"
            size="sm"
            className="gap-1 pr-2 shadow-none"
          >
            <Link href={"#"}>Register Now</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="gap-1 pr-2 shadow-none"
          >
            <Link href={"#"}>
              Learn More
              <ChevronRight className="ml-0 !size-3.5 opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
