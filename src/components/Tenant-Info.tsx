import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface TenantInfoProps {
  tenantId: string;
  tenantName: string;
  tenantAddress: string;
  tenantLogo?: string;
  className?: string;
}
export default function TenantInfo({
  // @ts-ignore : just to fix the usage error
  tenantId,
  tenantName,
  tenantAddress,
  tenantLogo,
  className,
}: TenantInfoProps) {
  const AvatarFalBackText = tenantName.slice(0, 2).toUpperCase();
  return (
    <div className={cn("w-full flex items-center gap-2", className)}>
      <Avatar className="rounded-sm bg-black">
        <AvatarImage className="rounded-sm" src={tenantLogo} />
        <AvatarFallback className="rounded-sm bg-black text-white">
          {AvatarFalBackText}
        </AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold">{tenantName}</h3>
        <p className="text-sm text-[#8181A5]">{tenantAddress}</p>
      </div>
    </div>
  );
}
