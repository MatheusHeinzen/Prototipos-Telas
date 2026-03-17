import React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TabelaResponsivaProps {
  columns: { header: string; accessor: string; cell?: (item: any) => React.ReactNode }[];
  data: any[];
  className?: string;
}

export function TabelaResponsiva({ columns, data, className }: TabelaResponsivaProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                {columns.map((col, idx) => (
                  <TableHead key={idx} className="font-bold whitespace-nowrap">{col.header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length > 0 ? (
                data.map((item, rowIdx) => (
                  <TableRow key={rowIdx}>
                    {columns.map((col, colIdx) => (
                      <TableCell key={colIdx} className="whitespace-nowrap">
                        {col.cell ? col.cell(item) : item[col.accessor]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    Nenhum registro encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-xs sm:text-sm text-muted-foreground">Mostrando {data.length} registros</p>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="icon" disabled>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" disabled>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
