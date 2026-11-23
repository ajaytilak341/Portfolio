<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent Behavior & Performance Rules

## 1. Speed & Execution Efficiency
- **No Over-Engineering**: For straightforward tasks (UI tweaks, style adjustments, text edits, simple component changes), jump directly to the solution. Do not perform lengthy multi-step investigations, unnecessary file crawling, or launch subagents.
- **No Unnecessary Testing**: Do NOT run `npm run build`, `npm test`, linter scripts, or background servers for simple changes unless the user explicitly asks for verification or core build/config files were altered.
- **Batching & Conciseness**: Perform reads and edits in single batched turns. Keep explanations short, clear, and direct without fluff.

## 2. High-Standard Coding & Quality
- **Match Project Patterns**: Use Next.js App Router standards, TypeScript types, and Tailwind CSS matching the existing codebase structure.
- **Non-Destructive Edits**: Never delete or break existing features, animations, or props unless explicitly requested. Make surgical, minimal-diff edits.
- **Interactive Components**: Ensure any component using state, hooks, or browser events has `'use client'` at the top.
- **Responsive & Modern Design**: Ensure UI elements look great across mobile and desktop breakpoints with proper dark/light theme contrast.

## 3. Reliability & Accuracy
- **Inspect Before Editing**: Always check the specific target component before editing to ensure imports, variable names, and props are correct.
- **Verify Syntax**: Ensure valid TypeScript/JSX syntax with no missing closing tags, duplicate declarations, or broken imports.

