import React from "react";
import { cn } from "@/lib/utils";

interface GradeHorariaProps {
  schedule: {
    time: string;
    monday?: { label: string; color?: string };
    tuesday?: { label: string; color?: string };
    wednesday?: { label: string; color?: string };
    thursday?: { label: string; color?: string };
    friday?: { label: string; color?: string };
  }[];
}

export function GradeHoraria({ schedule }: GradeHorariaProps) {
  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  const dayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday"];

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
      <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-muted/30">
            <th className="p-4 text-left font-bold text-sm text-primary border-b border-r w-24">Horário</th>
            {days.map((day) => (
              <th key={day} className="p-4 text-center font-bold text-sm text-primary border-b">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {schedule.map((slot, idx) => (
            <tr key={idx} className="hover:bg-muted/10 transition-colors">
              <td className="p-4 text-sm font-semibold text-muted-foreground border-r border-b">{slot.time}</td>
              {dayKeys.map((key) => {
                const session = (slot as any)[key];
                return (
                  <td key={key} className="p-2 border-b">
                    {session ? (
                      <div className={cn(
                        "p-3 rounded-lg text-xs font-bold text-center shadow-sm",
                        session.color || "bg-primary/10 text-primary border border-primary/20"
                      )}>
                        {session.label}
                      </div>
                    ) : (
                      <div className="h-12 flex items-center justify-center text-[10px] text-muted-foreground/30">
                        --
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
