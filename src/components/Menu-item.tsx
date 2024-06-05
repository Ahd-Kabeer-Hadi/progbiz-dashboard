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
}
export default function MenuItem({ icon, title, path = "/" }: MenuItemProps) {

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="w-full min-h-8 md:min-h-16">
            <a
              href={path}
              className="group w-full flex h-full transition duration-300 ease-in  hover:border-[#5E81F4] hover:border-r-2 border-0 items-center justify-center shrink-0"
            >
             <span className="peer group-hover:md:p-4 group-hover:p-2 transition duration-300 ease-linear bg-[#5E81F4]/10 rounded-md fill-[#5E81F4]">{icon}</span> 
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
