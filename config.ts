export default {
  NODE_ENV: process.env.NODE_ENV || "development",
  BRAND_NAME: process.env.BRAND_NAME || "",
  DOMAIN: process.env.DOMAIN || "http://localhost:5173",

  DATABASE_URL: process.env.DATABASE_URL,
};
