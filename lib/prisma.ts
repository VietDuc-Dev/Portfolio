import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { APP_CONFIG } from "@/config";

const adapter = new PrismaPg({
  connectionString: APP_CONFIG.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export { prisma };
