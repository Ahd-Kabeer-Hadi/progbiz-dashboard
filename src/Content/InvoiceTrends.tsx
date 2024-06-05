import { InvoiceCardProps } from "@/components/Invoice-info-card";

export const InvoiceInfo: InvoiceCardProps[] = [
  {
    invoiceId: "1",
    invoiceTitle: "All Invoices",
    invoiceDiscription: "Week comparison",
    progress: 73,
    avarage: "1.345",
    trend: "up",
    progressClassName: "bg-[#5E81F4] h-[3px]",
  },
  {
    invoiceId: "2",
    invoiceTitle: "Scheduled",
    invoiceDiscription: "Month comparison",
    progress: 63,
    avarage: "3.820",
    progressClassName: "bg-[#F4BE5E]",
  },
  {
    invoiceId: "3",
    invoiceTitle: "Unpaid",
    invoiceDiscription: "Week comparison",
    progress: 28,
    trend: "up",
    avarage: "$4690",
    progressClassName: "bg-[#FF808B]",
  },
  {
    invoiceId: "4",
    invoiceTitle: "Paid",
    invoiceDiscription: "Month comparison",
    progress: 88,
    avarage: "$3820",
    progressClassName: "bg-[#7CE7AC]",
  },
];
