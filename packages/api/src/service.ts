export const CLIENTS = {
  AUTH_SERVICE: "AUTH_SERVICE",
  MERCH_MANAGE_SERVICE: "MERCH_MANAGE_SERVICE",
  GATEWAY_SERVICE: "GATEWAY_SERVICE",
  INSTA_SHOP_SERVICE: "INSTA_SHOP_SERVICE",
} as const;

export type CLientKey = keyof typeof CLIENTS;

export type Client = (typeof CLIENTS)[CLientKey];

export const PORT: Record<Client, number> = {
  GATEWAY_SERVICE: 5000,
  AUTH_SERVICE: 5001,
  MERCH_MANAGE_SERVICE: 5002,
  INSTA_SHOP_SERVICE: 5003,
};

export const getServiceURL = (client: Client) =>
  `http://localhost:${PORT[client]}`;

export const GET_CLIENT = (client: Client) => ({
  port: PORT[client],
  url: getServiceURL(client),
});
