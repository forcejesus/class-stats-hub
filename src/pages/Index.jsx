import { Navigate } from "react-router-dom";
import { authService } from "@/services/auth.service";

const Index = () => {
  if (authService.isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Navigate to="/" replace />;
};

export default Index;