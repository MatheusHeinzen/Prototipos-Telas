import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EstadoErroProps {
  titulo?: string;
  mensagem: string;
  onTentarNovamente?: () => void;
  className?: string;
}

export function EstadoErro({
  titulo = "Erro ao carregar",
  mensagem,
  onTentarNovamente,
  className,
}: EstadoErroProps) {
  return (
    <Alert variant="destructive" className={className}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{titulo}</AlertTitle>
      <AlertDescription>
        {mensagem}
        {onTentarNovamente && (
          <Button
            variant="outline"
            size="sm"
            className="mt-3 border-destructive/50 text-destructive hover:bg-destructive/10"
            onClick={onTentarNovamente}
          >
            Tentar novamente
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
}
