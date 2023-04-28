//iport services
// getAll(req, res, next) =>{ let data = services} res.send(data)

import {
  getList,
  createNew,
  editAProduct,
  deleteAProduct,
} from "../services/products.services.js";

export const getListProduct = async (req, res) => {
  try {
    const result = await getList();
    console.log("result", result);
    res.send(result);
    return result;
  } catch (err) {
    console.log("err", err);
  }
};

export const createNewProduct = async (req, res) => {
  try {
    const product = await createNew(req);
    res.send({ data: product });
  } catch (err) {
    console.log(err);
  }
};

export const editProduct = async (req, res) => {
  try {
    const product = await editAProduct(req);
    res.send({ data: product });
  } catch (err) {
    console.log("err", err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await deleteAProduct(req);
    res.send({ message: `product ${req.params.id} is deleted` });
  } catch (err) {
    console.log("err", err);
  }
};
