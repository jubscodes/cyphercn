"use client";

import { Button } from "@/components/ui/cypher/button";
import { toast } from "@/components/ui/cypher/toast";

export function ToastExample() {
  return (
    <Button onClick={() => toast("8bitcn is an awesome project!")}>
      Show Toast
    </Button>
  );
}
