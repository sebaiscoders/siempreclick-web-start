
import React from 'react';
import { cn } from '@/lib/utils';

interface FadeAnimationProps {
  delay: number;
  children: React.ReactNode;
  className?: string;
}

export function FadeAnimation({ delay, children, className }: FadeAnimationProps) {
  const animationDelay = `${delay * 0.1}s`;
  
  return (
    <div 
      className={cn('animate-fade-in', className)} 
      style={{ animationDelay }}
    >
      {children}
    </div>
  );
}

export function FadeAnimation2({ delay, children, className }: FadeAnimationProps) {
  const animationDelay = `${delay * 0.1}s`;
  
  return (
    <div 
      className={cn('animate-fade-in-delay', className)} 
      style={{ animationDelay }}
    >
      {children}
    </div>
  );
}
