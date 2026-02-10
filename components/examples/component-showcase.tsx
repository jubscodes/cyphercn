import { CommandExample } from "@/components/examples/command";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/cypher/alert";
import AudioSettings from "@/components/ui/cypher/blocks/audio-settings";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/cypher/card";
import { Input } from "@/components/ui/cypher/input";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/cypher/menubar";
import { Textarea } from "@/components/ui/cypher/textarea";

import ChapterIntro from "../ui/cypher/blocks/chapter-intro";
import Dialogue from "../ui/cypher/blocks/dialogue";
import DifficultySelect from "../ui/cypher/blocks/difficulty-select";
import GameOver from "../ui/cypher/blocks/game-over";
import GameProgress from "../ui/cypher/blocks/game-progress";
import MainMenu from "../ui/cypher/blocks/main-menu";
import EnemyHealthDisplay from "../ui/cypher/enemy-health-display";
import ManaBar from "../ui/cypher/mana-bar";

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
            <CardTitle className="font-medium text-sm">Subscriptions</CardTitle>
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
    </div>
  );
}
