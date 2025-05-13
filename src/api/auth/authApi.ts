
import { Config } from "../config/config";
import { showNotification } from "@/services/notifications";

// Storage functions to emulate secure storage
const storage = {
  write: (key: string, value: string) => {
    localStorage.setItem(key, value);
  },
  read: (key: string) => {
    return localStorage.getItem(key);
  },
  delete: (key: string) => {
    localStorage.removeItem(key);
  }
};

export const loginUser = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
  try {
    const url = `http://${Config.ApiURL}/api/musuario/login20`;
    const response = await fetch(url, {
      method: "POST",
      headers: Config.HttpHeaders,
      body: JSON.stringify({
        Mail: email,
        Password: password,
        EmpresaId: 1,
        // DeviceId would go here if we implement a similar feature
      })
    });

    const jsonData = await response.json();
    console.log(jsonData);

    if (jsonData.Status === 200) {
      storage.write('USER', JSON.stringify(jsonData));
      return { 
        success: true,
        message: jsonData.Mensaje || "Inicio de sesión exitoso"
      };
    } else {
      return { 
        success: false,
        message: jsonData.Mensaje || "Error en inicio de sesión"
      };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { 
      success: false,
      message: "Error de conexión al servidor"
    };
  }
};

export const recoverPassword = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    const url = `http://${Config.ApiURL}/api/musuario/RecuperaPassword`;
    const response = await fetch(url, {
      method: "POST",
      headers: Config.HttpHeaders,
      body: JSON.stringify({
        eMail: email,
      })
    });

    const jsonData = await response.json();
    
    if (jsonData.Status === 200) {
      return { 
        success: true,
        message: jsonData.Mensaje || "Se ha enviado un correo con instrucciones para recuperar su contraseña"
      };
    } else {
      return { 
        success: false,
        message: jsonData.Mensaje || "Error al recuperar contraseña"
      };
    }
  } catch (error) {
    console.error("Password recovery error:", error);
    return { 
      success: false,
      message: "Error de conexión al servidor"
    };
  }
};

// Export storage for use in other files
export { storage };
