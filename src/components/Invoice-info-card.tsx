import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";

export interface InvoiceCardProps {
  invoiceId: string;
  invoiceTitle: string;
  invoiceDiscription: string;
  progress: number;
  avarage: string;
  trend?: "up" | "down";
  progressClassName?: string;
}

export default function InvoiceInfoCard({
  invoiceId,
  invoiceTitle,
  invoiceDiscription,
  progress,
  avarage,
  trend,
  progressClassName,
}: InvoiceCardProps) {
  // @ts-ignore : just to fix the types
  const invoiceIdNum = Number(invoiceId);
  return (
    <div className="pt-5">
      <Card className="bg-[#F5F5FA]/40 border-0 shadow-none">
        <CardHeader className="flex flex-col px-5 py-2">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>{invoiceTitle}</CardTitle>
              <CardDescription>{invoiceDiscription}</CardDescription>
            </div>
            <div className="flex justify-between items-center gap-1">
              <CardTitle>{avarage}</CardTitle>
              {trend ?
                (trend === "up" ? (
                  <svg
                    width="10"
                    height="13"
                    viewBox="0 0 10 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M5 0.875305L4.64062 1.21906L0.390625 5.46906L1.10938 6.18781L4.5 2.79718V12.8284H5.5V2.79718L8.89062 6.18781L9.60938 5.46906L5.35938 1.21906L5 0.875305Z"
                      fill="#7CE7AC"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 rotate-180"
                  >
                    <path
                      d="M5 0.875305L4.64062 1.21906L0.390625 5.46906L1.10938 6.18781L4.5 2.79718V12.8284H5.5V2.79718L8.89062 6.18781L9.60938 5.46906L5.35938 1.21906L5 0.875305Z"
                      fill="#E77C7C"
                    />
                  </svg>
                )): (<div className="w-4 h-4"></div>)}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="h-1" progressClassName={progressClassName} />
        </CardContent>
      </Card>
    </div>
  );
}
