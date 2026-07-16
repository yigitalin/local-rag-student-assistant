// Application configuration – all paths relative to project root
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

export const config = {
  // Model
  model: "phi-3.5-mini",

  // Local RAG knowledge base
  docsDir: path.join(ROOT, "docs"),
  dbPath: path.join(ROOT, "data", "rag.db"),
  chunkSize: 200,      // Approximate chunk size for internship documents
  chunkOverlap: 25,    // Overlap between consecutive chunks
  topK: 2,             // Number of document chunks retrieved per query
  minSimilarityScore: 0.35, // Minimum score required to answer a question

  // Server
  port: 3000,
  host: "127.0.0.1",

  // UI
  publicDir: path.join(ROOT, "public"),
};