import { relations } from "drizzle-orm";
import { decimal, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { organizations } from ".";

export const products = pgTable("products", {
  id: uuid("id").primaryKey().notNull(),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  description: text("description").notNull(),
  costPrice: decimal("cost_price").notNull(),
  sku: text("sku").notNull(),
  organizationId: uuid("organization_id").notNull(),
  createdAt: timestamp("created_at", {
    precision: 3,
    withTimezone: true,
  }).defaultNow(),
  updatedAt: timestamp("updated_at", {
    precision: 3,
    withTimezone: true,
  }),
});

export const images = pgTable("images", {
  id: uuid("id").primaryKey().notNull(),
  image: text("image").notNull(),
  placeholder: text("placeholder").notNull(),
  createdAt: timestamp("created_at", {
    precision: 3,
    withTimezone: true,
  }).defaultNow(),
});

// relationships
// Product-Images Join Table
export const productImages = pgTable("product_images", {
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  imageId: uuid("image_id")
    .notNull()
    .references(() => images.id, { onDelete: "cascade" }),
});

// Relationships
export const productRelations = relations(products, ({ many, one }) => ({
  images: many(productImages),
  organization: one(organizations, {
    fields: [products.organizationId],
    references: [organizations.id],
  }),
}));

export const imageRelations = relations(images, ({ many }) => ({
  products: many(productImages),
}));

export const productImageRelations = relations(productImages, ({ one }) => ({
  product: one(products, {
    fields: [productImages.productId],
    references: [products.id],
  }),
  image: one(images, {
    fields: [productImages.imageId],
    references: [images.id],
  }),
}));
