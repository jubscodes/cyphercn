---
status: resolved
trigger: "Nested `<p>` tags in Alert component cause hydration error in Next.js"
created: 2026-02-01T00:00:00Z
updated: 2026-02-01T00:05:00Z
---

## Current Focus

hypothesis: CONFIRMED - AlertDescription renders a `<p>` tag, creating nested `<p>` when MDX wraps content
test: Changed AlertDescription from `<p>` to `<div>` element
expecting: No more hydration errors on /docs/components/alert page
next_action: Verify the fix by checking for TypeScript errors and building

## Symptoms

expected: Alert component renders without hydration errors
actual: "In HTML, <p> cannot be a descendant of <p>" error appears in console
errors: |
  In HTML, <p> cannot be a descendant of <p>.
  This will cause a hydration error.

  Stack trace shows:
  - AlertDescription renders <p className={"protheus-normal text-sm [&_p]:leading-relaxed"}>
  - Inside that, another <p> appears
  - Then mdx-components.tsx:94 wraps with another <p className={"leading-relaxed [&:not(:first-child)]:mt-6"}>
reproduction: Visit /docs/components/alert page
started: Likely introduced during Phase 2 component transformation when AlertDescription was styled

## Eliminated

(none yet)

## Evidence

- timestamp: 2026-02-01T00:01:00Z
  checked: components/ui/8bit/alert.tsx lines 63-72
  found: AlertDescription renders a `<p>` tag with type HTMLAttributes<HTMLParagraphElement>
  implication: Any content inside AlertDescription becomes a child of `<p>`

- timestamp: 2026-02-01T00:01:30Z
  checked: mdx-components.tsx lines 93-98
  found: MDX p component wraps paragraph content in `<p>` with styling
  implication: Text content in MDX files gets wrapped in `<p>` automatically

- timestamp: 2026-02-01T00:02:00Z
  checked: content/docs/components/alert.mdx lines 25-27
  found: AlertDescription contains text "You can add components to your app using the cli."
  implication: MDX processes this text and wraps it in its `<p>` component, which nests inside AlertDescription's `<p>`

## Resolution

root_cause: AlertDescription component renders a `<p>` element. When used in MDX context, the text content inside AlertDescription gets wrapped by MDX's paragraph component (another `<p>`), creating invalid nested `<p>` tags which violates HTML spec and causes hydration errors.
fix: Change AlertDescription from `<p>` to `<div>` element, update TypeScript type from HTMLParagraphElement to HTMLDivElement
verification: TypeScript compilation passes (no errors), Next.js build succeeds including /docs/components/alert page
files_changed:
  - components/ui/8bit/alert.tsx
