// Prisma 7+ datasource configuration file
// Move connection URLs here instead of schema.prisma to satisfy Prisma v7 config
import { defineConfig } from 'prisma';

export default defineConfig({
  datasources: {
    db: {
      provider: 'postgresql',
      // Read connection URLs from environment variables at runtime/build
      url: process.env.DATABASE_URL,
      directUrl: process.env.DIRECT_DATABASE_URL
    }
  }
});
