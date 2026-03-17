import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-9xl font-extrabold text-primary/10">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Página não encontrada</h2>
          <p className="text-muted-foreground">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/">
            <Button className="gap-2 px-8">
              <Home className="h-4 w-4" />
              Voltar para o Início
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            Página Anterior
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
