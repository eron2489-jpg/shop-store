import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatNumberWithDecimal(num: number): string {
  const [intValue, floatValue] = num.toString().split(".");
  return floatValue
    ? `${intValue}.${floatValue.padEnd(2, "0")}`
    : `${intValue}.00`;
}

// 23.1 --> 23.10
// 23   --> 23.00

// export function formatError(error: any) {
//   if (error.name === "ZodError") {
//     console.log(">> error.errors:", error.message);
//     console.log(">> is array:", Array.isArray(error.message));
//     console.log(">> is array:", error.message[0]);

//     const fieldErrors = error?.message?.map((field: any) => {
//       console.log("field", field);
//       return field.message;
//     });
//     console.log("field errors : ", fieldErrors);
//     return fieldErrors.join();
//   } else if (
//     error.name === "PrismaClientKnownRequestError" &&
//     error.code === "P2002"
//   ) {
//     let field;
//     if (error.meta.taget.isArray())
//       field = error?.meta?.target ? error.meta.taget[0] : "Field";
//     else {
//       field = error?.meta?.target ? error.meta.taget : "Field";
//     }
//     return `${field.chatAt(0).toUpperCase() + field.slice(1)} already exists`;
//   } else {
//     return error.message;
//   }
// }
