import { NODE_BASE, LAB } from "../constants/url.constants";
import { IItem } from "../interfaces/item.interface";
import { TResponse } from "../interfaces/response.interface";
import { api } from "../utils/api";

export const getAllItemsService = async (): Promise<TResponse> => {
  return await api.get([NODE_BASE, LAB]).then(async (res: Response) => {
    const response = await res.json();
    return response;
  });
};

export const createItemService = async (payload: IItem): Promise<TResponse> => {
  return await api
    .post({ urls: [NODE_BASE, LAB], data: payload })
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};

export const updateItemService = async (payload: IItem): Promise<TResponse> => {
  return await api
    .put({ urls: [NODE_BASE, LAB], data: payload })
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};

export const deleteItemService = async (payload: number): Promise<TResponse> => {
  console.log(payload)
  return await api
    .deleteApi([NODE_BASE, LAB, payload.toString()])
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};
