import React from "react";
import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";

const SocialMedia = ({
  className,
  iconClassName,
  tooltipClassName,
}: {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}) => {
  const socialMedia = [
    {
      title: "Youtube",
      href: "https://facebook.com",
      icon: <Youtube className="w-5 h-5" />,
    },
    {
      title: "Facebook",
      href: "https://youtube.com",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      title: "Instagram",
      href: "https://instagram.com",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      title: "LinkInd",
      href: "https://linkedin.com",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      title: "GitHub",
      href: "https://github.com",
      icon: <Github className="w-5 h-5" />,
    },
  ];
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialMedia.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold border border-shop_light_green",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
