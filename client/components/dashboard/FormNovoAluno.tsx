import React, { useState } from "react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function FormNovoAluno() {
  const [nome, setNome] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [turma, setTurma] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim()) {
      toast.error("Informe o nome do aluno.");
      return;
    }
    toast.success(`Aluno "${nome}" cadastrado com sucesso (protótipo).`);
    setNome("");
    setResponsavel("");
    setTurma("");
  };

  return (
    <DashboardCard title="Novo aluno" description="Cadastro de aluno e responsável">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome do aluno</Label>
          <Input
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome completo"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="responsavel">Nome do responsável</Label>
          <Input
            id="responsavel"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
            placeholder="Responsável legal"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="turma">Turma</Label>
          <Input
            id="turma"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
            placeholder="Ex.: Informática Kids"
          />
        </div>
        <Button type="submit">Cadastrar aluno</Button>
      </form>
    </DashboardCard>
  );
}
