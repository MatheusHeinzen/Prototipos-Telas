import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function LoginColaborador() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as any).email.value;
    
    // Simple logic to mock profile identification
    if (email.includes("professor")) {
      navigate("/dashboard/professor");
    } else if (email.includes("secretaria")) {
      navigate("/dashboard/secretaria");
    } else if (email.includes("gestao")) {
      navigate("/dashboard/gestao");
    } else if (email.includes("financeiro")) {
      navigate("/dashboard/financeiro");
    } else if (email.includes("psicologo")) {
      navigate("/dashboard/psicologo");
    } else {
      // Default to secretária if unknown for demo
      navigate("/dashboard/secretaria");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-secondary p-3 rounded-full mb-4">
            <Users className="h-10 w-10 text-secondary-foreground" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">CADI</h1>
          <p className="text-muted-foreground mt-2">Painel do Colaborador</p>
        </div>

        <Card className="border-t-4 border-t-secondary shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Acesso Restrito</CardTitle>
            <CardDescription>
              Acesse com seu e-mail institucional
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail Institucional</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="nome.sobrenome@cadi.org.br" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Link 
                    to="/forgot-password" 
                    className="text-xs text-secondary-foreground hover:underline font-medium"
                  >
                    Esqueci minha senha
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" variant="secondary" className="w-full text-lg h-11">
                Entrar no Sistema
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            É aluno ou responsável?{" "}
            <Link to="/login/aluno" className="text-primary font-semibold hover:underline">
              Clique aqui para acessar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
