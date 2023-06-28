import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth"

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
  const { user } = useAuth();


  return(
    <BrowserRouter>
    {/* se o usuário estiver authenticado redireciona para AppRoutes , caso contrário mantem AuthRoutes */}
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}