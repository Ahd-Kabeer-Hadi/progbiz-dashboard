// to imitate a real menu which loads from a database

import { MenuItemProps } from "@/components/Menu-item";

export const menuItems: MenuItemProps[] = [
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="18"
        height="15"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 18 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 0.875C7.51042 0.875 6.12109 1.25456 4.83203 2.01367C3.58594 2.72982 2.60482 3.71094 1.88867 4.95703C1.12956 6.24609 0.75 7.63542 0.75 9.125C0.75 10.099 0.914714 11.0443 1.24414 11.9609C1.57357 12.8346 2.03906 13.6367 2.64062 14.3672L2.83398 14.625H15.166L15.3594 14.3672C15.9609 13.6367 16.4264 12.8346 16.7559 11.9609C17.0853 11.0443 17.25 10.099 17.25 9.125C17.25 7.63542 16.8776 6.24609 16.1328 4.95703C15.4023 3.71094 14.4141 2.72982 13.168 2.01367C11.8789 1.25456 10.4896 0.875 9 0.875ZM9 2.25C10.2461 2.25 11.4062 2.5651 12.4805 3.19531C13.5117 3.79688 14.3281 4.61328 14.9297 5.64453C15.5599 6.71875 15.875 7.87891 15.875 9.125C15.875 9.88411 15.7461 10.6217 15.4883 11.3379C15.2448 12.0254 14.901 12.6628 14.457 13.25H3.54297C3.09896 12.6628 2.75521 12.0254 2.51172 11.3379C2.25391 10.6217 2.125 9.88411 2.125 9.125C2.125 7.87891 2.4401 6.71875 3.07031 5.64453C3.67188 4.61328 4.48828 3.79688 5.51953 3.19531C6.59375 2.5651 7.75391 2.25 9 2.25ZM9 2.9375C8.8138 2.9375 8.64909 3.00911 8.50586 3.15234C8.37695 3.28125 8.3125 3.4388 8.3125 3.625C8.3125 3.8112 8.37695 3.97591 8.50586 4.11914C8.64909 4.24805 8.8138 4.3125 9 4.3125C9.1862 4.3125 9.34375 4.24805 9.47266 4.11914C9.61589 3.97591 9.6875 3.8112 9.6875 3.625C9.6875 3.4388 9.61589 3.28125 9.47266 3.15234C9.34375 3.00911 9.1862 2.9375 9 2.9375ZM6.25 3.66797C6.0638 3.66797 5.89909 3.73958 5.75586 3.88281C5.62695 4.01172 5.5625 4.16927 5.5625 4.35547C5.5625 4.54167 5.62695 4.70638 5.75586 4.84961C5.89909 4.97852 6.0638 5.04297 6.25 5.04297C6.4362 5.04297 6.59375 4.97852 6.72266 4.84961C6.86589 4.70638 6.9375 4.54167 6.9375 4.35547C6.9375 4.16927 6.86589 4.01172 6.72266 3.88281C6.59375 3.73958 6.4362 3.66797 6.25 3.66797ZM11.75 3.66797C11.5638 3.66797 11.3991 3.73958 11.2559 3.88281C11.127 4.01172 11.0625 4.16927 11.0625 4.35547C11.0625 4.54167 11.127 4.70638 11.2559 4.84961C11.3991 4.97852 11.5638 5.04297 11.75 5.04297C11.9362 5.04297 12.0938 4.97852 12.2227 4.84961C12.3659 4.70638 12.4375 4.54167 12.4375 4.35547C12.4375 4.16927 12.3659 4.01172 12.2227 3.88281C12.0938 3.73958 11.9362 3.66797 11.75 3.66797ZM4.23047 5.6875C4.04427 5.6875 3.87956 5.75911 3.73633 5.90234C3.60742 6.03125 3.54297 6.1888 3.54297 6.375C3.54297 6.5612 3.60742 6.72591 3.73633 6.86914C3.87956 6.99805 4.04427 7.0625 4.23047 7.0625C4.41667 7.0625 4.57422 6.99805 4.70312 6.86914C4.84635 6.72591 4.91797 6.5612 4.91797 6.375C4.91797 6.1888 4.84635 6.03125 4.70312 5.90234C4.57422 5.75911 4.41667 5.6875 4.23047 5.6875ZM13.5762 5.70898L9.6875 7.94336C9.47266 7.81445 9.24349 7.75 9 7.75C8.61328 7.75 8.28385 7.88607 8.01172 8.1582C7.75391 8.41602 7.625 8.73828 7.625 9.125C7.625 9.51172 7.75391 9.84115 8.01172 10.1133C8.28385 10.3711 8.60612 10.5 8.97852 10.5C9.36523 10.5 9.69466 10.3711 9.9668 10.1133C10.2389 9.84115 10.375 9.51888 10.375 9.14648V9.125L14.2637 6.91211L13.5762 5.70898ZM3.5 8.4375C3.3138 8.4375 3.14909 8.50911 3.00586 8.65234C2.87695 8.78125 2.8125 8.9388 2.8125 9.125C2.8125 9.3112 2.87695 9.47591 3.00586 9.61914C3.14909 9.74805 3.3138 9.8125 3.5 9.8125C3.6862 9.8125 3.84375 9.74805 3.97266 9.61914C4.11589 9.47591 4.1875 9.3112 4.1875 9.125C4.1875 8.9388 4.11589 8.78125 3.97266 8.65234C3.84375 8.50911 3.6862 8.4375 3.5 8.4375ZM14.5 8.4375C14.3138 8.4375 14.1491 8.50911 14.0059 8.65234C13.877 8.78125 13.8125 8.9388 13.8125 9.125C13.8125 9.3112 13.877 9.47591 14.0059 9.61914C14.1491 9.74805 14.3138 9.8125 14.5 9.8125C14.6862 9.8125 14.8438 9.74805 14.9727 9.61914C15.1159 9.47591 15.1875 9.3112 15.1875 9.125C15.1875 8.9388 15.1159 8.78125 14.9727 8.65234C14.8438 8.50911 14.6862 8.4375 14.5 8.4375ZM4.23047 11.1875C4.04427 11.1875 3.87956 11.2591 3.73633 11.4023C3.60742 11.5312 3.54297 11.6888 3.54297 11.875C3.54297 12.0612 3.60742 12.2259 3.73633 12.3691C3.87956 12.498 4.04427 12.5625 4.23047 12.5625C4.41667 12.5625 4.57422 12.498 4.70312 12.3691C4.84635 12.2259 4.91797 12.0612 4.91797 11.875C4.91797 11.6888 4.84635 11.5312 4.70312 11.4023C4.57422 11.2591 4.41667 11.1875 4.23047 11.1875ZM13.7695 11.1875C13.5833 11.1875 13.4186 11.2591 13.2754 11.4023C13.1465 11.5312 13.082 11.6888 13.082 11.875C13.082 12.0612 13.1465 12.2259 13.2754 12.3691C13.4186 12.498 13.5833 12.5625 13.7695 12.5625C13.9557 12.5625 14.1133 12.498 14.2422 12.3691C14.3854 12.2259 14.457 12.0612 14.457 11.875C14.457 11.6888 14.3854 11.5312 14.2422 11.4023C14.1133 11.2591 13.9557 11.1875 13.7695 11.1875Z" />
      </svg>
    ),
    title: "Home",
    path: "/",
  },
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="20"
        height="16"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.9375 0.1875C7.5651 0.1875 7.24284 0.323568 6.9707 0.595703C6.69857 0.867839 6.5625 1.1901 6.5625 1.5625V2.9375H0.375V15.3125H19.625V2.9375H13.4375V1.5625C13.4375 1.1901 13.3014 0.867839 13.0293 0.595703C12.7572 0.323568 12.4349 0.1875 12.0625 0.1875H7.9375ZM7.9375 1.5625H12.0625V2.9375H7.9375V1.5625ZM1.75 4.3125H18.25V7.75H15.5V7.0625H12.75V7.75H7.25V7.0625H4.5V7.75H1.75V4.3125ZM1.75 9.125H4.5V9.8125H7.25V9.125H12.75V9.8125H15.5V9.125H18.25V13.9375H1.75V9.125Z" />
      </svg>
    ),
    title: "Dashboard",
    path: "/",
  },
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="16"
        height="19"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0.125C7.58464 0.125 7.2194 0.261068 6.9043 0.533203C6.60352 0.776693 6.37435 1.09896 6.2168 1.5H0.4375V18.6875H15.5625V1.5H9.7832C9.62565 1.09896 9.39648 0.776693 9.0957 0.533203C8.7806 0.261068 8.41536 0.125 8 0.125ZM8 1.5C8.1862 1.5 8.34375 1.57161 8.47266 1.71484C8.61589 1.84375 8.6875 2.0013 8.6875 2.1875V2.875H10.75V4.25H5.25V2.875H7.3125V2.1875C7.3125 2.0013 7.37695 1.84375 7.50586 1.71484C7.64909 1.57161 7.8138 1.5 8 1.5ZM1.8125 2.875H3.875V5.625H12.125V2.875H14.1875V17.3125H1.8125V2.875ZM11.6309 7.88086L7.3125 12.1992L5.05664 9.94336L4.06836 10.9316L6.81836 13.6816L7.3125 14.1543L7.80664 13.6816L12.6191 8.86914L11.6309 7.88086Z" />
      </svg>
    ),
    title: "Tasks",
    path: "/",
  },
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="20"
        height="16"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.375 0.1875V12.5625H3.125V15.3125H19.625V2.9375H16.875V0.1875H0.375ZM1.75 1.5625H15.5V11.1875H1.75V1.5625ZM3.125 2.9375V9.8125H14.125V2.9375H3.125ZM4.5 4.3125H12.75V8.4375H4.5V4.3125ZM16.875 4.3125H18.25V13.9375H4.5V12.5625H16.875V4.3125Z" />
      </svg>
    ),
    title: "Timeline",
    path: "/",
  },
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="16"
        height="17"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.1875 0.5V1.1875H0.4375V16.3125H15.5625V1.1875H12.8125V0.5H11.4375V1.1875H4.5625V0.5H3.1875ZM1.8125 2.5625H3.1875V3.25H4.5625V2.5625H11.4375V3.25H12.8125V2.5625H14.1875V3.9375H1.8125V2.5625ZM1.8125 5.3125H14.1875V14.9375H1.8125V5.3125ZM5.9375 6.6875V8.0625H7.3125V6.6875H5.9375ZM8.6875 6.6875V8.0625H10.0625V6.6875H8.6875ZM11.4375 6.6875V8.0625H12.8125V6.6875H11.4375ZM3.1875 9.4375V10.8125H4.5625V9.4375H3.1875ZM5.9375 9.4375V10.8125H7.3125V9.4375H5.9375ZM8.6875 9.4375V10.8125H10.0625V9.4375H8.6875ZM11.4375 9.4375V10.8125H12.8125V9.4375H11.4375ZM3.1875 12.1875V13.5625H12.8125V12.1875H3.1875Z" />
      </svg>
    ),
    title: "Bookings",
    path: "/",
  },
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="18"
        height="19"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 0.1875C6.1263 0.1875 5.31706 0.402344 4.57227 0.832031C3.8418 1.26172 3.26172 1.84896 2.83203 2.59375C2.40234 3.32422 2.1875 4.1263 2.1875 5C2.1875 5.83073 2.3737 6.59701 2.74609 7.29883C3.13281 7.98633 3.64844 8.55208 4.29297 8.99609C3.47656 9.35417 2.75326 9.84831 2.12305 10.4785C1.49284 11.1087 1.00586 11.832 0.662109 12.6484C0.304036 13.4935 0.125 14.3815 0.125 15.3125H1.5C1.5 14.3242 1.74349 13.4076 2.23047 12.5625C2.73177 11.7174 3.40495 11.0514 4.25 10.5645C5.09505 10.0632 6.01172 9.8125 7 9.8125C7.83073 9.8125 8.61133 9.9987 9.3418 10.3711V10.3496C9.4707 10.0775 9.57812 9.87695 9.66406 9.74805C9.79297 9.5332 9.9362 9.34701 10.0938 9.18945L9.68555 9.01758C10.3444 8.57357 10.86 8.00065 11.2324 7.29883C11.6191 6.59701 11.8125 5.83073 11.8125 5C11.8125 4.1263 11.5977 3.32422 11.168 2.59375C10.7383 1.84896 10.151 1.26172 9.40625 0.832031C8.67578 0.402344 7.8737 0.1875 7 0.1875ZM7 1.5625C7.63021 1.5625 8.20312 1.72005 8.71875 2.03516C9.2487 2.33594 9.66406 2.7513 9.96484 3.28125C10.2799 3.79688 10.4375 4.36979 10.4375 5C10.4375 5.63021 10.2799 6.21029 9.96484 6.74023C9.66406 7.25586 9.2487 7.67122 8.71875 7.98633C8.20312 8.28711 7.63021 8.4375 7 8.4375C6.36979 8.4375 5.78971 8.28711 5.25977 7.98633C4.74414 7.67122 4.32878 7.25586 4.01367 6.74023C3.71289 6.21029 3.5625 5.63021 3.5625 5C3.5625 4.36979 3.71289 3.79688 4.01367 3.28125C4.32878 2.7513 4.74414 2.33594 5.25977 2.03516C5.78971 1.72005 6.36979 1.5625 7 1.5625ZM13.1875 9.125C12.6862 9.125 12.2279 9.25391 11.8125 9.51172C11.3971 9.75521 11.0605 10.0846 10.8027 10.5C10.5592 10.9154 10.4375 11.3737 10.4375 11.875V13.25H8.375V18.75H18V13.25H15.9375V11.875C15.9375 11.3737 15.8086 10.9154 15.5508 10.5C15.3073 10.0846 14.9779 9.75521 14.5625 9.51172C14.1471 9.25391 13.6888 9.125 13.1875 9.125ZM13.1875 10.5C13.5599 10.5 13.8822 10.6361 14.1543 10.9082C14.4264 11.1803 14.5625 11.5026 14.5625 11.875V13.25H11.8125V11.875C11.8125 11.5026 11.9486 11.1803 12.2207 10.9082C12.4928 10.6361 12.8151 10.5 13.1875 10.5ZM9.75 14.625H16.625V17.375H9.75V14.625Z" />
      </svg>
    ),
    title: "Personal Vault",
    path: "/",
  },
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="20"
        height="18"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.375 0.1875V11.1875H3.125V14.6895L7.48633 11.1875H14.125V0.1875H0.375ZM1.75 1.5625H12.75V9.8125H7.01367L4.5 11.8105V9.8125H1.75V1.5625ZM15.5 2.9375V4.3125H18.25V12.5625H15.5V14.5605L12.9863 12.5625H7.83008L6.11133 13.9375H12.5137L16.875 17.4395V13.9375H19.625V2.9375H15.5Z" />
      </svg>
    ),
    title: "Messages",
    path: "/",
    hasNotification: true,
  },
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="16"
        height="18"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0.779297L7.7207 0.908203L0.845703 4.00195L0.4375 4.17383V12.8965L8 17.1074L15.5625 12.8965V4.17383L15.1543 4.00195L8.2793 0.908203L8 0.779297ZM8 2.2832L13.2852 4.64648L8 7.28906L2.71484 4.64648L8 2.2832ZM1.8125 5.74219L7.3125 8.49219V15.1309L1.8125 12.0801V5.74219ZM14.1875 5.74219V12.0801L8.6875 15.1309V8.49219L14.1875 5.74219Z" />
      </svg>
    ),
    title: "Tasks",
    path: "/",
  },
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="14"
        height="19"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 14 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.125 0.8125V18.6875H13.875V0.8125H0.125ZM1.5 2.1875H12.5V17.3125H1.5V2.1875ZM2.875 3.5625V7.6875H11.125V3.5625H2.875ZM4.25 4.9375H9.75V6.3125H4.25V4.9375ZM3.5625 9.0625V10.4375H4.9375V9.0625H3.5625ZM6.3125 9.0625V10.4375H7.6875V9.0625H6.3125ZM9.0625 9.0625V10.4375H10.4375V9.0625H9.0625ZM3.5625 11.8125V13.1875H4.9375V11.8125H3.5625ZM6.3125 11.8125V13.1875H7.6875V11.8125H6.3125ZM9.0625 11.8125V13.1875H10.4375V11.8125H9.0625ZM3.5625 14.5625V15.9375H4.9375V14.5625H3.5625ZM6.3125 14.5625V15.9375H7.6875V14.5625H6.3125ZM9.0625 14.5625V15.9375H10.4375V14.5625H9.0625Z" />
      </svg>
    ),
    title: "Invoices",
    path: "/",
    isActive: true,
  },
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="16"
        height="20"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.4375 0.8125V17.8711L10.0625 19.8691V18H14.1875V9.36328L15.3691 8.18164L15.5625 7.9668V0.8125H0.4375ZM6.71094 2.1875H14.1875V7.38672L13.0059 8.56836L12.8125 8.7832V16.625H10.0625V10.502L9.86914 10.2871L8.6875 9.10547V2.68164L6.71094 2.1875ZM1.8125 2.38086L7.3125 3.75586V9.68555L7.50586 9.90039L8.6875 11.082V18.1934L1.8125 16.7539V2.38086Z" />
      </svg>
    ),
    title: "File Manager",
    path: "/",
    
  },

  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="18"
        height="19"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 0.8125C7.38151 0.8125 5.8776 1.2207 4.48828 2.03711C3.14193 2.82487 2.07487 3.89193 1.28711 5.23828C0.470703 6.6276 0.0625 8.13151 0.0625 9.75C0.0625 11.3685 0.470703 12.8724 1.28711 14.2617C2.07487 15.6081 3.14193 16.6751 4.48828 17.4629C5.8776 18.2793 7.38151 18.6875 9 18.6875C10.6185 18.6875 12.1224 18.2793 13.5117 17.4629C14.8581 16.6751 15.9251 15.6081 16.7129 14.2617C17.5293 12.8724 17.9375 11.3685 17.9375 9.75C17.9375 8.13151 17.5293 6.6276 16.7129 5.23828C15.9251 3.89193 14.8581 2.82487 13.5117 2.03711C12.1224 1.2207 10.6185 0.8125 9 0.8125ZM9 1.5C10.4896 1.5 11.8789 1.8724 13.168 2.61719C14.4141 3.34766 15.4023 4.33594 16.1328 5.58203C16.8776 6.87109 17.25 8.26042 17.25 9.75C17.25 11.2396 16.8776 12.6289 16.1328 13.918C15.4023 15.1641 14.4141 16.1523 13.168 16.8828C11.8789 17.6276 10.4896 18 9 18C7.51042 18 6.12109 17.6276 4.83203 16.8828C3.58594 16.1523 2.59766 15.1641 1.86719 13.918C1.1224 12.6289 0.75 11.2396 0.75 9.75C0.75 8.26042 1.1224 6.87109 1.86719 5.58203C2.59766 4.33594 3.58594 3.34766 4.83203 2.61719C6.12109 1.8724 7.51042 1.5 9 1.5ZM9 2.875C7.75391 2.875 6.60091 3.1901 5.54102 3.82031C4.49544 4.42188 3.67188 5.24544 3.07031 6.29102C2.4401 7.35091 2.125 8.50391 2.125 9.75C2.125 10.9961 2.4401 12.1491 3.07031 13.209C3.67188 14.2546 4.49544 15.0781 5.54102 15.6797C6.60091 16.3099 7.75391 16.625 9 16.625C10.2461 16.625 11.3991 16.3099 12.459 15.6797C13.5046 15.0781 14.3281 14.2546 14.9297 13.209C15.5599 12.1491 15.875 10.9961 15.875 9.75C15.875 8.50391 15.5599 7.35091 14.9297 6.29102C14.3281 5.24544 13.5046 4.42188 12.459 3.82031C11.3991 3.1901 10.2461 2.875 9 2.875ZM9 4.25C10.0026 4.25 10.9193 4.50065 11.75 5.00195C12.5951 5.48893 13.2611 6.15495 13.748 7C14.2493 7.83073 14.5 8.7474 14.5 9.75C14.5 10.7526 14.2493 11.6764 13.748 12.5215C13.2611 13.3522 12.5951 14.0182 11.75 14.5195C10.9193 15.0065 10.0026 15.25 9 15.25C7.9974 15.25 7.07357 15.0065 6.22852 14.5195C5.39779 14.0182 4.73177 13.3522 4.23047 12.5215C3.74349 11.6764 3.5 10.7526 3.5 9.75C3.5 8.7474 3.74349 7.83073 4.23047 7C4.73177 6.15495 5.39779 5.48893 6.22852 5.00195C7.07357 4.50065 7.9974 4.25 9 4.25ZM9 5.625C8.25521 5.625 7.56771 5.8112 6.9375 6.18359C6.30729 6.55599 5.80599 7.05729 5.43359 7.6875C5.0612 8.31771 4.875 9.00521 4.875 9.75C4.875 10.4948 5.0612 11.1823 5.43359 11.8125C5.80599 12.4427 6.30729 12.944 6.9375 13.3164C7.56771 13.6888 8.25521 13.875 9 13.875C9.74479 13.875 10.4323 13.6888 11.0625 13.3164C11.6927 12.944 12.194 12.4427 12.5664 11.8125C12.9388 11.1823 13.125 10.4948 13.125 9.75C13.125 9.00521 12.9388 8.31771 12.5664 7.6875C12.194 7.05729 11.6927 6.55599 11.0625 6.18359C10.4323 5.8112 9.74479 5.625 9 5.625ZM9 7C9.5013 7 9.95964 7.12174 10.375 7.36523C10.8047 7.60872 11.1413 7.94531 11.3848 8.375C11.6283 8.79036 11.75 9.2487 11.75 9.75C11.75 10.2513 11.6283 10.7168 11.3848 11.1465C11.1413 11.5618 10.8047 11.8913 10.375 12.1348C9.95964 12.3783 9.5013 12.5 9 12.5C8.4987 12.5 8.0332 12.3783 7.60352 12.1348C7.18815 11.8913 6.85872 11.5618 6.61523 11.1465C6.37174 10.7168 6.25 10.2513 6.25 9.75C6.25 9.2487 6.37174 8.79036 6.61523 8.375C6.85872 7.94531 7.18815 7.60872 7.60352 7.36523C8.0332 7.12174 8.4987 7 9 7ZM9 8.375C8.61328 8.375 8.28385 8.51107 8.01172 8.7832C7.75391 9.04102 7.625 9.36328 7.625 9.75C7.625 10.1367 7.75391 10.4661 8.01172 10.7383C8.28385 10.9961 8.61328 11.125 9 11.125C9.38672 11.125 9.70898 10.9961 9.9668 10.7383C10.2389 10.4661 10.375 10.1367 10.375 9.75C10.375 9.36328 10.2389 9.04102 9.9668 8.7832C9.70898 8.51107 9.38672 8.375 9 8.375Z" />
      </svg>
    ),
    title: "History",
    path: "/",
    hasNotification: true,
    notificationType: "error",
  },
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="18"
        height="17"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.25 0.542969L16.1328 1.40234L12.9531 3.89453L8.84961 3.20703L4.70312 5.95703L1.56641 5.33398L0.75 5.16211V17H17.25V0.542969ZM15.875 3.35742V7.05273L12.9746 9.35156L8.89258 7.99805L8.61328 8.16992L4.78906 10.7266L2.125 9.65234V6.83789L4.74609 7.35352L5.02539 7.41797L9.15039 4.66797L13.0176 5.3125L13.3184 5.35547L13.5547 5.16211L15.875 3.35742ZM15.875 8.81445V15.625H2.125V11.1562L4.96094 12.2734L9.12891 9.50195L12.9102 10.7695L13.2539 10.8984L13.5547 10.6621L15.875 8.81445Z" />
      </svg>
    ),
    title: "statistics",
    path: "/",
    
  },
  {
    id: Math.random().toString(36),
    icon: (
      <svg
        width="12"
        height="17"
        className="peer fill-[#8181A5] group-hover:fill-[#5E81F4] w-full"
        viewBox="0 0 12 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 0.5C5.02604 0.5 4.11654 0.714844 3.27148 1.14453C2.42643 1.5599 1.76042 2.13281 1.27344 2.86328C0.757812 3.60807 0.5 4.42448 0.5 5.3125V7.375H4.625V5.3125C4.625 5.16927 4.72526 5.0332 4.92578 4.9043C5.21224 4.7181 5.57031 4.625 6 4.625C6.44401 4.625 6.80208 4.7181 7.07422 4.9043C7.27474 5.0332 7.375 5.16927 7.375 5.3125C7.375 5.4987 7.33919 5.67057 7.26758 5.82812C7.21029 5.98568 7.11003 6.15039 6.9668 6.32227C6.82357 6.49414 6.51562 6.7806 6.04297 7.18164L5.89258 7.31055C5.30534 7.81185 4.86849 8.27018 4.58203 8.68555C4.15234 9.3444 3.9375 10.0534 3.9375 10.8125V11.5H8.0625V10.8125C8.0625 10.6979 8.08398 10.5905 8.12695 10.4902C8.18424 10.39 8.27018 10.2826 8.38477 10.168C8.51367 10.0391 8.75716 9.82422 9.11523 9.52344L9.54492 9.17969C10.1178 8.70703 10.5547 8.20573 10.8555 7.67578C11.2852 6.97396 11.5 6.1862 11.5 5.3125C11.5 4.4388 11.2422 3.6224 10.7266 2.86328C10.2396 2.14714 9.57357 1.57422 8.72852 1.14453C7.89779 0.714844 6.98828 0.5 6 0.5ZM6 1.875C6.75911 1.875 7.46094 2.03971 8.10547 2.36914C8.72135 2.66992 9.20833 3.08529 9.56641 3.61523C9.9388 4.14518 10.125 4.71094 10.125 5.3125C10.125 5.98568 9.98177 6.55143 9.69531 7.00977C9.49479 7.33919 9.14388 7.71159 8.64258 8.12695L8.36328 8.36328C7.93359 8.72135 7.61849 9.00065 7.41797 9.20117C7.1888 9.44466 7.0026 9.7526 6.85938 10.125H5.52734C5.6276 9.79557 5.77799 9.49479 5.97852 9.22266C6.19336 8.9362 6.46549 8.64974 6.79492 8.36328L6.90234 8.27734C7.44661 7.81901 7.83333 7.44661 8.0625 7.16016C8.52083 6.58724 8.75 5.97135 8.75 5.3125C8.75 4.9974 8.66406 4.71094 8.49219 4.45312C8.33464 4.18099 8.11979 3.95182 7.84766 3.76562C7.33203 3.42188 6.71615 3.25 6 3.25C5.28385 3.25 4.66797 3.42188 4.15234 3.76562C3.88021 3.95182 3.6582 4.18099 3.48633 4.45312C3.32878 4.71094 3.25 4.9974 3.25 5.3125V6H1.875V5.3125C1.875 4.69661 2.05404 4.13086 2.41211 3.61523C2.78451 3.08529 3.28581 2.66276 3.91602 2.34766C4.54622 2.03255 5.24089 1.875 6 1.875ZM3.9375 12.875V17H8.0625V12.875H3.9375ZM5.3125 14.25H6.6875V15.625H5.3125V14.25Z" />
      </svg>
    ),
    title: "Knowledge Base",
    path: "/",
  },
];
