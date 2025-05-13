
import { toast } from "@/hooks/use-toast";

interface ShowNotificationProps {
  message: string;
  status: number;
}

export function showNotification({ message, status }: ShowNotificationProps) {
  const isSuccess = status === 200;
  
  toast({
    title: isSuccess ? "Éxito" : "Error",
    description: message,
    variant: isSuccess ? "default" : "destructive",
  });
}
