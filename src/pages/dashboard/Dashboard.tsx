
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-siempreclick-green rounded-lg p-6 text-white mb-6">
          <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
          <p>¡Bienvenido a siempreClick Mobile Hub!</p>
        </div>
        
        <p className="text-gray-600 mb-6">
          Esta es una página de dashboard temporal. Aquí se mostrarán los contenidos principales de la aplicación.
        </p>
        
        <Button
          onClick={() => navigate("/")}
          className="w-full rounded-full bg-siempreclick-orange text-white hover:bg-opacity-90 transition-colors"
        >
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
