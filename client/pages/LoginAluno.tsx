import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function LoginAluno() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, we'll just redirect to the student dashboard
    navigate("/dashboard/aluno");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary p-3 rounded-full mb-4">
            <GraduationCap className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">CADI</h1>
          <p className="text-muted-foreground mt-2">Portal do Aluno e Responsável</p>
        </div>

        <Card className="border-t-4 border-t-primary shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Acesso ao Sistema</CardTitle>
            <CardDescription>
              Informe seus dados para acessar o portal
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="identificacao">Matrícula, RG ou CPF</Label>
                <Input 
                  id="identificacao" 
                  placeholder="000.000.000-00" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Link 
                    to="/forgot-password" 
                    className="text-xs text-primary hover:underline font-medium"
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
              <Button type="submit" className="w-full text-lg h-11">
                Entrar no Portal
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            É colaborador?{" "}
            <Link to="/login/colaborador" className="text-primary font-semibold hover:underline">
              Clique aqui para acessar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
