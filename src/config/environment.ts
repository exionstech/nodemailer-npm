import dotenv from "dotenv";
dotenv.config();

export const environment = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
};
