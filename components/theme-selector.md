# Theme Selector

A complete theme selector component with dropdown selection and code copy functionality. This component provides a comprehensive theming system for 8-bit styled applications.

## Features

- **Theme Dropdown**: Select from 12 different 8-bit themes
- **Live Preview**: See theme colors in the dropdown
- **Code Copy**: Copy theme CSS code to clipboard
- **Context Management**: Global theme state management
- **Cookie Persistence**: Theme selection persists across sessions
- **Responsive Design**: Works on all screen sizes

## Installation

```bash
npx shadcn@latest add @cyphercn/theme-selector
```

## Setup

### 1. Install Dependencies

The theme selector requires the following dependencies:

```bash
npm install react-shiki lucide-react
```

### 2. Wrap Your App with Theme Provider

You need to wrap your application with the `ActiveThemeProvider` in your root layout:

```tsx
// app/layout.tsx
import { ActiveThemeProvider } from "@/components/active-theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ActiveThemeProvider>{children}</ActiveThemeProvider>
      </body>
    </html>
  );
}
```

### 3. Use the Theme Selector

```tsx
import { ThemeSelector } from "@/components/theme-selector";

export default function MyPage() {
  return (
    <div>
      <h1>My 8-bit App</h1>
      <ThemeSelector />
    </div>
  );
}
```

## Available Themes

The theme selector uses the **CypherCN** theme: MS-DOS / cyber terminal style with phosphor colours.

- **CypherCN** – Phosphor green on black (default). Monospace fonts, zero radius, light/dark support.

Colour variants (applied via CSS classes in `globals.css` under `.theme-cyphercn.variant-*`):

- **Green** – Default phosphor green
- **Amber** – Warm CRT phosphor
- **Cyan** – Cool blue-green terminal
- **Red** – Alert/warning terminal
- **White** – High-contrast monochrome
- **Orange** – Vintage amber-orange

**High-contrast** mode (`.theme-cyphercn.high-contrast`) is available for WCAG AA compliance.

## Components

### ThemeSelector

The main theme selector component that combines the dropdown and copy functionality.

```tsx
import { ThemeSelector } from "@/components/theme-selector";

<ThemeSelector />;
```

### SelectThemeDropdown

A standalone dropdown for theme selection.

```tsx
import { useThemeConfig } from "@/components/active-theme";
import { SelectThemeDropdown } from "@/components/select-theme-dropdown";

function MyComponent() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <SelectThemeDropdown
      activeTheme={activeTheme}
      setActiveTheme={setActiveTheme}
    />
  );
}
```

### ActiveThemeProvider

Context provider for managing theme state.

```tsx
import { ActiveThemeProvider } from "@/components/active-theme";

<ActiveThemeProvider initialTheme="sega">{children}</ActiveThemeProvider>;
```

## Usage with Theme Context

Access the current theme and setter function using the `useThemeConfig` hook:

```tsx
import { Theme } from "@/lib/themes";

import { useThemeConfig } from "@/components/active-theme";

function MyComponent() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  const handleThemeChange = (newTheme: Theme) => {
    setActiveTheme(newTheme);
  };

  return (
    <div>
      <p>Current theme: {activeTheme}</p>
      <button onClick={() => handleThemeChange(Theme.Default)}>
        Switch to default (green phosphor)
      </button>
    </div>
  );
}
```

## API Reference

### ThemeSelector Props

No props required. Uses context for state management.

### SelectThemeDropdown Props

| Prop             | Type                     | Description                  |
| ---------------- | ------------------------ | ---------------------------- |
| `activeTheme`    | `Theme`                  | Currently active theme       |
| `setActiveTheme` | `(theme: Theme) => void` | Function to set active theme |

### useThemeConfig Hook

Returns an object with:

| Property         | Type                     | Description                  |
| ---------------- | ------------------------ | ---------------------------- |
| `activeTheme`    | `Theme`                  | Currently active theme       |
| `setActiveTheme` | `(theme: Theme) => void` | Function to set active theme |

### ActiveThemeProvider Props

| Prop            | Type        | Description              |
| --------------- | ----------- | ------------------------ |
| `children`      | `ReactNode` | Child components         |
| `initialTheme?` | `Theme`     | Initial theme (optional) |
