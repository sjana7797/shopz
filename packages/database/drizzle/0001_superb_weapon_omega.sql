CREATE TABLE "brands" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"company_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "companies" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"legal_name" text,
	"merchant_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "merchants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" text,
	"last_name" text,
	"pan" text NOT NULL,
	CONSTRAINT "merchants_pan_unique" UNIQUE("pan")
);
--> statement-breakpoint
CREATE TABLE "outlets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"brand_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "brands" ADD CONSTRAINT "brands_company_id_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "companies" ADD CONSTRAINT "companies_merchant_id_merchants_id_fk" FOREIGN KEY ("merchant_id") REFERENCES "public"."merchants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outlets" ADD CONSTRAINT "outlets_brand_id_brands_id_fk" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;