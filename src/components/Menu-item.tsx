import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export interface MenuItemProps {
  id: string;
  icon: ReactNode;
  title: string;
  path?: string;
  isActive?: boolean; // This should be handled logically in the parent component
  hasNotification?: boolean;
  notificationType?: "info" | "success" | "warning" | "error";
}

export default function MenuItem({
  icon,
  title,
  path = "/",
  isActive = false,
  hasNotification = false,
  notificationType = "success",
}: MenuItemProps) {
  const notificationColors = {
    info: "bg-[#5E81F4]",
    success: "bg-[#7CE7AC]",
    warning: "bg-[#F4BE5E]",
    error: "bg-[#FF808B]",
  };

  const notificationColor = notificationColors[notificationType] || notificationColors.success;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-full min-h-8 md:min-h-16">
          <a
            href={path}
            className={`group w-full flex h-full transition duration-300 ease-in hover:border-[#5E81F4] hover:border-r-2 border-0 items-center justify-center shrink-01 ${isActive ? "border-[#5E81F4] border-r-2" : ""}`}
          >
            <div className={`peer relative group-hover:md:p-4 group-hover:p-2 transition duration-300 ease-linear ${isActive ? "bg-[#5E81F4]/10" : ""} rounded-md fill-[#5E81F4]`}>
              {icon}
              {hasNotification && (
                <span className={`w-2 h-2 ${notificationColor} rounded-full absolute ring-[2px] ring-white left-2 md:group-hover:left-6 group-hover:left-5 md:group-hover:top-3 group-hover:top-2 top-0`}></span>
              )}
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
