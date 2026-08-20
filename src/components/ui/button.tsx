import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass";
  children: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps): React.JSX.Element {
  const baseStyles = "inline-flex items-center gap-2.5 justify-center rounded-xl text-sm transition-all duration-300 font-cyber focus:outline-none disabled:opacity-50 px-6 py-2.5 cursor-pointer";
  
  const variants: Record<string, string> = {
    // Solid gradient with primary glow effect
    primary: "bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold hover:scale-105 neon-border",
    
    // Translucent gradient with subtle background blending
    secondary: "bg-purple-600/10 border border-purple-800/50 text-purple-200 hover:bg-purple-600/30",
    
    // Transparent border with neon interaction glow
    outline: "border border-slate-700 bg-transparent text-slate-300 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/20",
    
    // Glassmorphic effect (frosted overlay)
    glass: "backdrop-blur-sm bg-slate-800/40 border border-slate-700/50 text-slate-200 hover:bg-slate-800/60",
  };

  return (
    <button className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
}