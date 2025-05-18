import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  uuid,
  pgEnum,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  phoneNumber: text("phone_number").unique(),
  phoneNumberVerified: boolean("phone_number_verified"),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  role: text("role"),
  banned: boolean("banned"),
  banReason: text("ban_reason"),
  banExpires: timestamp("ban_expires"),
});

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  activeOrganizationId: text("active_organization_id"),
  impersonatedBy: text("impersonated_by"),
});

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verifications = pgTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
});

export const organizations = pgTable("organizations", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").unique(),
  logo: text("logo"),
  createdAt: timestamp("created_at").notNull(),
  metadata: text("metadata"),
});

export const members = pgTable("members", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  role: text("role").default("member").notNull(),
  createdAt: timestamp("created_at").notNull(),
});

export const invitations = pgTable("invitations", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  email: text("email").notNull(),
  role: text("role"),
  status: text("status").default("pending").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  inviterId: text("inviter_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const apikeys = pgTable("apikeys", {
  id: text("id").primaryKey(),
  name: text("name"),
  start: text("start"),
  prefix: text("prefix"),
  key: text("key").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  refillInterval: integer("refill_interval"),
  refillAmount: integer("refill_amount"),
  lastRefillAt: timestamp("last_refill_at"),
  enabled: boolean("enabled").default(true),
  rateLimitEnabled: boolean("rate_limit_enabled").default(true),
  rateLimitTimeWindow: integer("rate_limit_time_window").default(86400000),
  rateLimitMax: integer("rate_limit_max").default(10),
  requestCount: integer("request_count"),
  remaining: integer("remaining"),
  lastRequest: timestamp("last_request"),
  expiresAt: timestamp("expires_at"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  permissions: text("permissions"),
  metadata: text("metadata"),
});

export const ssoProviders = pgTable("sso_providers", {
  id: text("id").primaryKey(),
  issuer: text("issuer").notNull(),
  oidcConfig: text("oidc_config"),
  samlConfig: text("saml_config"),
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
  providerId: text("provider_id").notNull().unique(),
  organizationId: text("organization_id"),
  domain: text("domain").notNull(),
});

export const userProfile = pgTable("user_profile", {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  pan: text("pan"),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  userId: text("user_id")
    .notNull()
    .unique()
    .references(() => users.id),
  createdAt: timestamp("created_at", {
    precision: 3,
    withTimezone: true,
  }).defaultNow(),
  updatedAt: timestamp("updated_at", {
    precision: 3,
    withTimezone: true,
  }).defaultNow(),
});

export const workspace = pgTable("workspaces", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  description: text("description"),
  inviteCode: uuid("invite_code").notNull().defaultRandom().unique(),
  ownerId: text("owner_id").notNull(),
  createdAt: timestamp("created_at", {
    precision: 3,
    withTimezone: true,
  }).defaultNow(),
  updatedAt: timestamp("updated_at", {
    precision: 3,
    withTimezone: true,
  }).defaultNow(),
});

export const project = pgTable("projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  description: text("description"),
  icon: text("icon").default("📊"),
  inviteCode: uuid("invite_code").notNull().defaultRandom().unique(),
  workspaceId: integer("workspace_id")
    .notNull()
    .references(() => workspace.id),
  createdBy: text("created_by").notNull(),
  createdAt: timestamp("created_at", {
    precision: 3,
    withTimezone: true,
  }).defaultNow(),
  updatedAt: timestamp("updated_at", {
    precision: 3,
    withTimezone: true,
  }).defaultNow(),
});

export const taskStatusEnum = pgEnum("TaskStatus", [
  "BACKLOG",
  "TODO",
  "IN_PROGRESS",
  "IN_REVIEW",
  "DONE",
]);

export const taskPriorityEnum = pgEnum("TaskPriority", [
  "LOW",
  "MEDIUM",
  "HIGH",
  "URGENT",
]);

export const task = pgTable("tasks", {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  taskCode: text("task_code").unique().notNull(),
  title: text("title").notNull(),
  description: text("description"),
  projectId: integer("project_id")
    .notNull()
    .references(() => project.id),
  workspaceId: integer("workspace_id")
    .notNull()
    .references(() => workspace.id),
  status: taskStatusEnum("status").default("BACKLOG"),
  priority: taskPriorityEnum("priority").default("LOW"),
  createdBy: text("created_by").notNull(),
  assignedTo: text("assigned_to").notNull(),
  createdAt: timestamp("created_at", {
    precision: 3,
    withTimezone: true,
  }).defaultNow(),
  updatedAt: timestamp("updated_at", {
    precision: 3,
    withTimezone: true,
  }).defaultNow(),
});
