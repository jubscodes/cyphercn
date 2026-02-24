import { CommandExample } from "@/components/examples/command";
import { DatePicker } from "@/components/examples/date-picker";
import { DrawerExample } from "@/components/examples/drawer";
import { Alert, LogEntry, Status } from "@/components/ui/cypher/alert";
import { Badge } from "@/components/ui/cypher/badge";
import AudioSettings from "@/components/ui/cypher/blocks/audio-settings";
import ChapterIntro from "@/components/ui/cypher/blocks/chapter-intro";
import Dialogue from "@/components/ui/cypher/blocks/dialogue";
import DifficultySelect from "@/components/ui/cypher/blocks/difficulty-select";
import GameOver from "@/components/ui/cypher/blocks/game-over";
import GameProgress from "@/components/ui/cypher/blocks/game-progress";
import Leaderboard from "@/components/ui/cypher/blocks/leaderboard";
import MainMenu from "@/components/ui/cypher/blocks/main-menu";
import {
  SystemStatus,
  TerminalLog,
} from "@/components/ui/cypher/blocks/terminal-log";
import { Button } from "@/components/ui/cypher/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/cypher/card";
import { Checkbox } from "@/components/ui/cypher/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/cypher/dropdown-menu";
import EnemyHealthDisplay from "@/components/ui/cypher/enemy-health-display";
import HealthBar from "@/components/ui/cypher/health-bar";
import { Input } from "@/components/ui/cypher/input";
import { Label } from "@/components/ui/cypher/label";
import ManaBar from "@/components/ui/cypher/mana-bar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/cypher/menubar";
import { Progress, ProgressBar } from "@/components/ui/cypher/progress";
import { Section } from "@/components/ui/cypher/section";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/cypher/select";
import { Line, Separator } from "@/components/ui/cypher/separator";
import { Spinner } from "@/components/ui/cypher/spinner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/cypher/tabs";
import { Textarea } from "@/components/ui/cypher/textarea";

export default function ComponentShowcase() {
  return (
    <div className="min-w-0 space-y-16">
      {/* ═══════════════════════════════════════════════════════════════════════
          SYSTEM MONITOR - Terminal/Dashboard simulation
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section title="System Monitor">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Status Panel */}
          <SystemStatus
            border="double"
            glow
            items={[
              { id: "1", label: "NETWORK", status: "online" },
              { id: "2", label: "CPU", status: "processing" },
              { id: "3", label: "MEMORY", status: "warning" },
              { id: "4", label: "STORAGE", status: "online" },
              { id: "5", label: "BACKUP", status: "offline" },
            ]}
            title="SYSTEM STATUS"
          />

          {/* Metrics */}
          <Card glow title="PERFORMANCE" variant="terminalDouble">
            <div className="space-y-3">
              <div>
                <span className="cyphercn mb-1 block text-xs">CPU LOAD</span>
                <Progress glow value={67} />
              </div>
              <div>
                <span className="cyphercn mb-1 block text-xs">MEMORY</span>
                <Progress value={84} variant="blocks" />
              </div>
              <div>
                <span className="cyphercn mb-1 block text-xs">DISK I/O</span>
                <Progress value={23} variant="dots" />
              </div>
            </div>
          </Card>

          {/* System Log */}
          <div className="sm:col-span-2">
            <TerminalLog
              border="single"
              logs={[
                {
                  id: "1",
                  level: "info",
                  message: "System boot sequence initiated",
                  timestamp: "09:00:01",
                },
                {
                  id: "2",
                  level: "info",
                  message: "Loading kernel modules...",
                  timestamp: "09:00:02",
                },
                {
                  id: "3",
                  level: "debug",
                  message: "Network interface eth0 configured",
                  timestamp: "09:00:03",
                },
                {
                  id: "4",
                  level: "info",
                  message: "Starting application services",
                  timestamp: "09:00:05",
                },
                {
                  id: "5",
                  level: "warn",
                  message: "High memory usage detected (84%)",
                  timestamp: "09:15:22",
                },
                {
                  id: "6",
                  level: "error",
                  message: "Connection to backup server failed",
                  timestamp: "09:20:45",
                },
                {
                  id: "7",
                  level: "info",
                  message: "Retry scheduled in 300 seconds",
                  timestamp: "09:20:46",
                },
              ]}
              maxHeight="200px"
              title="SYSTEM LOG"
            />
          </div>

          {/* Alerts */}
          <div className="space-y-3 sm:col-span-2">
            <Alert glow variant="success">
              All primary systems operational.
            </Alert>
            <Alert title="NOTICE" variant="warning">
              Backup service degraded. Manual intervention recommended.
            </Alert>
            <Alert title="ALERT" variant="error">
              Security scan detected 3 anomalies. Review required.
            </Alert>
          </div>

          {/* Progress Indicators */}
          <div className="space-y-3 sm:col-span-2">
            <Card title="ACTIVE PROCESSES" variant="terminalAscii">
              <div className="space-y-2">
                <ProgressBar label="Data Sync" value={78} />
                <ProgressBar label="Backup Job" value={34} />
                <ProgressBar glow label="Security Scan" value={92} />
              </div>
            </Card>
          </div>
        </div>

        {/* Separators Showcase */}
        <div className="space-y-3 pt-4">
          <Separator variant="line" />
          <Separator variant="double" />
          <Separator variant="dashed" />
          <Separator label="END OF TRANSMISSION" variant="ascii" />
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          COMMAND CENTER - Forms and inputs
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section title="Command Center">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Login Form */}
          <Card title="AUTHENTICATE" variant="terminalDouble">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter username..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter password..."
                  type="password"
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button className="w-full" variant="terminal">
                LOGIN
              </Button>
            </div>
          </Card>

          {/* Command Input */}
          <Card title="TERMINAL" variant="terminal">
            <div className="space-y-4">
              <CommandExample />
              <Separator variant="dashed" />
              <Textarea className="min-h-24" placeholder="> Enter command..." />
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  Clear
                </Button>
                <Button size="sm" variant="terminal">
                  Execute
                </Button>
              </div>
            </div>
          </Card>

          {/* Settings */}
          <Card title="PREFERENCES" variant="terminal">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Character Class</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="warrior">Warrior</SelectItem>
                    <SelectItem value="mage">Mage</SelectItem>
                    <SelectItem value="rogue">Rogue</SelectItem>
                    <SelectItem value="paladin">Paladin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Difficulty</Label>
                <Tabs defaultValue="normal">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="easy">Easy</TabsTrigger>
                    <TabsTrigger value="normal">Normal</TabsTrigger>
                    <TabsTrigger value="hard">Hard</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="space-y-2">
                <Label>Audio</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox defaultChecked id="sfx" />
                    <Label htmlFor="sfx">Sound Effects</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox defaultChecked id="music" />
                    <Label htmlFor="music">Music</Label>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          COMPONENT VARIANTS - All variants in one place
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section title="Component Variants">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card Variants */}
          <div className="space-y-4">
            <h3 className="cyphercn text-foreground/50 text-xs uppercase tracking-wider">
              Card Border Styles
            </h3>
            <Card title="TERMINAL" variant="terminal">
              Single-line box-drawing borders (┌──┐)
            </Card>
            <Card glow title="TERMINAL DOUBLE" variant="terminalDouble">
              Double-line borders with glow (╔══╗)
            </Card>
            <Card title="TERMINAL ASCII" variant="terminalAscii">
              ASCII fallback for compatibility (+--+)
            </Card>
            <Card title="DEFAULT">Standard CSS border styling</Card>
          </div>

          {/* Progress Variants */}
          <div className="space-y-4">
            <h3 className="cyphercn text-foreground/50 text-xs uppercase tracking-wider">
              Progress Indicators
            </h3>
            <div className="space-y-3">
              <div>
                <span className="cyphercn mb-1 block text-muted-foreground text-xs">
                  DEFAULT (█░)
                </span>
                <Progress value={75} />
              </div>
              <div>
                <span className="cyphercn mb-1 block text-muted-foreground text-xs">
                  ASCII (#-)
                </span>
                <Progress value={60} variant="ascii" />
              </div>
              <div>
                <span className="cyphercn mb-1 block text-muted-foreground text-xs">
                  BLOCKS (■□)
                </span>
                <Progress value={45} variant="blocks" />
              </div>
              <div>
                <span className="cyphercn mb-1 block text-muted-foreground text-xs">
                  DOTS (●○)
                </span>
                <Progress value={30} variant="dots" />
              </div>
              <Line />
              <ProgressBar label="CSS BAR" value={80} />
            </div>
          </div>

          {/* Status & Loading */}
          <div className="space-y-4">
            <h3 className="cyphercn text-foreground/50 text-xs uppercase tracking-wider">
              Status Indicators
            </h3>
            <div className="space-y-2">
              <Status label="ONLINE" status="online" />
              <Status label="OFFLINE" status="offline" />
              <Status label="WARNING" status="warning" />
              <Status label="PROCESSING" status="processing" />
            </div>
            <Line />
            <h3 className="cyphercn text-foreground/50 text-xs uppercase tracking-wider">
              Loading States
            </h3>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-1">
                <Spinner className="size-6" variant="diamond" />
                <span className="text-muted-foreground text-xs">Diamond</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Spinner className="size-6" variant="classic" />
                <span className="text-muted-foreground text-xs">Classic</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="cyphercn phosphor-glow text-lg">◐◓◑◒</span>
                <span className="text-muted-foreground text-xs">ASCII</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="cyphercn text-foreground/50 text-xs uppercase tracking-wider">
              Button Variants
            </h3>
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="terminal">Terminal</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Menus */}
          <div className="space-y-4">
            <h3 className="cyphercn text-foreground/50 text-xs uppercase tracking-wider">
              Menus & Navigation
            </h3>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>Open</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Save</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Actions</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>MENU</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DrawerExample />
            </div>
          </div>

          {/* Form Controls */}
          <div className="space-y-4">
            <h3 className="cyphercn text-foreground/50 text-xs uppercase tracking-wider">
              Form Controls
            </h3>
            <Input placeholder="Text input..." />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select option..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>
            <DatePicker />
          </div>
        </div>

        {/* Log Entries */}
        <div className="mt-6 space-y-1">
          <h3 className="cyphercn mb-3 text-foreground/50 text-xs uppercase tracking-wider">
            Log Entry Levels
          </h3>
          <LogEntry level="info" timestamp="14:32:01">
            Informational message for general updates
          </LogEntry>
          <LogEntry level="debug" timestamp="14:32:02">
            Debug output for development
          </LogEntry>
          <LogEntry level="warn" timestamp="14:32:03">
            Warning about potential issues
          </LogEntry>
          <LogEntry level="error" timestamp="14:32:04">
            Error message for failures
          </LogEntry>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          DASHBOARD - Analytics simulation
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section title="Dashboard">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">Active Now</CardTitle>
              <span className="cyphercn text-lg">●</span>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">+573</div>
              <p className="text-muted-foreground text-xs">
                +201 since last hour
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Subscriptions
              </CardTitle>
              <span className="cyphercn text-lg">◆</span>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">+2,350</div>
              <p className="text-muted-foreground text-xs">
                +180% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">Warriors</CardTitle>
              <span className="cyphercn text-lg">⚔</span>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">+100</div>
              <p className="text-muted-foreground text-xs">Active in combat</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">Wizards</CardTitle>
              <span className="cyphercn text-lg">✦</span>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">+1,000</div>
              <p className="text-muted-foreground text-xs">Casting spells</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Quick Entry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="item-name">Item Name</Label>
                <Input id="item-name" placeholder="Enter item name..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="item-desc">Description</Label>
                <Textarea
                  className="min-h-24"
                  id="item-desc"
                  placeholder="Enter description..."
                />
              </div>
              <Button className="w-full" variant="terminal">
                Submit
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity Feed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <LogEntry level="info" timestamp="Now">
                New player joined the server
              </LogEntry>
              <LogEntry level="info" timestamp="2m ago">
                Quest completed: Dragon Slayer
              </LogEntry>
              <LogEntry level="warn" timestamp="5m ago">
                Server load reaching capacity
              </LogEntry>
              <LogEntry level="info" timestamp="10m ago">
                Maintenance scheduled for 02:00
              </LogEntry>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          GAME HUD - Simulated game interface
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section title="Game HUD">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Left Column - Player Stats */}
          <div className="space-y-4">
            <Card title="PLAYER STATUS" variant="terminal">
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="cyphercn">HP</span>
                    <span className="text-muted-foreground">850/1000</span>
                  </div>
                  <HealthBar value={85} />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="cyphercn">MP</span>
                    <span className="text-muted-foreground">45/100</span>
                  </div>
                  <ManaBar value={45} />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="cyphercn">XP</span>
                    <span className="text-muted-foreground">7,250/10,000</span>
                  </div>
                  <Progress value={72} variant="blocks" />
                </div>
              </div>
            </Card>

            <EnemyHealthDisplay
              currentHealth={350}
              enemyName="Shadow Knight"
              healthBarColor="bg-red-500"
              level={42}
              maxHealth={500}
            />

            <div className="flex flex-wrap gap-2">
              <Badge>Lv. 42</Badge>
              <Badge variant="outline">Warrior</Badge>
              <Badge variant="bracket">Guild Master</Badge>
            </div>
          </div>

          {/* Center Column - Game Content */}
          <div className="space-y-4">
            <ChapterIntro
              align="center"
              backgroundSrc="/images/forest-goblins.png"
              className="w-full text-white"
              darken={0.6}
              height="md"
              subtitle="The ancient evil awakens..."
              title="ACT III: DARKNESS"
            />

            <div className="space-y-3">
              <Dialogue
                avatarFallback="K"
                avatarSrc="/images/pixelized-8bitcnorc.jpg"
                description="The artifact lies beyond the Shadow Gate. Are you prepared?"
                title="Knight Commander"
              />
              <div className="flex justify-end">
                <Dialogue
                  avatarFallback="Y"
                  description="I was born ready."
                  player
                  title="You"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Game Systems */}
          <div className="space-y-4">
            <GameProgress />

            <Card title="QUICK ACTIONS" variant="terminal">
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="terminal">
                  Inventory
                </Button>
                <Button size="sm" variant="terminal">
                  Skills
                </Button>
                <Button size="sm" variant="terminal">
                  Map
                </Button>
                <Button size="sm" variant="outline">
                  Save
                </Button>
              </div>
            </Card>

            <AudioSettings />
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          GAME MENUS - Menu screens simulation
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section title="Game Menus">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MainMenu />
          <DifficultySelect />
          <GameOver />
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          LEADERBOARD - Competitive gaming
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section title="Leaderboard">
        <div className="mx-auto max-w-2xl">
          <Leaderboard
            currentPlayerId="player-5"
            players={[
              {
                id: "player-1",
                name: "ShadowBlade_X",
                score: 98_500,
                avatar: "/images/pixelized-8bitcnorc.jpg",
              },
              { id: "player-2", name: "CyberNinja42", score: 87_200 },
              { id: "player-3", name: "PixelMaster", score: 76_800 },
              { id: "player-4", name: "NeonKnight", score: 65_400 },
              { id: "player-5", name: "You", score: 54_200 },
              { id: "player-6", name: "GhostRunner", score: 43_100 },
              { id: "player-7", name: "ByteWarrior", score: 32_800 },
            ]}
            title="TOP PLAYERS"
          />
        </div>
      </Section>
    </div>
  );
}
