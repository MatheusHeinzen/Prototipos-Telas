import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export function FormGroup({ label, error, helperText, className, id, ...props }: FormGroupProps) {
  return (
    <div className={cn("space-y-2 w-full", className)}>
      <Label htmlFor={id} className={cn(error && "text-destructive")}>
        {label}
      </Label>
      <Input 
        id={id} 
        className={cn(
          error && "border-destructive focus-visible:ring-destructive",
          "bg-white"
        )} 
        {...props} 
      />
      {error && <p className="text-xs font-medium text-destructive">{error}</p>}
      {helperText && !error && <p className="text-xs text-muted-foreground">{helperText}</p>}
    </div>
  );
}
