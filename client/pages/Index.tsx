import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, ShieldCheck, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Nav */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary tracking-tight">CADI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Unidades</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login/aluno">
              <Button variant="ghost" className="text-sm font-semibold">Portal do Aluno</Button>
            </Link>
            <Link to="/login/colaborador">
              <Button className="text-sm font-semibold">Acesso Restrito</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-slate-50 border-b overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
                Inovação Social e Educação
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Portal Institucional <span className="text-primary underline decoration-secondary underline-offset-8">CADI</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                Acesse o ecossistema digital do CADI. Centralize sua vida acadêmica ou gerencie as operações da nossa rede de forma eficiente e segura.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link to="/login/aluno" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto h-12 px-8 text-lg gap-2">
                    Área do Aluno <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/login/colaborador" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto h-12 px-8 text-lg">
                    Área do Colaborador
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-primary">
                    <GraduationCap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg">Acadêmico</h3>
                    <p className="text-sm text-muted-foreground">Frequência, horários e comunicados em um só lugar.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-secondary">
                    <Users className="h-10 w-10 text-secondary mb-4" />
                    <h3 className="font-bold text-lg">Social</h3>
                    <p className="text-sm text-muted-foreground">Monitoramento de impacto e oficinas sociais.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-blue-400">
                    <ShieldCheck className="h-10 w-10 text-blue-400 mb-4" />
                    <h3 className="font-bold text-lg">Gestão</h3>
                    <p className="text-sm text-muted-foreground">Ferramentas administrativas completas.</p>
                  </div>
                  <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-3xl font-bold mb-1">30+</div>
                    <div className="text-sm text-slate-400">Anos de Transformação</div>
                  </div>
                </div>
              </div>
              {/* Background accent */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} CADI - Centro de Assistência e Desenvolvimento Integral. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
