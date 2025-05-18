import { Client, getServiceURL, PORT } from "./service";

export const registerToConsul = async (client: Client) => {
  const payload = {
    Name: client,
    ID: client,
    Address: "localhost",
    Port: PORT[client],
    Tags: ["bun", "hono"],
    Check: {
      HTTP: `${getServiceURL(client)}/health`,
      Interval: "10s",
      Timeout: "2s",
    },
  };

  await fetch("http://localhost:8500/v1/agent/service/register", {
    body: JSON.stringify(payload),
    method: "PUT",
  });
};
