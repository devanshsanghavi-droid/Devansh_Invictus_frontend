
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "bg-[#FDFDFD] text-[#080808] rounded-[64px] border-2 border-[#080808] font-['Lexend'] font-medium",
        {
          "text-[17px] leading-[19px] px-[27px] py-[13px]": size === "md",
          "text-3xl px-[35px] py-6 rounded-[64px] max-md:text-2xl max-md:py-5 max-sm:text-xl max-sm:py-4":
            size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
