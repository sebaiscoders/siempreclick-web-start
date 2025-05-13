
// Mock API functions to simulate backend calls
// These will be replaced with actual API calls later

export async function loginUser(email: string, password: string): Promise<{ success: boolean; message: string }> {
  console.log("Login attempt with:", { email, password });
  
  // Simulating API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simple validation for demo purposes
      if (email && password) {
        // Success case
        if (email === "demo@siempreclick.com" && password === "password") {
          resolve({
            success: true,
            message: "Inicio de sesión exitoso"
          });
        } else {
          // Failed login
          resolve({
            success: false,
            message: "Credenciales incorrectas"
          });
        }
      } else {
        // Empty fields
        resolve({
          success: false,
          message: "Por favor complete todos los campos"
        });
      }
    }, 1500); // Simulate network delay
  });
}

export async function recoverPassword(email: string): Promise<{ success: boolean; message: string }> {
  console.log("Password recovery for:", email);
  
  // Simulating API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email) {
        resolve({
          success: true,
          message: "Se ha enviado un correo con instrucciones para recuperar su contraseña"
        });
      } else {
        resolve({
          success: false,
          message: "Debe ingresar un Correo Electrónico para Recuperar Contraseña"
        });
      }
    }, 1000);
  });
}
