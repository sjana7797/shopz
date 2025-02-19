import pino from "pino";

export const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

export const customLoggerWrapper = (message: string, ...rest: string[]) => {
  logger.info(message, ...rest);
};
