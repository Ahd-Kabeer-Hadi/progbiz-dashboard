import { useState } from "react";
import TenantInfo from "./Tenant-Info";
import { Button } from "./ui/button";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MenuIcon,
  PlusCircle,
  Search,
} from "lucide-react";
import { Separator } from "./ui/separator";
import InvoiceInfoCard from "./Invoice-info-card";
import { InvoiceInfo } from "@/Content/InvoiceTrends";
import TopbarMenu from "./Topbar-menu";
import InvoiceForm from "./Invoice-form";

export default function Dashboard() {
  const [isStatisticsActive, setIsStatisticsActive] = useState(true);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col md:flex-row max-h-screen ">
        <div
          className={`w-full md:max-w-[388px] p-0 flex flex-col  items-center ${
            isStatisticsActive
              ? "rounded-none"
              : "md:h-[84px] rounded-md"
          }`}
        >
          <div
            className={`w-full self-start  bg-white p-5   flex flex-col  gap-2 ${
              isStatisticsActive ? "pb-6" : "pb-3"
            }  items-center`}
          >
            <div className="w-full flex justify-between">
              {/* this section can be improved with state management tools and more modular but for now let's keep it simple */}
              <TenantInfo
                /// all this should be from BE
                tenantId={Math.random().toString(36)}
                tenantName="Progbiz Private Limited"
                tenantAddress="8484 Ross Wells"
              />
              <div>
                <Button
                  variant="ghost"
                  size={"icon"}
                  className="bg-[#8181A5]/10"
                  onClick={() => setIsStatisticsActive(!isStatisticsActive)}
                >
                  {isStatisticsActive ? (
                    <ChevronUpIcon className="w-5 h-5 text-[#8181A5]" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-[#8181A5]" />
                  )}
                </Button>
              </div>
            </div>

          
          </div>
        </div>
       <TopbarMenu className="hidden md:flex" />
      </div>
      <div className="w-full flex flex-col md:flex-row ">
      {isStatisticsActive && (
        <div className="w-full p-5 bg-white h-screen  transition duration-300 ease-linear flex flex-col flex-1  md:min-w-[388px]">
            <div className="w-full self-start  bg-white ">
                <Separator className="w-full" />
                <div className="w-full  rounded-lg mt-6">
                  <div>
                    <h3 className="font-semibold">Invoices breakdown</h3>
                    <p className="text-sm text-[#8181A5]">
                      Learn more about invoices created
                    </p>
                  </div>
                  {InvoiceInfo.map((info) => (
                    <InvoiceInfoCard
                      key={info.invoiceId}
                      invoiceId={info.invoiceId}
                      invoiceTitle={info.invoiceTitle}
                      invoiceDiscription={info.invoiceDiscription}
                      progress={info.progress}
                      avarage={info.avarage}
                      trend={info.trend}
                      progressClassName={info.progressClassName}
                    />
                  ))}
                </div>
              </div>
        </div>
            
            )}
      <div className="w-full flex flex-col transition duration-300 ease-linear">
      <TopbarMenu className="flex md:hidden" />

        <div className="p-5 w-full">
          <div className="w-full bg-white rounded-lg px-7 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* I understands using 'order' is a bad practice for now let's get things done ASAP and this is the easiest way to do it */}
            <div className="w-full col-span-1 md:col-span-2 row-span-3 order-3 md:order-1">
              <InvoiceForm />
            </div>
            <div className="w-full col-span-1 order-1 md:order-2"> hello</div>
            <div className="w-full col-span-1 order-2 self-baseline md:order-3">yay</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
