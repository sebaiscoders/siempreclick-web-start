
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeAnimation, FadeAnimation2 } from "@/components/animations/FadeAnimation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginUser, recoverPassword } from "@/services/authService";
import { showNotification } from "@/services/notifications";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await loginUser(email, password);
      
      if (result.success) {
        showNotification({ message: result.message, status: 200 });
        // Navigate to the Home page instead of Dashboard
        navigate("/home");
      } else {
        showNotification({ message: result.message, status: 400 });
      }
    } catch (error) {
      showNotification({ 
        message: "Error al intentar iniciar sesión", 
        status: 500 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRecoverPassword = async () => {
    if (!email) {
      showNotification({ 
        message: "Debe ingresar un Correo Electrónico para Recuperar Contraseña", 
        status: 400 
      });
      return;
    }

    try {
      const result = await recoverPassword(email);
      showNotification({ 
        message: result.message, 
        status: result.success ? 200 : 400 
      });
    } catch (error) {
      showNotification({ 
        message: "Error al intentar recuperar la contraseña", 
        status: 500 
      });
    }
  };
  
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <div className="animate-pulse w-10 h-10 rounded-full bg-siempreclick-green mb-4"></div>
        <p className="text-gray-500 text-sm font-medium">Aguarde por favor...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-siempreclick-green">
      <div className="relative min-h-screen w-full">
        {/* Logo area */}
        <div className="absolute top-10 left-0 right-0 flex justify-center">
          <div className="w-52 h-52 relative">
            {/* Replace with actual logo once provided */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <span className="text-siempreclick-green text-2xl font-bold">siempreClick</span>
              </div>
            </div>
          </div>
        </div>

        {/* Login form container */}
        <div className="absolute bottom-0 w-full">
          <div className="bg-white rounded-t-3xl px-6 pt-6 pb-8">
            <FadeAnimation delay={10} className="mb-6">
              <h2 className="text-sm font-extrabold uppercase text-gray-800">
                SOMOS SIEMPRECLICK
              </h2>
            </FadeAnimation>

            <FadeAnimation delay={20} className="mb-2">
              <h1 className="text-3xl font-extrabold text-gray-800">
                Bienvenid@!
              </h1>
            </FadeAnimation>

            <FadeAnimation delay={25} className="mb-10">
              <p className="text-sm font-medium text-gray-800">
                Ingresa tu usuario para entrar a la App
              </p>
            </FadeAnimation>

            <FadeAnimation2 delay={30} className="space-y-6">
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo Electrónico"
                    className="pl-10 py-6 border-gray-300"
                  />
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    className="pl-10 py-6 border-gray-300"
                  />
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {isPasswordVisible ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </FadeAnimation2>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label 
                  htmlFor="rememberMe" 
                  className="text-sm text-gray-500 cursor-pointer"
                >
                  Recordarme
                </Label>
              </div>
              
              <button
                onClick={handleRecoverPassword}
                className="text-sm font-bold text-gray-800"
              >
                Recuperar Contraseña
              </button>
            </div>

            <FadeAnimation2 delay={40} className="mt-8">
              <Button
                onClick={handleLogin}
                className="w-full rounded-full border border-siempreclick-orange bg-white text-siempreclick-orange hover:bg-siempreclick-orange hover:text-white transition-colors py-6"
              >
                Ingresar
              </Button>
            </FadeAnimation2>

            <FadeAnimation2 delay={35} className="mt-6 flex justify-center items-center space-x-1">
              <p className="text-sm text-gray-800">
                No tenes Usuario?
              </p>
              <button
                onClick={() => navigate("/register")}
                className="text-sm font-semibold text-gray-800"
              >
                Registrarme
              </button>
            </FadeAnimation2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
