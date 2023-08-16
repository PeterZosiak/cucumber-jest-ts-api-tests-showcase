export interface Pet {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: Status;
}

interface Category {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
}

export enum Status {
  available = 'available',
  pending = 'pending',
  sold = 'sold'
}

export interface PetResponse {
  code: number;
  type: string;
  message: string;
}