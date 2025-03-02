interface ISpecification {
  name: string;
  value: string;
}

interface ICategory {
  id: string;
  name: string;
}

export interface IProduct {
  sku: string;
  name: string;
  description: string;
  image: URL;
  category: ICategory;
  brand: string;
  price: number;
  stock: number;
  specifications: ISpecification[];
}

export type TInitialData = IProduct[];
