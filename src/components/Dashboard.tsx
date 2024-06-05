import { useState } from "react";
import TenantInfo from "./Tenant-Info";
import { Button } from "./ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
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
            isStatisticsActive ? "rounded-none" : "md:h-[84px] rounded-md"
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
      <div className="w-full flex flex-col md:flex-row   bg-white">
        {isStatisticsActive && (
          <div className="w-full h-full min-h-svh flex flex-col flex-1   p-5 bg-white     transition duration-300 ease-linear md:min-w-[388px]">
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
        <div className="w-full flex flex-col  bg-[#8181A5]/10 transition duration-300 ease-linear">
          <TopbarMenu className="flex md:hidden" />

          <div className="p-5 w-full">
            <div className="w-full bg-white rounded-lg px-7 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* I understands using 'order' is a bad practice for now let's get things done ASAP and this is the easiest way to do it */}
              <div className="w-full col-span-1 md:col-span-2  order-2 md:order-1">
                <InvoiceForm />
              </div>
              <div className="col-span-1 flex flex-1 flex-col h-full items-center justify-between md:order-2 order-1 w-full">
                <div className="w-full  rounded-lg border flex flex-col border-[#8181A5]/10 py-4 md:py-8">
                  <div className="group cursor-pointer w-full flex items-center gap-3 md:gap-5 px-4 md:px-8 pb-4 md:pb-8">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#5E81F4] fill-[#8181A5]"
                        d="M2.7793 0.743622C2.2207 0.743622 1.73372 0.951304 1.31836 1.36667C0.917318 1.76771 0.716797 2.24753 0.716797 2.80612V12.4311C0.716797 12.9897 0.917318 13.4767 1.31836 13.8921C1.73372 14.2931 2.2207 14.4936 2.7793 14.4936H17.9043C18.4629 14.4936 18.9427 14.2931 19.3438 13.8921C19.7591 13.4767 19.9668 12.9897 19.9668 12.4311V2.80612C19.9668 2.24753 19.7591 1.76771 19.3438 1.36667C18.9427 0.951304 18.4629 0.743622 17.9043 0.743622H2.7793ZM2.7793 2.11862H17.9043C18.1048 2.11862 18.2695 2.18307 18.3984 2.31198C18.5273 2.44089 18.5918 2.6056 18.5918 2.80612V4.18112H2.7793V5.55612H18.5918V12.4311C18.5918 12.6316 18.5273 12.7964 18.3984 12.9253C18.2695 13.0542 18.1048 13.1186 17.9043 13.1186H2.7793C2.57878 13.1186 2.41406 13.0542 2.28516 12.9253C2.15625 12.7964 2.0918 12.6316 2.0918 12.4311V2.80612C2.0918 2.6056 2.15625 2.44089 2.28516 2.31198C2.41406 2.18307 2.57878 2.11862 2.7793 2.11862Z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-bold text-[#8181A5] group-hover:text-[#5E81F4]">
                        Bill To
                      </h3>
                      <p className="text-sm text-[#8181A5] ">
                        Set your customer's details
                      </p>
                    </div>
                  </div>
                  <Separator className="w-full bg-[#8181A5]/10" />
                  <div className="group cursor-pointer w-full flex items-center gap-3 md:gap-5 p-4 md:p-8">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#5E81F4] fill-[#8181A5]"
                        d="M2.7793 0.656372C2.2207 0.656372 1.73372 0.864054 1.31836 1.27942C0.917318 1.68046 0.716797 2.16028 0.716797 2.71887V12.3439C0.716797 12.9025 0.917318 13.3894 1.31836 13.8048C1.73372 14.2059 2.2207 14.4064 2.7793 14.4064H17.9043C18.4629 14.4064 18.9427 14.2059 19.3438 13.8048C19.7591 13.3894 19.9668 12.9025 19.9668 12.3439V2.71887C19.9668 2.16028 19.7591 1.68046 19.3438 1.27942C18.9427 0.864054 18.4629 0.656372 17.9043 0.656372H2.7793ZM2.7793 2.03137H17.9043C18.1048 2.03137 18.2695 2.09583 18.3984 2.22473C18.5273 2.35364 18.5918 2.51835 18.5918 2.71887V12.3439C18.5918 12.5444 18.5273 12.7091 18.3984 12.838C18.2695 12.9669 18.1048 13.0314 17.9043 13.0314H2.7793C2.57878 13.0314 2.41406 12.9669 2.28516 12.838C2.15625 12.7091 2.0918 12.5444 2.0918 12.3439V2.71887C2.0918 2.51835 2.15625 2.35364 2.28516 2.22473C2.41406 2.09583 2.57878 2.03137 2.7793 2.03137ZM6.9043 3.40637C6.40299 3.40637 5.94466 3.53528 5.5293 3.79309C5.11393 4.03658 4.77734 4.36601 4.51953 4.78137C4.27604 5.19674 4.1543 5.65507 4.1543 6.15637C4.1543 6.52877 4.22591 6.88684 4.36914 7.23059C4.52669 7.56002 4.73438 7.85364 4.99219 8.11145C4.51953 8.42655 4.14714 8.83476 3.875 9.33606C3.60286 9.83736 3.4668 10.3816 3.4668 10.9689H4.8418C4.8418 10.396 5.04232 9.90898 5.44336 9.50793C5.8444 9.10689 6.33138 8.90637 6.9043 8.90637C7.47721 8.90637 7.96419 9.10689 8.36523 9.50793C8.76628 9.90898 8.9668 10.396 8.9668 10.9689H10.3418C10.3418 10.3816 10.2057 9.83736 9.93359 9.33606C9.66146 8.83476 9.28906 8.42655 8.81641 8.11145C9.07422 7.85364 9.27474 7.56002 9.41797 7.23059C9.57552 6.88684 9.6543 6.52877 9.6543 6.15637C9.6543 5.65507 9.52539 5.19674 9.26758 4.78137C9.02409 4.36601 8.69466 4.03658 8.2793 3.79309C7.86393 3.53528 7.4056 3.40637 6.9043 3.40637ZM11.7168 4.09387V5.46887H17.2168V4.09387H11.7168ZM6.9043 4.78137C7.29102 4.78137 7.61328 4.91744 7.87109 5.18958C8.14323 5.44739 8.2793 5.76965 8.2793 6.15637C8.2793 6.54309 8.14323 6.87252 7.87109 7.14465C7.61328 7.40247 7.29102 7.53137 6.9043 7.53137C6.51758 7.53137 6.18815 7.40247 5.91602 7.14465C5.6582 6.87252 5.5293 6.54309 5.5293 6.15637C5.5293 5.76965 5.6582 5.44739 5.91602 5.18958C6.18815 4.91744 6.51758 4.78137 6.9043 4.78137ZM11.7168 6.84387V8.21887H17.2168V6.84387H11.7168ZM11.7168 9.59387V10.9689H15.1543V9.59387H11.7168Z"
                      />
                    </svg>

                    <div>
                      <h3 className="font-bold text-[#8181A5] group-hover:text-[#5E81F4]">
                        From
                      </h3>
                      <p className="text-sm text-[#8181A5] ">
                        Set your personal details
                      </p>
                    </div>
                  </div>
                  <Separator className="w-full bg-[#8181A5]/10" />
                  <div className="group cursor-pointer w-full flex items-center gap-3 md:gap-5 px-4 md:px-8 pt-4 md:pt-8">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#5E81F4] fill-[#8181A5]"
                        d="M8.2793 0.881607C7.9069 0.881607 7.58464 1.01767 7.3125 1.28981C7.04036 1.56195 6.9043 1.88421 6.9043 2.25661V3.63161H0.716797V16.0066H19.9668V3.63161H13.7793V2.25661C13.7793 1.88421 13.6432 1.56195 13.3711 1.28981C13.099 1.01767 12.7767 0.881607 12.4043 0.881607H8.2793ZM8.2793 2.25661H12.4043V3.63161H8.2793V2.25661ZM2.0918 5.00661H18.5918V8.44411H15.8418V7.75661H13.0918V8.44411H7.5918V7.75661H4.8418V8.44411H2.0918V5.00661ZM2.0918 9.81911H4.8418V10.5066H7.5918V9.81911H13.0918V10.5066H15.8418V9.81911H18.5918V14.6316H2.0918V9.81911Z"
                      />
                    </svg>

                    <div>
                      <h3 className="font-bold text-[#8181A5] group-hover:text-[#5E81F4]">
                        Description
                      </h3>
                      <p className="text-sm text-[#8181A5] ">
                        Add products or items
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full  flex flex-col self-end  rounded-lg border border-[#8181A5]/10 py-4 md:py-8">
                  <div className="group cursor-pointer w-full flex items-center gap-3 md:gap-5 px-4 md:px-8 pb-4 md:pb-8">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#7CE7AC] fill-[#8181A5]"
                        d="M2.26172 0.400238L2.1543 0.980316L0.779297 9.91782V15.5252H15.9043V9.91782L14.5293 0.980316L14.4219 0.400238H2.26172ZM3.44336 1.77524H13.2402L14.4004 9.33774H9.7168V10.0252C9.7168 10.412 9.58073 10.7414 9.30859 11.0135C9.05078 11.2713 8.72852 11.4002 8.3418 11.4002C7.95508 11.4002 7.62565 11.2713 7.35352 11.0135C7.0957 10.7414 6.9668 10.412 6.9668 10.0252V9.33774H2.2832L3.44336 1.77524ZM2.1543 10.7127H5.7207C5.87826 11.3143 6.19336 11.8084 6.66602 12.1952C7.15299 12.5819 7.71159 12.7752 8.3418 12.7752C8.97201 12.7752 9.52344 12.5819 9.99609 12.1952C10.4831 11.8084 10.8053 11.3143 10.9629 10.7127H14.5293V14.1502H2.1543V10.7127Z"
                      />
                    </svg>

                    <div>
                      <h3 className="font-bold group-hover:text-[#7CE7AC]">
                        Save As a Draft
                      </h3>
                      <p className="text-sm text-[#8181A5] ">
                        Edit and send this invoice later
                      </p>
                    </div>
                  </div>
                  <Separator className="w-full bg-[#8181A5]/10" />
                  <div className="group cursor-pointer w-full flex items-center gap-3 md:gap-5 px-4 md:px-8 pt-4 md:pt-8">
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#FF808B] fill-[#8181A5]"
                        d="M5.6543 0.623505C5.25326 0.623505 4.92383 0.752411 4.66602 1.01022C4.4082 1.26804 4.2793 1.59746 4.2793 1.9985V2.686H0.154297V4.061H0.841797V15.061C0.841797 15.6196 1.04232 16.1066 1.44336 16.5219C1.85872 16.923 2.3457 17.1235 2.9043 17.1235H11.1543C11.7129 17.1235 12.1927 16.923 12.5938 16.5219C13.0091 16.1066 13.2168 15.6196 13.2168 15.061V4.061H13.9043V2.686H9.7793V1.9985C9.7793 1.59746 9.65039 1.26804 9.39258 1.01022C9.13477 0.752411 8.80534 0.623505 8.4043 0.623505H5.6543ZM5.6543 1.9985H8.4043V2.686H5.6543V1.9985ZM2.2168 4.061H11.8418V15.061C11.8418 15.2472 11.7702 15.4119 11.627 15.5551C11.498 15.6841 11.3405 15.7485 11.1543 15.7485H2.9043C2.7181 15.7485 2.55339 15.6841 2.41016 15.5551C2.28125 15.4119 2.2168 15.2472 2.2168 15.061V4.061ZM3.5918 6.1235V13.686H4.9668V6.1235H3.5918ZM6.3418 6.1235V13.686H7.7168V6.1235H6.3418ZM9.0918 6.1235V13.686H10.4668V6.1235H9.0918Z"
                      />
                    </svg>

                    <div>
                      <h3 className="font-bold group-hover:text-[#FF808B]">
                        Delete Invoice
                      </h3>
                      <p className="text-sm text-[#8181A5] ">
                        Hide & disable current invoice
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
