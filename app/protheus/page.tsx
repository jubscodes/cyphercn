"use client";

import {
  Alert,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  InputBordered,
  Line,
  LoadingDots,
  LogEntry,
  Panel,
  PanelWithHeader,
  Progress,
  ProgressBar,
  Separator,
  Spinner,
  Status,
} from "@/components/ui/protheus";

export default function ProtheusDemo() {
  return (
    <div className="theme-protheus dark min-h-screen bg-background p-8 text-foreground">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="protheus phosphor-glow mb-2 text-2xl">
          PROTHEUS COMMAND CENTER
        </h1>
        <p className="protheus-normal text-muted-foreground text-sm">
          MS-DOS Terminal Aesthetic • Phosphor Green • Thin Borders
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8">
        {/* Buttons Section */}
        <PanelWithHeader glow title="BUTTON COMPONENTS" variant="double">
          <div className="flex flex-wrap items-center gap-4">
            <Button>DEFAULT</Button>
            <Button variant="outline">OUTLINE</Button>
            <Button variant="ghost">GHOST</Button>
            <Button variant="terminal">TERMINAL</Button>
            <Button variant="destructive">ABORT</Button>
            <Button glow>WITH GLOW</Button>
          </div>
          <div className="mt-4 flex gap-4">
            <Button size="sm">SMALL</Button>
            <Button size="default">DEFAULT</Button>
            <Button size="lg">LARGE</Button>
          </div>
        </PanelWithHeader>

        {/* Input Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <Panel title="COMMAND INPUT" variant="single">
            <div className="space-y-4">
              <Input placeholder="ENTER COMMAND" />
              <InputBordered placeholder="BORDERED INPUT" />
            </div>
          </Panel>

          <Panel title="SYSTEM STATUS" variant="single">
            <div className="space-y-2">
              <Status label="NETWORK" status="online" />
              <Status label="CPU" status="processing" />
              <Status label="MEMORY" status="warning" />
              <Status label="BACKUP" status="offline" />
            </div>
          </Panel>
        </div>

        {/* Progress Section */}
        <PanelWithHeader title="PROGRESS INDICATORS" variant="double">
          <div className="space-y-4">
            <div>
              <span className="mb-1 block text-xs">DEFAULT:</span>
              <Progress value={75} variant="default" />
            </div>
            <div>
              <span className="mb-1 block text-xs">ASCII:</span>
              <Progress value={45} variant="ascii" />
            </div>
            <div>
              <span className="mb-1 block text-xs">BLOCKS:</span>
              <Progress value={60} variant="blocks" />
            </div>
            <div>
              <span className="mb-1 block text-xs">DOTS:</span>
              <Progress value={30} variant="dots" />
            </div>

            <Separator variant="dashed" />

            <ProgressBar glow label="DOWNLOAD PROGRESS" value={65} />

            <div className="flex items-center gap-4">
              <span className="text-xs">LOADING:</span>
              <Spinner glow />
              <LoadingDots />
            </div>
          </div>
        </PanelWithHeader>

        {/* Cards Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card glow title="SYSTEM INFO">
            <CardHeader>
              <CardTitle>DATA MODULE</CardTitle>
              <CardDescription>Real-time system monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>CPU TEMP:</span>
                  <span>42°C</span>
                </div>
                <div className="flex justify-between">
                  <span>MEMORY:</span>
                  <span>8.2GB / 16GB</span>
                </div>
                <div className="flex justify-between">
                  <span>UPTIME:</span>
                  <span>14:32:07</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline">
                REFRESH
              </Button>
            </CardFooter>
          </Card>

          <Card scanlines>
            <CardHeader>
              <CardTitle>TRANSMISSION LOG</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <LogEntry level="info" timestamp="14:32:01">
                  System initialized
                </LogEntry>
                <LogEntry level="debug" timestamp="14:32:02">
                  Loading modules...
                </LogEntry>
                <LogEntry level="warn" timestamp="14:32:03">
                  High memory usage detected
                </LogEntry>
                <LogEntry level="error" timestamp="14:32:04">
                  Connection timeout
                </LogEntry>
                <LogEntry level="info" timestamp="14:32:05">
                  Reconnecting...
                </LogEntry>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts Section */}
        <div className="grid gap-4">
          <Alert title="SYSTEM NOTICE" variant="default">
            Standard informational message for the operator.
          </Alert>
          <Alert glow variant="success">
            Connection established. All systems operational.
          </Alert>
          <Alert title="CAUTION" variant="warning">
            Memory usage exceeding recommended threshold.
          </Alert>
          <Alert title="CRITICAL" variant="error">
            Security breach detected in sector 7.
          </Alert>
        </div>

        {/* Badges Section */}
        <Panel title="BADGE VARIANTS" variant="ascii">
          <div className="flex flex-wrap items-center gap-4">
            <Badge>DEFAULT</Badge>
            <Badge variant="outline">OUTLINE</Badge>
            <Badge variant="filled">FILLED</Badge>
            <Badge variant="bracket">BRACKET</Badge>
            <Badge variant="tag">TAG</Badge>
            <Badge status="active" variant="dot">
              ACTIVE
            </Badge>
            <Badge status="inactive" variant="dot">
              INACTIVE
            </Badge>
            <Badge status="warning" variant="dot">
              WARNING
            </Badge>
          </div>
        </Panel>

        {/* Separators */}
        <Panel title="SEPARATORS" variant="single">
          <div className="space-y-4">
            <Separator variant="line" />
            <Separator variant="double" />
            <Separator variant="dashed" />
            <Separator label="SECTION" variant="ascii" />
            <Separator variant="dots" />
            <Line glow />
          </div>
        </Panel>

        {/* Panel Variants */}
        <div className="grid gap-4 md:grid-cols-3">
          <Panel title="SINGLE BORDER" variant="single">
            Standard panel with single-line border characters.
          </Panel>
          <Panel glow title="DOUBLE BORDER" variant="double">
            Enhanced panel with double-line border and glow effect.
          </Panel>
          <Panel title="ASCII BORDER" variant="ascii">
            Fallback ASCII characters for maximum compatibility.
          </Panel>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-muted-foreground text-xs">
          <Separator label="EOF" variant="double" />
          <p className="protheus mt-4">
            PROTHEUS UI v0.1.0 • PHOSPHOR GREEN THEME • 2026
          </p>
        </div>
      </div>
    </div>
  );
}
