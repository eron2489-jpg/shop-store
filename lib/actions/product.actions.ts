"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

export const getLatestProducts = async () => {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
};

export const getProductBySlug = async (slug: string) => {
  return prisma.product.findFirst({
    where: { slug: slug },
  });
};

/* object javascript : 
    {nom: "Dhia", test: true, number : 23.5}
    object python : 
    {nom: "Dhia", test: True, number : 23.5}
*/
