
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { storage } from "@/api/auth/authApi";

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Clear user data from storage
    storage.delete("USER");
    // Navigate back to login
    navigate("/");
  };
  
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-siempreclick-green rounded-lg p-6 text-white mb-6">
          <h1 className="text-2xl font-bold mb-2">Home</h1>
          <p>¡Bienvenido a siempreClick Mobile Hub!</p>
        </div>
        
        <p className="text-gray-600 mb-6">
          Esta página está en construcción. Más funcionalidades serán añadidas pronto.
        </p>
        
        <Button
          onClick={handleLogout}
          className="w-full rounded-full bg-siempreclick-orange text-white hover:bg-opacity-90 transition-colors"
        >
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default Home;
