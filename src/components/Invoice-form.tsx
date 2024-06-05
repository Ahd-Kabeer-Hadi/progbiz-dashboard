import { Edit2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Label } from "./ui/label";

interface InvoiceFormState {
  image: File | null;
  invoiceNumber: string;
  template: string;
  companyName: string;
  dueDate: string;
  businessAddress: string;
  country: string;
  city: string;
  phoneNumber: string;
  email: string;
  taxRate: string;
}

export default function InvoiceForm() {
  const [invoiceForm, setInvoiceForm] = useState<InvoiceFormState>({
    image: null,
    invoiceNumber: "AA-04-19-1890",
    template: "",
    companyName: "",
    dueDate: "",
    businessAddress: "",
    country: "",
    city: "",
    phoneNumber: "",
    email: "",
    taxRate: "",
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setInvoiceForm((prevState) => ({
      ...prevState,
      image: file,
    }));
    console.log(file);
  };
  const setInvoiceNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceForm((prevState) => ({
      ...prevState,
      invoiceNumber: e.target.value,
    }));
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {/* <Form></Form> */}
      {/* can be improved with react hook form and zod validations for now keeping it minimal with just state manipulation and file input */}
      <div
        className="border-dashed border-2 relative group border-[#ECECF2] rounded-md h-32 md:h-52 flex justify-center items-center cursor-pointer"
        onClick={handleDivClick}
      >
        {invoiceForm.image ? (
          <>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="h-full p-3  w-full object-cover">
                  <img
                    src={URL.createObjectURL(invoiceForm.image)}
                    alt="Invoice image"
                    className="h-full p-3  w-full object-cover"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="flex items-center text-gray-600">
                    <Edit2Icon className="w-4 h-4 mr-1" />
                    <p className="text-md ">Edit</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Input
              type="file"
              className="hidden "
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </>
        ) : (
          <Button variant="ghost">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              className="mr-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.01038 0.6875C7.29553 0.6875 6.60413 0.845703 5.93616 1.16211C5.32678 1.45508 4.78186 1.87109 4.30139 2.41016L4.2135 2.39258C4.15491 2.38086 4.10803 2.375 4.07288 2.375C3.66272 2.375 3.28772 2.48047 2.94788 2.69141C2.60803 2.89063 2.33264 3.16016 2.1217 3.5C1.92249 3.83984 1.82288 4.21484 1.82288 4.625C1.31897 4.92969 0.914673 5.32227 0.609985 5.80273C0.293579 6.30664 0.135376 6.85742 0.135376 7.45508C0.135376 8.05273 0.28772 8.60938 0.592407 9.125C0.897095 9.64062 1.30725 10.0508 1.82288 10.3555C2.3385 10.6602 2.901 10.8125 3.51038 10.8125H6.32288V9.6875H3.51038C3.10022 9.6875 2.71936 9.58789 2.3678 9.38867C2.02795 9.18945 1.75842 8.91992 1.5592 8.58008C1.35999 8.22852 1.26038 7.84766 1.26038 7.4375C1.26038 6.98047 1.38342 6.56445 1.62952 6.18945C1.88733 5.81445 2.22131 5.53906 2.63147 5.36328L3.01819 5.20508L2.94788 4.625C2.94788 4.30859 3.05334 4.04492 3.26428 3.83398C3.48694 3.61133 3.75647 3.5 4.07288 3.5C4.15491 3.5 4.2428 3.51172 4.33655 3.53516L4.68811 3.62305L4.89905 3.3418C5.26233 2.87305 5.7135 2.50391 6.25256 2.23438C6.80334 1.95312 7.38342 1.8125 7.9928 1.8125C8.60217 1.8125 9.17053 1.94141 9.69788 2.19922C10.2369 2.45703 10.6881 2.81445 11.0514 3.27148C11.4264 3.7168 11.6842 4.2207 11.8248 4.7832L11.9303 5.22266L12.4049 5.20508C12.6158 5.19336 12.651 5.1875 12.5104 5.1875C12.9205 5.1875 13.2955 5.28711 13.6354 5.48633C13.9869 5.68555 14.2623 5.96094 14.4615 6.3125C14.6608 6.65234 14.7604 7.02734 14.7604 7.4375C14.7604 7.84766 14.6608 8.22852 14.4615 8.58008C14.2623 8.91992 13.9869 9.18945 13.6354 9.38867C13.2955 9.58789 12.9205 9.6875 12.5104 9.6875H9.69788V10.8125H12.5104C13.1198 10.8125 13.6823 10.6602 14.1979 10.3555C14.7135 10.0508 15.1237 9.64062 15.4283 9.125C15.733 8.60938 15.8854 8.04688 15.8854 7.4375C15.8854 6.85156 15.7448 6.3125 15.4635 5.82031C15.1823 5.32812 14.8014 4.93555 14.3209 4.64258C13.8405 4.33789 13.3131 4.16211 12.7389 4.11523C12.5045 3.45898 12.153 2.87305 11.6842 2.35742C11.2272 1.83008 10.6881 1.42578 10.067 1.14453C9.42249 0.839844 8.73694 0.6875 8.01038 0.6875ZM8.01038 5.1875L5.76038 7.4375H7.44788V11.9375H8.57288V7.4375H10.2604L8.01038 5.1875Z"
                fill="#1C1D21"
              />
            </svg>
            Upload Image
            <Input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="invoiceNumber">Invoice Number</Label>
          <div className="flex items-center">
          <Input
            type="text"
            placeholder="Start typing..."
            className="w-full"
            value={invoiceForm.invoiceNumber}
            onChange={setInvoiceNumber}
          /><svg width="16" height="14" viewBox="0 0 16 14" className="ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.6875 0.743851V10.8689C0.6875 11.279 0.787109 11.6599 0.986328 12.0114C1.18555 12.3513 1.45508 12.6208 1.79492 12.82C2.14648 13.0192 2.52734 13.1189 2.9375 13.1189H13.0625C13.4727 13.1189 13.8477 13.0192 14.1875 12.82C14.5391 12.6208 14.8145 12.3513 15.0137 12.0114C15.2129 11.6599 15.3125 11.279 15.3125 10.8689V4.68135H11.9375V0.743851H0.6875ZM1.8125 1.86885H10.8125V10.8689C10.8125 11.2556 10.918 11.6306 11.1289 11.9939H2.9375C2.59766 11.9939 2.32227 11.8942 2.11133 11.695C1.91211 11.4841 1.8125 11.2087 1.8125 10.8689V1.86885ZM2.9375 2.99385V5.80635H9.6875V2.99385H2.9375ZM4.0625 4.11885H8.5625V4.68135H4.0625V4.11885ZM11.9375 5.80635H14.1875V10.8689C14.1875 11.2087 14.082 11.4841 13.8711 11.695C13.6719 11.8942 13.4023 11.9939 13.0625 11.9939C12.7227 11.9939 12.4473 11.8942 12.2363 11.695C12.0371 11.4841 11.9375 11.2087 11.9375 10.8689V5.80635ZM2.9375 6.36885V7.49385H5.75V6.36885H2.9375ZM6.875 6.36885V7.49385H9.6875V6.36885H6.875ZM2.9375 8.05635V9.18135H5.75V8.05635H2.9375ZM6.875 8.05635V9.18135H9.6875V8.05635H6.875ZM2.9375 9.74385V10.8689H5.75V9.74385H2.9375ZM6.875 9.74385V10.8689H9.6875V9.74385H6.875Z" fill="#1C1D21"/>
          </svg>
          
          </div>
        </div>
      </div>
    </div>
  );
}
