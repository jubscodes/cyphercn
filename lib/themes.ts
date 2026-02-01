export const Theme = {
  Default: "default",
  Amber: "amber",
  Cyan: "cyan",
  Red: "red",
  White: "white",
  Orange: "orange",
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];

const themes = [
  {
    name: Theme.Default,
    color: `:root {
  --radius: 0rem;
  --font-sans: "IBM Plex Mono", "Courier New", monospace;
  --font-serif: "IBM Plex Mono", "Courier New", monospace;
  --font-mono: "IBM Plex Mono", "Courier New", monospace;
  --phosphor: oklch(0.85 0.25 142);
  --phosphor-dim: oklch(0.45 0.15 142);
  --phosphor-bright: oklch(0.95 0.3 142);
  --phosphor-glow: oklch(0.7 0.2 142 / 0.5);
  --background: oklch(0.85 0.2 142);
  --foreground: oklch(0.15 0.05 142);
  --card: oklch(0.8 0.18 142);
  --card-foreground: oklch(0.1 0.05 142);
  --popover: oklch(0.8 0.18 142);
  --popover-foreground: oklch(0.1 0.05 142);
  --primary: oklch(0.15 0.05 142);
  --primary-foreground: oklch(0.85 0.2 142);
  --secondary: oklch(0.7 0.15 142);
  --secondary-foreground: oklch(0.1 0.05 142);
  --muted: oklch(0.75 0.15 142);
  --muted-foreground: oklch(0.3 0.1 142);
  --accent: oklch(0.6 0.12 142);
  --accent-foreground: oklch(0.1 0.05 142);
  --destructive: oklch(0.5 0.2 25);
  --border: oklch(0.2 0.08 142);
  --input: oklch(0.2 0.08 142);
  --ring: oklch(0.3 0.1 142);
  --chart-1: oklch(0.15 0.05 142);
  --chart-2: oklch(0.25 0.08 142);
  --chart-3: oklch(0.35 0.1 142);
  --chart-4: oklch(0.45 0.12 142);
  --chart-5: oklch(0.55 0.15 142);
  --sidebar: oklch(0.8 0.18 142);
  --sidebar-foreground: oklch(0.1 0.05 142);
  --sidebar-primary: oklch(0.15 0.05 142);
  --sidebar-primary-foreground: oklch(0.85 0.2 142);
  --sidebar-accent: oklch(0.7 0.15 142);
  --sidebar-accent-foreground: oklch(0.1 0.05 142);
  --sidebar-border: oklch(0.2 0.08 142);
  --sidebar-ring: oklch(0.3 0.1 142);
}

.dark {
  --background: oklch(0.05 0 0);
  --foreground: oklch(0.85 0.25 142);
  --card: oklch(0.08 0.01 142);
  --card-foreground: oklch(0.85 0.25 142);
  --popover: oklch(0.08 0.01 142);
  --popover-foreground: oklch(0.85 0.25 142);
  --primary: oklch(0.85 0.25 142);
  --primary-foreground: oklch(0.05 0 0);
  --secondary: oklch(0.15 0.05 142);
  --secondary-foreground: oklch(0.7 0.2 142);
  --muted: oklch(0.12 0.03 142);
  --muted-foreground: oklch(0.5 0.15 142);
  --accent: oklch(0.2 0.08 142);
  --accent-foreground: oklch(0.85 0.25 142);
  --destructive: oklch(0.6 0.25 25);
  --border: oklch(0.85 0.25 142);
  --input: oklch(0.85 0.25 142);
  --ring: oklch(0.7 0.2 142);
  --chart-1: oklch(0.95 0.3 142);
  --chart-2: oklch(0.85 0.25 142);
  --chart-3: oklch(0.7 0.2 142);
  --chart-4: oklch(0.55 0.15 142);
  --chart-5: oklch(0.4 0.1 142);
  --sidebar: oklch(0.08 0.01 142);
  --sidebar-foreground: oklch(0.85 0.25 142);
  --sidebar-primary: oklch(0.85 0.25 142);
  --sidebar-primary-foreground: oklch(0.05 0 0);
  --sidebar-accent: oklch(0.2 0.08 142);
  --sidebar-accent-foreground: oklch(0.85 0.25 142);
  --sidebar-border: oklch(0.85 0.25 142);
  --sidebar-ring: oklch(0.7 0.2 142);
}`,
  },
  {
    name: Theme.Amber,
    color: `:root {
  --radius: 0rem;
  --font-sans: "IBM Plex Mono", "Courier New", monospace;
  --font-serif: "IBM Plex Mono", "Courier New", monospace;
  --font-mono: "IBM Plex Mono", "Courier New", monospace;
  --phosphor: oklch(0.85 0.18 85);
  --phosphor-dim: oklch(0.45 0.12 85);
  --phosphor-bright: oklch(0.95 0.22 85);
  --phosphor-glow: oklch(0.7 0.15 85 / 0.5);
  --background: oklch(0.85 0.18 85);
  --foreground: oklch(0.15 0.05 85);
  --card: oklch(0.8 0.16 85);
  --card-foreground: oklch(0.1 0.05 85);
  --popover: oklch(0.8 0.16 85);
  --popover-foreground: oklch(0.1 0.05 85);
  --primary: oklch(0.15 0.05 85);
  --primary-foreground: oklch(0.85 0.18 85);
  --secondary: oklch(0.7 0.14 85);
  --secondary-foreground: oklch(0.1 0.05 85);
  --muted: oklch(0.75 0.14 85);
  --muted-foreground: oklch(0.3 0.1 85);
  --accent: oklch(0.6 0.12 85);
  --accent-foreground: oklch(0.1 0.05 85);
  --destructive: oklch(0.5 0.2 25);
  --border: oklch(0.2 0.08 85);
  --input: oklch(0.2 0.08 85);
  --ring: oklch(0.3 0.1 85);
  --chart-1: oklch(0.15 0.05 85);
  --chart-2: oklch(0.25 0.08 85);
  --chart-3: oklch(0.35 0.1 85);
  --chart-4: oklch(0.45 0.12 85);
  --chart-5: oklch(0.55 0.15 85);
  --sidebar: oklch(0.8 0.16 85);
  --sidebar-foreground: oklch(0.1 0.05 85);
  --sidebar-primary: oklch(0.15 0.05 85);
  --sidebar-primary-foreground: oklch(0.85 0.18 85);
  --sidebar-accent: oklch(0.7 0.14 85);
  --sidebar-accent-foreground: oklch(0.1 0.05 85);
  --sidebar-border: oklch(0.2 0.08 85);
  --sidebar-ring: oklch(0.3 0.1 85);
}

.dark {
  --background: oklch(0.05 0 0);
  --foreground: oklch(0.85 0.18 85);
  --card: oklch(0.08 0.01 85);
  --card-foreground: oklch(0.85 0.18 85);
  --popover: oklch(0.08 0.01 85);
  --popover-foreground: oklch(0.85 0.18 85);
  --primary: oklch(0.85 0.18 85);
  --primary-foreground: oklch(0.05 0 0);
  --secondary: oklch(0.15 0.05 85);
  --secondary-foreground: oklch(0.7 0.16 85);
  --muted: oklch(0.12 0.03 85);
  --muted-foreground: oklch(0.5 0.14 85);
  --accent: oklch(0.2 0.08 85);
  --accent-foreground: oklch(0.85 0.18 85);
  --destructive: oklch(0.6 0.25 25);
  --border: oklch(0.85 0.18 85);
  --input: oklch(0.85 0.18 85);
  --ring: oklch(0.7 0.16 85);
  --chart-1: oklch(0.95 0.22 85);
  --chart-2: oklch(0.85 0.18 85);
  --chart-3: oklch(0.7 0.16 85);
  --chart-4: oklch(0.55 0.14 85);
  --chart-5: oklch(0.4 0.1 85);
  --sidebar: oklch(0.08 0.01 85);
  --sidebar-foreground: oklch(0.85 0.18 85);
  --sidebar-primary: oklch(0.85 0.18 85);
  --sidebar-primary-foreground: oklch(0.05 0 0);
  --sidebar-accent: oklch(0.2 0.08 85);
  --sidebar-accent-foreground: oklch(0.85 0.18 85);
  --sidebar-border: oklch(0.85 0.18 85);
  --sidebar-ring: oklch(0.7 0.16 85);
}`,
  },
  {
    name: Theme.Cyan,
    color: `:root {
  --radius: 0rem;
  --font-sans: "IBM Plex Mono", "Courier New", monospace;
  --font-serif: "IBM Plex Mono", "Courier New", monospace;
  --font-mono: "IBM Plex Mono", "Courier New", monospace;
  --phosphor: oklch(0.85 0.15 195);
  --phosphor-dim: oklch(0.45 0.1 195);
  --phosphor-bright: oklch(0.95 0.18 195);
  --phosphor-glow: oklch(0.7 0.12 195 / 0.5);
  --background: oklch(0.85 0.15 195);
  --foreground: oklch(0.15 0.05 195);
  --card: oklch(0.8 0.14 195);
  --card-foreground: oklch(0.1 0.05 195);
  --popover: oklch(0.8 0.14 195);
  --popover-foreground: oklch(0.1 0.05 195);
  --primary: oklch(0.15 0.05 195);
  --primary-foreground: oklch(0.85 0.15 195);
  --secondary: oklch(0.7 0.12 195);
  --secondary-foreground: oklch(0.1 0.05 195);
  --muted: oklch(0.75 0.12 195);
  --muted-foreground: oklch(0.3 0.1 195);
  --accent: oklch(0.6 0.1 195);
  --accent-foreground: oklch(0.1 0.05 195);
  --destructive: oklch(0.5 0.2 25);
  --border: oklch(0.2 0.08 195);
  --input: oklch(0.2 0.08 195);
  --ring: oklch(0.3 0.1 195);
  --chart-1: oklch(0.15 0.05 195);
  --chart-2: oklch(0.25 0.08 195);
  --chart-3: oklch(0.35 0.1 195);
  --chart-4: oklch(0.45 0.12 195);
  --chart-5: oklch(0.55 0.14 195);
  --sidebar: oklch(0.8 0.14 195);
  --sidebar-foreground: oklch(0.1 0.05 195);
  --sidebar-primary: oklch(0.15 0.05 195);
  --sidebar-primary-foreground: oklch(0.85 0.15 195);
  --sidebar-accent: oklch(0.7 0.12 195);
  --sidebar-accent-foreground: oklch(0.1 0.05 195);
  --sidebar-border: oklch(0.2 0.08 195);
  --sidebar-ring: oklch(0.3 0.1 195);
}

.dark {
  --background: oklch(0.05 0 0);
  --foreground: oklch(0.85 0.15 195);
  --card: oklch(0.08 0.01 195);
  --card-foreground: oklch(0.85 0.15 195);
  --popover: oklch(0.08 0.01 195);
  --popover-foreground: oklch(0.85 0.15 195);
  --primary: oklch(0.85 0.15 195);
  --primary-foreground: oklch(0.05 0 0);
  --secondary: oklch(0.15 0.05 195);
  --secondary-foreground: oklch(0.7 0.14 195);
  --muted: oklch(0.12 0.03 195);
  --muted-foreground: oklch(0.5 0.12 195);
  --accent: oklch(0.2 0.08 195);
  --accent-foreground: oklch(0.85 0.15 195);
  --destructive: oklch(0.6 0.25 25);
  --border: oklch(0.85 0.15 195);
  --input: oklch(0.85 0.15 195);
  --ring: oklch(0.7 0.14 195);
  --chart-1: oklch(0.95 0.18 195);
  --chart-2: oklch(0.85 0.15 195);
  --chart-3: oklch(0.7 0.14 195);
  --chart-4: oklch(0.55 0.12 195);
  --chart-5: oklch(0.4 0.1 195);
  --sidebar: oklch(0.08 0.01 195);
  --sidebar-foreground: oklch(0.85 0.15 195);
  --sidebar-primary: oklch(0.85 0.15 195);
  --sidebar-primary-foreground: oklch(0.05 0 0);
  --sidebar-accent: oklch(0.2 0.08 195);
  --sidebar-accent-foreground: oklch(0.85 0.15 195);
  --sidebar-border: oklch(0.85 0.15 195);
  --sidebar-ring: oklch(0.7 0.14 195);
}`,
  },
  {
    name: Theme.Red,
    color: `:root {
  --radius: 0rem;
  --font-sans: "IBM Plex Mono", "Courier New", monospace;
  --font-serif: "IBM Plex Mono", "Courier New", monospace;
  --font-mono: "IBM Plex Mono", "Courier New", monospace;
  --phosphor: oklch(0.7 0.22 25);
  --phosphor-dim: oklch(0.4 0.15 25);
  --phosphor-bright: oklch(0.8 0.28 25);
  --phosphor-glow: oklch(0.6 0.18 25 / 0.5);
  --background: oklch(0.7 0.2 25);
  --foreground: oklch(0.15 0.08 25);
  --card: oklch(0.65 0.18 25);
  --card-foreground: oklch(0.1 0.06 25);
  --popover: oklch(0.65 0.18 25);
  --popover-foreground: oklch(0.1 0.06 25);
  --primary: oklch(0.15 0.08 25);
  --primary-foreground: oklch(0.7 0.22 25);
  --secondary: oklch(0.55 0.16 25);
  --secondary-foreground: oklch(0.1 0.06 25);
  --muted: oklch(0.6 0.14 25);
  --muted-foreground: oklch(0.3 0.1 25);
  --accent: oklch(0.5 0.14 25);
  --accent-foreground: oklch(0.1 0.06 25);
  --destructive: oklch(0.5 0.2 25);
  --border: oklch(0.2 0.1 25);
  --input: oklch(0.2 0.1 25);
  --ring: oklch(0.3 0.12 25);
  --chart-1: oklch(0.15 0.08 25);
  --chart-2: oklch(0.25 0.1 25);
  --chart-3: oklch(0.35 0.12 25);
  --chart-4: oklch(0.45 0.14 25);
  --chart-5: oklch(0.55 0.16 25);
  --sidebar: oklch(0.65 0.18 25);
  --sidebar-foreground: oklch(0.1 0.06 25);
  --sidebar-primary: oklch(0.15 0.08 25);
  --sidebar-primary-foreground: oklch(0.7 0.22 25);
  --sidebar-accent: oklch(0.55 0.16 25);
  --sidebar-accent-foreground: oklch(0.1 0.06 25);
  --sidebar-border: oklch(0.2 0.1 25);
  --sidebar-ring: oklch(0.3 0.12 25);
}

.dark {
  --background: oklch(0.05 0 0);
  --foreground: oklch(0.7 0.22 25);
  --card: oklch(0.08 0.02 25);
  --card-foreground: oklch(0.7 0.22 25);
  --popover: oklch(0.08 0.02 25);
  --popover-foreground: oklch(0.7 0.22 25);
  --primary: oklch(0.7 0.22 25);
  --primary-foreground: oklch(0.05 0 0);
  --secondary: oklch(0.15 0.08 25);
  --secondary-foreground: oklch(0.6 0.18 25);
  --muted: oklch(0.12 0.04 25);
  --muted-foreground: oklch(0.5 0.14 25);
  --accent: oklch(0.2 0.1 25);
  --accent-foreground: oklch(0.7 0.22 25);
  --destructive: oklch(0.6 0.25 25);
  --border: oklch(0.7 0.22 25);
  --input: oklch(0.7 0.22 25);
  --ring: oklch(0.6 0.18 25);
  --chart-1: oklch(0.8 0.28 25);
  --chart-2: oklch(0.7 0.22 25);
  --chart-3: oklch(0.6 0.18 25);
  --chart-4: oklch(0.5 0.14 25);
  --chart-5: oklch(0.4 0.1 25);
  --sidebar: oklch(0.08 0.02 25);
  --sidebar-foreground: oklch(0.7 0.22 25);
  --sidebar-primary: oklch(0.7 0.22 25);
  --sidebar-primary-foreground: oklch(0.05 0 0);
  --sidebar-accent: oklch(0.2 0.1 25);
  --sidebar-accent-foreground: oklch(0.7 0.22 25);
  --sidebar-border: oklch(0.7 0.22 25);
  --sidebar-ring: oklch(0.6 0.18 25);
}`,
  },
  {
    name: Theme.White,
    color: `:root {
  --radius: 0rem;
  --font-sans: "IBM Plex Mono", "Courier New", monospace;
  --font-serif: "IBM Plex Mono", "Courier New", monospace;
  --font-mono: "IBM Plex Mono", "Courier New", monospace;
  --phosphor: oklch(0.95 0 0);
  --phosphor-dim: oklch(0.6 0 0);
  --phosphor-bright: oklch(1 0 0);
  --phosphor-glow: oklch(0.85 0 0 / 0.5);
  --background: oklch(0.95 0 0);
  --foreground: oklch(0.15 0 0);
  --card: oklch(0.92 0 0);
  --card-foreground: oklch(0.1 0 0);
  --popover: oklch(0.92 0 0);
  --popover-foreground: oklch(0.1 0 0);
  --primary: oklch(0.15 0 0);
  --primary-foreground: oklch(0.95 0 0);
  --secondary: oklch(0.9 0 0);
  --secondary-foreground: oklch(0.1 0 0);
  --muted: oklch(0.9 0 0);
  --muted-foreground: oklch(0.3 0 0);
  --accent: oklch(0.8 0 0);
  --accent-foreground: oklch(0.1 0 0);
  --destructive: oklch(0.5 0.2 25);
  --border: oklch(0.25 0 0);
  --input: oklch(0.25 0 0);
  --ring: oklch(0.3 0 0);
  --chart-1: oklch(0.15 0 0);
  --chart-2: oklch(0.3 0 0);
  --chart-3: oklch(0.5 0 0);
  --chart-4: oklch(0.7 0 0);
  --chart-5: oklch(0.4 0 0);
  --sidebar: oklch(0.92 0 0);
  --sidebar-foreground: oklch(0.1 0 0);
  --sidebar-primary: oklch(0.15 0 0);
  --sidebar-primary-foreground: oklch(0.95 0 0);
  --sidebar-accent: oklch(0.9 0 0);
  --sidebar-accent-foreground: oklch(0.1 0 0);
  --sidebar-border: oklch(0.25 0 0);
  --sidebar-ring: oklch(0.3 0 0);
}

.dark {
  --background: oklch(0.05 0 0);
  --foreground: oklch(0.95 0 0);
  --card: oklch(0.08 0 0);
  --card-foreground: oklch(0.95 0 0);
  --popover: oklch(0.08 0 0);
  --popover-foreground: oklch(0.95 0 0);
  --primary: oklch(0.95 0 0);
  --primary-foreground: oklch(0.05 0 0);
  --secondary: oklch(0.15 0 0);
  --secondary-foreground: oklch(0.9 0 0);
  --muted: oklch(0.12 0 0);
  --muted-foreground: oklch(0.8 0 0);
  --accent: oklch(0.2 0 0);
  --accent-foreground: oklch(0.95 0 0);
  --destructive: oklch(0.6 0.25 25);
  --border: oklch(0.95 0 0);
  --input: oklch(0.95 0 0);
  --ring: oklch(0.85 0 0);
  --chart-1: oklch(1 0 0);
  --chart-2: oklch(0.9 0 0);
  --chart-3: oklch(0.7 0 0);
  --chart-4: oklch(0.5 0 0);
  --chart-5: oklch(0.8 0 0);
  --sidebar: oklch(0.08 0 0);
  --sidebar-foreground: oklch(0.95 0 0);
  --sidebar-primary: oklch(0.95 0 0);
  --sidebar-primary-foreground: oklch(0.05 0 0);
  --sidebar-accent: oklch(0.15 0 0);
  --sidebar-accent-foreground: oklch(0.95 0 0);
  --sidebar-border: oklch(0.95 0 0);
  --sidebar-ring: oklch(0.85 0 0);
}`,
  },
  {
    name: Theme.Orange,
    color: `:root {
  --radius: 0rem;
  --font-sans: "IBM Plex Mono", "Courier New", monospace;
  --font-serif: "IBM Plex Mono", "Courier New", monospace;
  --font-mono: "IBM Plex Mono", "Courier New", monospace;
  --phosphor: oklch(0.8 0.2 55);
  --phosphor-dim: oklch(0.45 0.14 55);
  --phosphor-bright: oklch(0.9 0.25 55);
  --phosphor-glow: oklch(0.7 0.17 55 / 0.5);
  --background: oklch(0.85 0.18 55);
  --foreground: oklch(0.15 0.06 55);
  --card: oklch(0.8 0.16 55);
  --card-foreground: oklch(0.1 0.05 55);
  --popover: oklch(0.8 0.16 55);
  --popover-foreground: oklch(0.1 0.05 55);
  --primary: oklch(0.15 0.06 55);
  --primary-foreground: oklch(0.85 0.18 55);
  --secondary: oklch(0.7 0.14 55);
  --secondary-foreground: oklch(0.1 0.05 55);
  --muted: oklch(0.75 0.14 55);
  --muted-foreground: oklch(0.3 0.1 55);
  --accent: oklch(0.6 0.12 55);
  --accent-foreground: oklch(0.1 0.05 55);
  --destructive: oklch(0.5 0.2 25);
  --border: oklch(0.2 0.08 55);
  --input: oklch(0.2 0.08 55);
  --ring: oklch(0.3 0.1 55);
  --chart-1: oklch(0.15 0.06 55);
  --chart-2: oklch(0.25 0.08 55);
  --chart-3: oklch(0.35 0.1 55);
  --chart-4: oklch(0.45 0.12 55);
  --chart-5: oklch(0.55 0.14 55);
  --sidebar: oklch(0.8 0.16 55);
  --sidebar-foreground: oklch(0.1 0.05 55);
  --sidebar-primary: oklch(0.15 0.06 55);
  --sidebar-primary-foreground: oklch(0.85 0.18 55);
  --sidebar-accent: oklch(0.7 0.14 55);
  --sidebar-accent-foreground: oklch(0.1 0.05 55);
  --sidebar-border: oklch(0.2 0.08 55);
  --sidebar-ring: oklch(0.3 0.1 55);
}

.dark {
  --background: oklch(0.05 0 0);
  --foreground: oklch(0.8 0.2 55);
  --card: oklch(0.08 0.01 55);
  --card-foreground: oklch(0.8 0.2 55);
  --popover: oklch(0.08 0.01 55);
  --popover-foreground: oklch(0.8 0.2 55);
  --primary: oklch(0.8 0.2 55);
  --primary-foreground: oklch(0.05 0 0);
  --secondary: oklch(0.15 0.06 55);
  --secondary-foreground: oklch(0.7 0.16 55);
  --muted: oklch(0.12 0.03 55);
  --muted-foreground: oklch(0.5 0.14 55);
  --accent: oklch(0.2 0.08 55);
  --accent-foreground: oklch(0.8 0.2 55);
  --destructive: oklch(0.6 0.25 25);
  --border: oklch(0.8 0.2 55);
  --input: oklch(0.8 0.2 55);
  --ring: oklch(0.7 0.16 55);
  --chart-1: oklch(0.9 0.25 55);
  --chart-2: oklch(0.8 0.2 55);
  --chart-3: oklch(0.7 0.16 55);
  --chart-4: oklch(0.55 0.14 55);
  --chart-5: oklch(0.4 0.1 55);
  --sidebar: oklch(0.08 0.01 55);
  --sidebar-foreground: oklch(0.8 0.2 55);
  --sidebar-primary: oklch(0.8 0.2 55);
  --sidebar-primary-foreground: oklch(0.05 0 0);
  --sidebar-accent: oklch(0.2 0.08 55);
  --sidebar-accent-foreground: oklch(0.8 0.2 55);
  --sidebar-border: oklch(0.8 0.2 55);
  --sidebar-ring: oklch(0.7 0.16 55);
}`,
  },
];

export const getThemeCode = (theme: Theme) =>
  themes.find((t) => t.name === theme)?.color;
