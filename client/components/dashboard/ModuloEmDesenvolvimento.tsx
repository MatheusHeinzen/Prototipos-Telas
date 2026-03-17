import React from "react";
import { Construction } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuloEmDesenvolvimentoProps {
  label?: string;
  className?: string;
  minHeight?: string;
}

export function ModuloEmDesenvolvimento({
  label = "Módulo em desenvolvimento",
  className,
  minHeight = "h-48",
}: ModuloEmDesenvolvimentoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center border-2 border-dashed rounded-lg bg-muted/20",
        minHeight,
        className
      )}
    >
      <div className="text-center space-y-3 px-4">
        <Construction className="h-10 w-10 text-muted-foreground mx-auto opacity-70" />
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
