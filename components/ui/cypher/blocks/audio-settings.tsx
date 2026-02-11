"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/cypher/card";
import { Progress } from "@/components/ui/cypher/progress";

interface AudioSettingProps {
  label: string;
  value: number;
  onChange?: (value: number) => void;
}

function AudioSetting({ label, value, onChange }: AudioSettingProps) {
  const handleClick = () => {
    // Cycle through values: 0 -> 25 -> 50 -> 75 -> 100 -> 0
    const newValue = value >= 100 ? 0 : value + 25;
    onChange?.(newValue);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex w-full items-center justify-between gap-4 py-1 text-left transition-colors hover:text-foreground/80"
    >
      <span className="cyphercn shrink-0 text-xs uppercase">{label}</span>
      <div className="min-w-0 flex-1">
        <Progress showPercentage={false} value={value} width={12} />
      </div>
    </button>
  );
}

function ToggleSetting({
  label,
  enabled,
  onToggle,
}: {
  label: string;
  enabled: boolean;
  onToggle?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between py-1 text-left transition-colors hover:text-foreground/80"
    >
      <span className="cyphercn text-xs uppercase">{label}</span>
      <span className={cn("cyphercn text-xs", enabled ? "text-foreground" : "text-foreground/30")}>
        [{enabled ? "ON" : "OFF"}]
      </span>
    </button>
  );
}

export default function AudioSettings({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [masterVolume, setMasterVolume] = React.useState(75);
  const [sfxVolume, setSfxVolume] = React.useState(50);
  const [musicVolume, setMusicVolume] = React.useState(60);
  const [muted, setMuted] = React.useState(false);
  const [vibration, setVibration] = React.useState(true);

  return (
    <Card
      className={cn(className)}
      title="AUDIO"
      variant="terminal"
      {...props}
    >
      <div className="space-y-2">
        <AudioSetting
          label="MASTER"
          value={muted ? 0 : masterVolume}
          onChange={setMasterVolume}
        />
        <AudioSetting
          label="SFX"
          value={muted ? 0 : sfxVolume}
          onChange={setSfxVolume}
        />
        <AudioSetting
          label="MUSIC"
          value={muted ? 0 : musicVolume}
          onChange={setMusicVolume}
        />
        <div className="cyphercn my-2 text-foreground/30">────────────────</div>
        <ToggleSetting
          enabled={!muted}
          label="SOUND"
          onToggle={() => setMuted(!muted)}
        />
        <ToggleSetting
          enabled={vibration}
          label="VIBRATION"
          onToggle={() => setVibration(!vibration)}
        />
      </div>
    </Card>
  );
}
