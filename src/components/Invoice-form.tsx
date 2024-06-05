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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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

  const handleInputChange =
    (fieldName: keyof InvoiceFormState) =>
    (event: React.ChangeEvent<HTMLInputElement> | string) => {
      const value = typeof event === "string" ? event : event.target.value;
      setInvoiceForm((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));

      console.log(invoiceForm);
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
          <Label className="text-muted-foreground" htmlFor="invoiceNumber">
            Invoice Number
          </Label>
          <div className="flex items-center">
            <Input
              type="text"
              name="invoiceNumber"
              placeholder="Start typing..."
              className="w-full"
              value={invoiceForm.invoiceNumber}
              onChange={handleInputChange("invoiceNumber")}
            />
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              className={`ml-2 ${
                invoiceForm.invoiceNumber !== ""
                  ? "fill-[#1C1D21]"
                  : "fill-[#8181A5]"
              }`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.6875 0.743851V10.8689C0.6875 11.279 0.787109 11.6599 0.986328 12.0114C1.18555 12.3513 1.45508 12.6208 1.79492 12.82C2.14648 13.0192 2.52734 13.1189 2.9375 13.1189H13.0625C13.4727 13.1189 13.8477 13.0192 14.1875 12.82C14.5391 12.6208 14.8145 12.3513 15.0137 12.0114C15.2129 11.6599 15.3125 11.279 15.3125 10.8689V4.68135H11.9375V0.743851H0.6875ZM1.8125 1.86885H10.8125V10.8689C10.8125 11.2556 10.918 11.6306 11.1289 11.9939H2.9375C2.59766 11.9939 2.32227 11.8942 2.11133 11.695C1.91211 11.4841 1.8125 11.2087 1.8125 10.8689V1.86885ZM2.9375 2.99385V5.80635H9.6875V2.99385H2.9375ZM4.0625 4.11885H8.5625V4.68135H4.0625V4.11885ZM11.9375 5.80635H14.1875V10.8689C14.1875 11.2087 14.082 11.4841 13.8711 11.695C13.6719 11.8942 13.4023 11.9939 13.0625 11.9939C12.7227 11.9939 12.4473 11.8942 12.2363 11.695C12.0371 11.4841 11.9375 11.2087 11.9375 10.8689V5.80635ZM2.9375 6.36885V7.49385H5.75V6.36885H2.9375ZM6.875 6.36885V7.49385H9.6875V6.36885H6.875ZM2.9375 8.05635V9.18135H5.75V8.05635H2.9375ZM6.875 8.05635V9.18135H9.6875V8.05635H6.875ZM2.9375 9.74385V10.8689H5.75V9.74385H2.9375ZM6.875 9.74385V10.8689H9.6875V9.74385H6.875Z" />
            </svg>
          </div>
        </div>
        <div>
          <Label className="text-muted-foreground" htmlFor="template">
            Template
          </Label>
          <div className="flex items-center">
            <Select
              onValueChange={handleInputChange("template")}
              defaultValue="default"
            >
              <SelectTrigger>
                <SelectValue
                  id="template"
                  placeholder="Select invoice template"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default" className="text-muted-foreground">
                  Select invoice template
                </SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label className="text-muted-foreground" htmlFor="companyName">
            Company name
          </Label>
          <div className="flex items-center">
            <Input
              type="text"
              name="companyName"
              placeholder="Start typing..."
              className="w-full"
              value={invoiceForm.companyName}
              onChange={handleInputChange("companyName")}
            />
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              className={`ml-2 ${
                invoiceForm.companyName !== ""
                  ? "fill-[#1C1D21]"
                  : "fill-[#8181A5]"
              }`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.25 0.0990295V2.15567L0.5625 4.40567V4.59903C0.5625 5.05606 0.726562 5.4545 1.05469 5.79434C1.39453 6.12247 1.79297 6.28653 2.25 6.28653V13.599H15.75V6.28653C16.207 6.28653 16.5996 6.12247 16.9277 5.79434C17.2676 5.4545 17.4375 5.05606 17.4375 4.59903V4.40567L15.75 2.15567V0.0990295H2.25ZM3.375 1.22403H14.625V1.78653H3.375V1.22403ZM3.09375 2.91153H14.9062L16.2598 4.72208C16.2246 4.85098 16.1602 4.95645 16.0664 5.03848C15.9844 5.12051 15.8789 5.16153 15.75 5.16153C15.5977 5.16153 15.4629 5.1088 15.3457 5.00333C15.2402 4.88614 15.1875 4.75137 15.1875 4.59903H14.0625C14.0625 4.75137 14.0039 4.88614 13.8867 5.00333C13.7812 5.1088 13.6523 5.16153 13.5 5.16153C13.3477 5.16153 13.2129 5.1088 13.0957 5.00333C12.9902 4.88614 12.9375 4.75137 12.9375 4.59903H11.8125C11.8125 4.75137 11.7539 4.88614 11.6367 5.00333C11.5312 5.1088 11.4023 5.16153 11.25 5.16153C11.0977 5.16153 10.9629 5.1088 10.8457 5.00333C10.7402 4.88614 10.6875 4.75137 10.6875 4.59903H9.5625C9.5625 4.75137 9.50391 4.88614 9.38672 5.00333C9.28125 5.1088 9.15234 5.16153 9 5.16153C8.84766 5.16153 8.71289 5.1088 8.5957 5.00333C8.49023 4.88614 8.4375 4.75137 8.4375 4.59903H7.3125C7.3125 4.75137 7.25391 4.88614 7.13672 5.00333C7.03125 5.1088 6.90234 5.16153 6.75 5.16153C6.59766 5.16153 6.46289 5.1088 6.3457 5.00333C6.24023 4.88614 6.1875 4.75137 6.1875 4.59903H5.0625C5.0625 4.75137 5.00391 4.88614 4.88672 5.00333C4.78125 5.1088 4.65234 5.16153 4.5 5.16153C4.34766 5.16153 4.21289 5.1088 4.0957 5.00333C3.99023 4.88614 3.9375 4.75137 3.9375 4.59903H2.8125C2.8125 4.75137 2.75391 4.88614 2.63672 5.00333C2.53125 5.1088 2.40234 5.16153 2.25 5.16153C2.12109 5.16153 2.00977 5.12051 1.91602 5.03848C1.83398 4.95645 1.77539 4.85098 1.74023 4.72208L3.09375 2.91153ZM3.375 5.84708C3.70312 6.14005 4.07812 6.28653 4.5 6.28653C4.92188 6.28653 5.29688 6.14005 5.625 5.84708C5.95312 6.14005 6.32812 6.28653 6.75 6.28653C7.17188 6.28653 7.54688 6.14005 7.875 5.84708C8.20312 6.14005 8.57812 6.28653 9 6.28653C9.42188 6.28653 9.79688 6.14005 10.125 5.84708C10.4531 6.14005 10.8281 6.28653 11.25 6.28653C11.6719 6.28653 12.0469 6.14005 12.375 5.84708C12.7031 6.14005 13.0781 6.28653 13.5 6.28653C13.9219 6.28653 14.2969 6.14005 14.625 5.84708V9.66153H3.375V5.84708ZM3.375 10.7865H14.625V12.474H3.375V10.7865Z" />
            </svg>
          </div>
        </div>
        <div>
          <Label className="text-muted-foreground" htmlFor="dueDate">
            Date
          </Label>
          <div className="flex items-center">
            {/* this can be a custom date input to adhere the UI design spec */}

            <Input
              type="date"
              name="dueDate"
              placeholder="select due date"
              className="grid appearance-none bg-transparent w-full text-[#8181A5] mr-3 py-1 px-2 leading-tight focus:outline-none"
              value={invoiceForm.dueDate}
              onChange={handleInputChange("dueDate")}
            />
            <svg
              width="13"
              height="14"
              className={`ml-2 ${
                invoiceForm.dueDate !== "" ? "fill-[#1C1D21]" : "fill-[#8181A5]"
              }`}
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.45532 0.0990295V0.66153H0.205322V13.0365H12.5803V0.66153H10.3303V0.0990295H9.20532V0.66153H3.58032V0.0990295H2.45532ZM1.33032 1.78653H2.45532V2.34903H3.58032V1.78653H9.20532V2.34903H10.3303V1.78653H11.4553V2.91153H1.33032V1.78653ZM1.33032 4.03653H11.4553V11.9115H1.33032V4.03653ZM4.70532 5.16153V6.28653H5.83032V5.16153H4.70532ZM6.95532 5.16153V6.28653H8.08032V5.16153H6.95532ZM9.20532 5.16153V6.28653H10.3303V5.16153H9.20532ZM2.45532 7.41153V8.53653H3.58032V7.41153H2.45532ZM4.70532 7.41153V8.53653H5.83032V7.41153H4.70532ZM6.95532 7.41153V8.53653H8.08032V7.41153H6.95532ZM9.20532 7.41153V8.53653H10.3303V7.41153H9.20532ZM2.45532 9.66153V10.7865H10.3303V9.66153H2.45532Z" />
            </svg>
          </div>
        </div>

        <div className="w-full md:col-span-2">
          <Label className="text-muted-foreground" htmlFor="businessAddress">
            Business address
          </Label>
          <div className="flex items-center">
            <Input
              type="text"
              name="businessAddress"
              placeholder="Start typing..."
              className="w-full"
              value={invoiceForm.businessAddress}
              onChange={handleInputChange("businessAddress")}
            />
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              className={`ml-2 ${
                invoiceForm.businessAddress !== ""
                  ? "fill-[#1C1D21]"
                  : "fill-[#8181A5]"
              }`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.625 0.94635L0.6875 2.9151V14.5167H15.3125V4.39166H8.5625V2.9151L4.625 0.94635ZM4.625 2.21198L7.4375 3.61823V13.3917H1.8125V3.61823L4.625 2.21198ZM2.9375 4.39166V5.51666H4.0625V4.39166H2.9375ZM5.1875 4.39166V5.51666H6.3125V4.39166H5.1875ZM8.5625 5.51666H14.1875V13.3917H8.5625V5.51666ZM2.9375 6.64166V7.76666H4.0625V6.64166H2.9375ZM5.1875 6.64166V7.76666H6.3125V6.64166H5.1875ZM9.6875 6.64166V7.76666H10.8125V6.64166H9.6875ZM11.9375 6.64166V7.76666H13.0625V6.64166H11.9375ZM2.9375 8.89166V10.0167H4.0625V8.89166H2.9375ZM5.1875 8.89166V10.0167H6.3125V8.89166H5.1875ZM9.6875 8.89166V10.0167H10.8125V8.89166H9.6875ZM11.9375 8.89166V10.0167H13.0625V8.89166H11.9375ZM2.9375 11.1417V12.2667H4.0625V11.1417H2.9375ZM5.1875 11.1417V12.2667H6.3125V11.1417H5.1875ZM9.6875 11.1417V12.2667H10.8125V11.1417H9.6875ZM11.9375 11.1417V12.2667H13.0625V11.1417H11.9375Z" />
            </svg>
          </div>
        </div>

        <div>
          <Label className="text-muted-foreground" htmlFor="country">
            Country
          </Label>
          <div className="flex items-center">
            <Select
              onValueChange={handleInputChange("country")}
              defaultValue="default"
            >
              <SelectTrigger>
                <SelectValue id="country" placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default" className="text-muted-foreground">
                  Select country
                </SelectItem>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="UAE">UAE</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label className="text-muted-foreground" htmlFor="city">
            City
          </Label>
          <div className="flex items-center">
            <Select
              onValueChange={handleInputChange("city")}
              defaultValue="default"
            >
              <SelectTrigger>
                <SelectValue id="city" placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default" className="text-muted-foreground">
                  Select city
                </SelectItem>
                <SelectItem value="Colombo">Colombo</SelectItem>
                <SelectItem value="New Delhi">New Delhi</SelectItem>
                <SelectItem value="Kochin">Kochin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label className="text-muted-foreground" htmlFor="phoneNumber">
            Phone number
          </Label>
          <div className="flex items-center">
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Start typing..."
              className="w-full"
              value={invoiceForm.phoneNumber}
              onChange={handleInputChange("phoneNumber")}
            />

            <svg
              width="14"
              height="15"
              className={`ml-2 ${
                invoiceForm.phoneNumber !== ""
                  ? "fill-[#1C1D21]"
                  : "fill-[#8181A5]"
              }`}
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.75 0.41449V3.22699H3.625V2.10199H0.25V12.227H1.375V12.7895C1.375 13.2465 1.53906 13.6391 1.86719 13.9672C2.20703 14.3071 2.60547 14.477 3.0625 14.477C3.51953 14.477 3.91211 14.3071 4.24023 13.9672C4.58008 13.6391 4.75 13.2465 4.75 12.7895V12.227H13.75V3.22699H11.5V0.41449H4.75ZM5.875 1.53949H10.375V4.35199H5.875V1.53949ZM1.375 3.22699H2.5V11.102H1.375V3.22699ZM3.625 4.35199H4.75V5.47699H11.5V4.35199H12.625V11.102H3.625V4.35199ZM5.3125 6.60199V7.72699H6.4375V6.60199H5.3125ZM7.5625 6.60199V7.72699H8.6875V6.60199H7.5625ZM9.8125 6.60199V7.72699H10.9375V6.60199H9.8125ZM5.3125 8.85199V9.97699H6.4375V8.85199H5.3125ZM7.5625 8.85199V9.97699H8.6875V8.85199H7.5625ZM9.8125 8.85199V9.97699H10.9375V8.85199H9.8125ZM2.5 12.227H3.625V12.7895C3.625 12.9418 3.56641 13.0766 3.44922 13.1938C3.34375 13.2993 3.21484 13.352 3.0625 13.352C2.91016 13.352 2.77539 13.2993 2.6582 13.1938C2.55273 13.0766 2.5 12.9418 2.5 12.7895V12.227Z" />
            </svg>
          </div>
        </div>
        <div>
          <Label className="text-muted-foreground" htmlFor="email">
            Email
          </Label>
          <div className="flex items-center">
            <Input
              type="text"
              name="email"
              placeholder="Start typing..."
              className="w-full"
              value={invoiceForm.email}
              onChange={handleInputChange("email")}
            />

            <svg
              width="15"
              height="15"
              className={`ml-2 ${
                invoiceForm.email !== "" ? "fill-[#1C1D21]" : "fill-[#8181A5]"
              }`}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.39282 0.28949L7.09399 0.482849L0.0803223 5.05316V14.9145H14.7053V5.05316L7.69165 0.482849L7.39282 0.28949ZM7.39282 1.62543L13.1233 5.35199L7.39282 9.06097L1.66235 5.35199L7.39282 1.62543ZM1.20532 6.3891L7.09399 10.2036L7.39282 10.3969L13.5803 6.3891V13.7895H1.20532V6.3891Z" />
            </svg>
          </div>
        </div>
        <div>
          <Label className="text-muted-foreground" htmlFor="taxRate">
            Tax rate
          </Label>
          <div className="flex items-center">
            <Input
              type="text"
              name="taxRate"
              placeholder="Start typing..."
              className="w-full"
              value={invoiceForm.taxRate}
              onChange={handleInputChange("taxRate")}
            />

            <svg
              width="16"
              height="13"
              className={`ml-2 ${
                invoiceForm.taxRate !== "" ? "fill-[#1C1D21]" : "fill-[#8181A5]"
              }`}
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0.332092C7.63672 0.332092 7.30859 0.437561 7.01562 0.648499C6.73438 0.859436 6.53516 1.12897 6.41797 1.45709H2.375V2.58209H3.16602L0.757812 6.80084L0.6875 6.94147V7.08209C0.6875 7.586 0.810547 8.05475 1.05664 8.48834C1.31445 8.92194 1.66016 9.26764 2.09375 9.52545C2.52734 9.77155 2.99609 9.89459 3.5 9.89459C4.00391 9.89459 4.47266 9.77155 4.90625 9.52545C5.33984 9.26764 5.67969 8.92194 5.92578 8.48834C6.18359 8.05475 6.3125 7.586 6.3125 7.08209V6.94147L6.24219 6.80084L3.83398 2.58209H6.41797C6.5 2.81647 6.62891 3.0274 6.80469 3.2149C6.99219 3.39069 7.20312 3.51959 7.4375 3.60162V11.0196H5.1875V12.1446H10.8125V11.0196H8.5625V3.60162C8.79688 3.51959 9.00195 3.39069 9.17773 3.2149C9.36523 3.0274 9.5 2.81647 9.58203 2.58209H12.166L9.75781 6.80084L9.6875 6.94147V7.08209C9.6875 7.586 9.81055 8.05475 10.0566 8.48834C10.3145 8.92194 10.6602 9.26764 11.0938 9.52545C11.5273 9.77155 11.9961 9.89459 12.5 9.89459C13.0039 9.89459 13.4727 9.77155 13.9062 9.52545C14.3398 9.26764 14.6797 8.92194 14.9258 8.48834C15.1836 8.05475 15.3125 7.586 15.3125 7.08209V6.94147L15.2422 6.80084L12.834 2.58209H13.625V1.45709H9.58203C9.46484 1.12897 9.25977 0.859436 8.9668 0.648499C8.68555 0.437561 8.36328 0.332092 8 0.332092ZM8 1.45709C8.16406 1.45709 8.29883 1.50983 8.4043 1.6153C8.50977 1.72076 8.5625 1.85553 8.5625 2.01959C8.5625 2.17194 8.50977 2.3067 8.4043 2.42389C8.29883 2.52936 8.16406 2.58209 8 2.58209C7.84766 2.58209 7.71289 2.52936 7.5957 2.42389C7.49023 2.3067 7.4375 2.17194 7.4375 2.01959C7.4375 1.85553 7.49023 1.72076 7.5957 1.6153C7.71289 1.50983 7.84766 1.45709 8 1.45709ZM3.5 4.28717L4.7832 6.51959H2.2168L3.5 4.28717ZM12.5 4.28717L13.7832 6.51959H11.2168L12.5 4.28717ZM1.95312 7.64459H5.04688C4.92969 7.97272 4.73047 8.24225 4.44922 8.45319C4.17969 8.66412 3.86328 8.76959 3.5 8.76959C3.13672 8.76959 2.81445 8.66412 2.5332 8.45319C2.26367 8.24225 2.07031 7.97272 1.95312 7.64459ZM10.9531 7.64459H14.0469C13.9297 7.97272 13.7305 8.24225 13.4492 8.45319C13.1797 8.66412 12.8633 8.76959 12.5 8.76959C12.1367 8.76959 11.8145 8.66412 11.5332 8.45319C11.2637 8.24225 11.0703 7.97272 10.9531 7.64459Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-12 md:pt-24">
        <div className="w-full  flex flex-col md:flex-row gap-2 items-center">
          <Button className="w-full text-white bg-[#5E81F4]">
            Save & Send
          </Button>
          <Button
            variant={"ghost"}
            className="w-full bg-[#5E81F4]/10 text-[#5E81F4]"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
