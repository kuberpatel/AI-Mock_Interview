import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-mock-interview_owner:PkxVi0nKLF4B@ep-billowing-cloud-a52k9vyi.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require",
  },
});
