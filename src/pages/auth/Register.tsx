
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeAnimation } from "@/components/animations/FadeAnimation";

const Register: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-siempreclick-green flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <FadeAnimation delay={10} className="text-center">
          <h1 className="text-2xl font-bold mb-6">Registrarme</h1>
          <p className="text-gray-600 mb-8">
            Página de registro en construcción
          </p>
          
          <Button
            onClick={() => navigate("/")}
            className="w-full rounded-full border border-siempreclick-orange bg-white text-siempreclick-orange hover:bg-siempreclick-orange hover:text-white transition-colors"
          >
            Volver al Login
          </Button>
        </FadeAnimation>
      </div>
    </div>
  );
};

export default Register;
