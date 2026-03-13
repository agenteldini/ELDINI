import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: [
    "@solana/web3.js",
    "@solana/spl-token",
    "@pump-fun/pump-sdk",
    "@pump-fun/pump-swap-sdk",
    "bn.js",
    "bs58",
  ],
  turbopack: {},
};

export default nextConfig;
