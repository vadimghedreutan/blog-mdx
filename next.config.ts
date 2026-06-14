import type { NextConfig } from "next"

// App Router is stable in Next.js 16; removed legacy experimental.appDir flag.
const nextConfig: NextConfig = {
	// Enable strict React semantics and improved hydration warnings.
	reactStrictMode: true,
}

export default nextConfig
