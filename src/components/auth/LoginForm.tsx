import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { authService } from '@/services/auth.service';
import { Loader2 } from 'lucide-react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    console.log('Tentative de connexion avec:', { email, password });
    
    try {
      const response = await authService.login({ email, password });
      console.log('Réponse du serveur:', response);
      
      if (response.token) {
        localStorage.setItem('token', response.token);
        toast({
          title: "Connexion réussie",
          description: "Vous allez être redirigé vers le tableau de bord",
        });
        navigate('/dashboard');
      } else {
        console.error('Token manquant dans la réponse');
        toast({
          variant: "destructive",
          title: "Erreur de connexion",
          description: "Une erreur est survenue lors de la connexion",
        });
      }
    } catch (error: any) {
      console.error('Erreur de connexion:', error);
      console.error('Détails de l\'erreur:', error.response?.data);
      
      toast({
        variant: "destructive",
        title: "Erreur de connexion",
        description: error.response?.data?.message || "Email ou mot de passe incorrect",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-6 space-y-6 animate-fadeIn">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Ecole Manager</h1>
          <p className="text-muted-foreground">Connectez-vous à votre compte</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="exemple@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Mot de passe
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connexion en cours...
              </>
            ) : (
              'Se connecter'
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};