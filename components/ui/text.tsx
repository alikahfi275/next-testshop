import { cn } from "@/lib/utils";
import React from "react";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-2xl md:text-3xl font-bold text-shop_dark_green capitalize tracking-wide",
        className
      )}
    >
      {children}
    </h1>
  );
};

export { Title };
