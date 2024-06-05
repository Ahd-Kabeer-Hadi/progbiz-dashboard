import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { MenuIcon, PlusCircle, Search } from 'lucide-react'
interface TopbarMenuProps {
    className?: string
}
export default function TopbarMenu({className}: TopbarMenuProps) {
  return (
    <div className={cn("w-full p-5 md:max-h-[84px] justify-between items-center", className)}>
    <div className="flex gap-4 items-center">
      <Button size={"icon"} variant={"ghost"} className="bg-[#8181A5]/10">
        <MenuIcon className="w-5 h-5 text-[#8181A5]" />
      </Button>
      <h3 className="font-semibold">New Invoice</h3>
    </div>
    <div className="flex gap-4 justify-end items-center">
      <Button size={"icon"} variant={"ghost"} className="bg-[#8181A5]/10">
        <Search className="w-5 h-5 text-[#8181A5] rotate-90" />
      </Button>
      <Button size={"icon"} variant={"ghost"} className="bg-[#8181A5]/10">
        <PlusCircle className="w-5 h-5 text-[#8181A5]" />
      </Button>
    </div>
  </div>
  )
}
