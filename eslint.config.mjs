import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import prettier from "eslint-config-prettier/flat"

/** ESLint flat config for Next.js 16 (replaces deprecated `next lint`). */
const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	prettier,
	globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
])

export default eslintConfig
