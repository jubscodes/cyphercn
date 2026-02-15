"use client";

import React from "react";

import { toast as sonnerToast } from "sonner";

import "./styles/cyberpunk.css";

export function toast(toast: string) {
  return sonnerToast.custom((id) => <Toast id={id} title={toast} />);
}

interface ToastProps {
  id: string | number;
  title: string;
}

function Toast(props: ToastProps) {
  const { title } = props;

  return (
    <div className="relative cyphercn">
      <div className="flex rounded-none bg-background border border-foreground dark:border-ring w-full md:max-w-[364px] items-center p-4">
        <div className="flex flex-1 items-center">
          <div className="w-full">
            <p className="text-sm font-medium">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
