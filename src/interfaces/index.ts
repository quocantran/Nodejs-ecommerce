import mongoose, { Schema } from "mongoose";

export interface IShop {
  name: string;
  email: string;
  password: string;
}

export interface IApiKey {
  key: string;
  status: string;
  permissions: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IKeyStore extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  user?: mongoose.Types.ObjectId;
  publicKey: any;
  refreshToken: string;
  refreshTokensUsed?: Array<string>;
}

export interface IDecoded {
  userId: mongoose.Types.ObjectId;
  email: string;
}

export interface IProduct {
  product_name: string;
  product_price: number;
  product_description: string;
  product_thumb: string;
  product_quantity: number;
  product_category: string;
  product_attributes: Schema.Types.Mixed;
  product_shop: mongoose.Types.ObjectId;
}

export interface Inventory {
  inven_productId: mongoose.Types.ObjectId;
  inven_location?: string;
  inven_stock: number;
  inven_shopId: mongoose.Types.ObjectId;
  inven_reservations?: Array<any>;
}
