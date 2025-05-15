import { showNotification } from "@/services/notifications";
import axios from 'axios';
import { Config } from "../config/config";

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
    const url = `/api/musuario/login20`; // Usamos proxy
    const response = await axios.post(url, {
      Mail: email,
      Password: password,
      EmpresaId: 1,
    }, {
      headers: Config.HttpHeaders,
      withCredentials: false
    });

    const jsonData = response.data;
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
    const url = `/api/musuario/RecuperaPassword`; // Usamos proxy
    const response = await axios.post(url, {
      eMail: email,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: false
    });

    const jsonData = response.data;
    
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
