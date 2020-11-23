export interface FbResponse {
  [x: string]: any;
  name: string;
}

export interface Product {
  type?: string;
  id?: string;
  title?: string;
  photo?: string;
  info?: string;
  price?: string;
  date?: Date;
}
