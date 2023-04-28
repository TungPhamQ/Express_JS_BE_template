//query db
//getall()
//data = prisma.products.finMany()
// const prisma = require("../../prisma/prisma-client");

import prisma from "../configs/db.js";

export const getList = async () => {
  const list = await prisma.products.findMany();
  return list;
};
export const getAProduct = async (req) => {
  const { id } = req.params;
  const product = await prisma.products.findUnique({
    where: { id: Number(id) },
  });
  return product;
};

export const createNew = async (req) => {
  const res = await prisma.products.create({
    data: {
      name: req.body.name,
    },
  });
  return res;
};

export const editAProduct = async (req) => {
  const { id } = req.params;
  const res = await prisma.products.update({
    where: { id: Number(id) },
    data: {
      name: req.body.name,
    },
  });
  return res;
};

export const deleteAProduct = async (req) => {
  const { id } = req.params;
  const res = await prisma.products.delete({
    where: { id: Number(id) },
  });
  return res;
};
