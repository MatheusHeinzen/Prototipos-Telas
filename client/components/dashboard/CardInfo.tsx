import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardInfoProps {
  title: string;
  value: string | number;
  icon: any;
  description?: string;
  trend?: {
    value: number;
    isUp: boolean;
  };
  className?: string;
  iconColor?: string;
}

export function CardInfo({ 
  title, 
  value, 
  icon: Icon, 
  description, 
  trend, 
  className,
  iconColor = "text-primary"
}: CardInfoProps) {
  return (
    <Card className={cn("overflow-hidden min-w-0", className)}>
      <CardContent className="p-4 sm:p-5 lg:p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider truncate">{title}</p>
            <h3 className="text-xl sm:text-2xl font-bold mt-1 truncate">{value}</h3>
          </div>
          <div className={cn("p-2 sm:p-3 rounded-xl bg-muted/50 shrink-0", iconColor)}>
            <Icon className="h-5 w-5 sm:h-6 w-6" />
          </div>
        </div>
        {(description || trend) && (
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2">
            {trend && (
              <span className={cn(
                "text-xs font-bold px-1.5 py-0.5 rounded shrink-0",
                trend.isUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              )}>
                {trend.isUp ? "+" : "-"}{Math.abs(trend.value)}%
              </span>
            )}
            {description && (
              <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
