import { CommandExample } from "@/components/examples/command";
import { DatePicker } from "@/components/examples/date-picker";
import { DrawerExample } from "@/components/examples/drawer";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/cypher/alert";
import { Badge } from "@/components/ui/cypher/badge";
import AudioSettings from "@/components/ui/cypher/blocks/audio-settings";
import ChapterIntro from "@/components/ui/cypher/blocks/chapter-intro";
import Dialogue from "@/components/ui/cypher/blocks/dialogue";
import DifficultySelect from "@/components/ui/cypher/blocks/difficulty-select";
import GameOver from "@/components/ui/cypher/blocks/game-over";
import GameProgress from "@/components/ui/cypher/blocks/game-progress";
import MainMenu from "@/components/ui/cypher/blocks/main-menu";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/cypher/select";
import { Spinner } from "@/components/ui/cypher/spinner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/cypher/tabs";
import { Textarea } from "@/components/ui/cypher/textarea";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8">
      <div className="mb-6">
        <h2 className="cyphercn font-bold text-xl">{title}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}

export default function ComponentShowcase() {
  return (
    <div className="space-y-8">
      {/* Command Center Section */}
      <Section
        description="Terminal interface components for data input, command execution, and system alerts."
        title="COMMAND CENTER"
      >
        <Card>
          <CardContent className="flex flex-col gap-3 pt-6">
            <Alert>
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>
                Your game progress has been saved successfully.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Low health! Find a health potion quickly.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <CommandExample />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-3 pt-6">
            <Input placeholder="Enter your name" />
            <Textarea className="min-h-32" placeholder="Enter description..." />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                  <MenubarSeparator />
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>
      </Section>

      {/* Cyber Games Section */}
      <Section
        description="Game interface blocks for menus, dialogue, health bars, and narrative elements."
        title="CYBER GAMES"
      >
        <Card>
          <CardContent className="pt-6">
            <MainMenu />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <GameOver />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <DifficultySelect />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <ChapterIntro
              align="center"
              backgroundSrc="/images/forest-goblins.png"
              className="mx-auto w-full text-white"
              darken={0.5}
              height="md"
              subtitle="Defeat the goblins to pass through the forest."
              title="LEVEL 2: GOBLINS"
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <GameProgress />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 pt-6">
            <Dialogue
              avatarFallback="Orc"
              avatarSrc="/images/pixelized-8bitcnorc.jpg"
              description="I bring you a gift… it's called AXE TO THE FACE! SLASH!!"
              title="Orc"
            />

            <div className="flex justify-end">
              <Dialogue
                avatarFallback="Goblin"
                avatarSrc="/images/goblin.png"
                description="`Screeches like a dying flute`"
                player={false}
                title="Goblin"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 pt-6">
            <EnemyHealthDisplay
              currentHealth={850}
              enemyName="Fire Dragon"
              level={25}
              maxHealth={1000}
            />
            <ManaBar value={75} variant="default" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <AudioSettings />
          </CardContent>
        </Card>
      </Section>

      {/* Base Components Section */}
      <Section
        description="Core UI primitives for building terminal interfaces."
        title="BASE COMPONENTS"
      >
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="terminal">Terminal</Button>
            <Button variant="destructive">Destructive</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Drawer</CardTitle>
          </CardHeader>
          <CardContent>
            <DrawerExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dropdown Menu</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Input</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Input placeholder="Enter username..." />
            <Input placeholder="Enter password..." type="password" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Select</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Date Picker</CardTitle>
          </CardHeader>
          <CardContent>
            <DatePicker />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Checkbox</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox defaultChecked id="sound" />
              <Label htmlFor="sound">Sound Effects</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox defaultChecked id="music" />
              <Label htmlFor="music">Music</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="vibration" />
              <Label htmlFor="vibration">Vibration</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spinner</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center gap-2">
              <Spinner className="size-6" variant="diamond" />
              <span className="text-muted-foreground text-xs">Diamond</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="size-6" variant="classic" />
              <span className="text-muted-foreground text-xs">Classic</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Badge</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>Level 42</Badge>
            <Badge variant="outline">Warrior</Badge>
            <Badge variant="destructive">Critical</Badge>
            <Badge variant="bracket">Achievement</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs className="w-full" defaultValue="items">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="items">Items</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
              </TabsList>
              <TabsContent value="items">
                <p className="text-muted-foreground text-sm">
                  Your inventory items appear here.
                </p>
              </TabsContent>
              <TabsContent value="skills">
                <p className="text-muted-foreground text-sm">
                  Your learned skills appear here.
                </p>
              </TabsContent>
              <TabsContent value="stats">
                <p className="text-muted-foreground text-sm">
                  Your character stats appear here.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </Section>

      {/* Dashboard Section */}
      <section className="py-8">
        <div className="mb-6">
          <h2 className="cyphercn font-bold text-xl">DASHBOARD</h2>
          <p className="text-muted-foreground text-sm">
            Data visualization and monitoring components.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">Active Now</CardTitle>
              <svg
                className="size-6"
                fill="currentColor"
                height="50"
                stroke="currentColor"
                strokeWidth="0.25"
                viewBox="0 0 256 256"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Activity</title>
                <rect height="14" rx="1" width="14" x="160" y="192" />
                <rect height="14" rx="1" width="14" x="164" y="176" />
                <rect height="14" rx="1" width="14" x="168" y="160" />
                <rect height="14" rx="1" width="14" x="172" y="144" />
                <rect height="14" rx="1" width="14" x="176" y="128" />
                <rect height="14" rx="1" width="14" x="192" y="128" />
                <rect height="14" rx="1" width="14" x="64" y="128" />
                <rect height="14" rx="1" width="14" x="152" y="208" />
                <rect height="14" rx="1" width="14" x="84" y="112" />
                <rect height="14" rx="1" width="14" x="88" y="96" />
                <rect height="14" rx="1" width="14" x="92" y="80" />
                <rect height="14" rx="1" width="14" x="96" y="64" />
                <rect height="14" rx="1" width="14" x="104" y="48" />
                <rect height="14" rx="1" width="14" x="80" y="128" />
                <rect height="14" rx="1" width="14" x="120" y="96" />
                <rect height="14" rx="1" width="14" x="116" y="80" />
                <rect height="14" rx="1" width="14" x="112" y="64" />
                <rect height="14" rx="1" width="14" x="136" y="160" />
                <rect height="14" rx="1" width="14" x="140" y="176" />
                <rect height="14" rx="1" width="14" x="124" y="112" />
                <rect height="14" rx="1" width="14" x="128" y="128" />
                <rect height="14" rx="1" width="14" x="132" y="144" />
                <rect height="14" rx="1" width="14" x="144" y="192" />
              </svg>
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
              <svg
                className="size-6"
                fill="currentColor"
                height="50"
                stroke="currentColor"
                strokeWidth="0.25"
                viewBox="0 0 256 256"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>User</title>
                <rect height="14" rx="1" width="14" x="64" y="144" />
                <rect height="14" rx="1" width="14" x="96" y="80" />
                <rect height="14" rx="1" width="14" x="144" y="80" />
                <rect height="14" rx="1" width="14" x="192" y="192" />
                <rect height="14" rx="1" width="14" x="176" y="192" />
                <rect height="14" rx="1" width="14" x="64" y="192" />
                <rect height="14" rx="1" width="14" x="48" y="176" />
                <rect height="14" rx="1" width="14" x="48" y="192" />
                <rect height="14" rx="1" width="14" x="192" y="160" />
                <rect height="14" rx="1" width="14" x="176" y="144" />
                <rect height="14" rx="1" width="14" x="192" y="176" />
                <rect height="14" rx="1" width="14" x="48" y="160" />
                <rect height="14" rx="1" width="14" x="96" y="64" />
                <rect height="14" rx="1" width="14" x="112" y="48" />
                <rect height="14" rx="1" width="14" x="128" y="48" />
                <rect height="14" rx="1" width="14" x="144" y="64" />
                <rect height="14" rx="1" width="14" x="144" y="64" />
                <rect height="14" rx="1" width="14" x="112" y="96" />
                <rect height="14" rx="1" width="14" x="128" y="96" />
                <rect height="14" rx="1" width="14" x="80" y="144" />
                <rect height="14" rx="1" width="14" x="96" y="144" />
                <rect height="14" rx="1" width="14" x="112" y="144" />
                <rect height="14" rx="1" width="14" x="128" y="144" />
                <rect height="14" rx="1" width="14" x="144" y="144" />
                <rect height="14" rx="1" width="14" x="160" y="144" />
                <rect height="14" rx="1" width="14" x="80" y="192" />
                <rect height="14" rx="1" width="14" x="96" y="192" />
                <rect height="14" rx="1" width="14" x="112" y="192" />
                <rect height="14" rx="1" width="14" x="128" y="192" />
                <rect height="14" rx="1" width="14" x="144" y="192" />
                <rect height="14" rx="1" width="14" x="160" y="192" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">+2350</div>
              <p className="text-muted-foreground text-xs">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">Warriors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">+100</div>
              <p className="text-muted-foreground text-xs">Active in combat</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">Wizards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">+1000</div>
              <p className="text-muted-foreground text-xs">Casting spells</p>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2">
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="product-name">Name</Label>
                <Input id="product-name" placeholder="Enter product name..." />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="product-description">Description</Label>
                <Textarea
                  className="min-h-24"
                  id="product-description"
                  placeholder="Enter product description..."
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
