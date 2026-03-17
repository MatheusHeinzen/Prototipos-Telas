import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
}

export function DashboardCard({ 
  title, 
  description, 
  children, 
  footer, 
  className,
  headerAction 
}: DashboardCardProps) {
  return (
    <Card className={cn("flex flex-col h-full min-w-0", className)}>
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 space-y-0 pb-4">
        <div className="space-y-1 min-w-0">
          <CardTitle className="text-base sm:text-lg font-bold truncate">{title}</CardTitle>
          {description && <CardDescription className="text-xs sm:text-sm">{description}</CardDescription>}
        </div>
        {headerAction && <div className="shrink-0">{headerAction}</div>}
      </CardHeader>
      <CardContent className="flex-1">
        {children}
      </CardContent>
      {footer && (
        <div className="p-6 pt-0 mt-auto border-t pt-4">
          {footer}
        </div>
      )}
    </Card>
  );
}
