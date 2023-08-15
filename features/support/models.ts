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

declare enum Status {
  available = 'available',
  pending = 'pending',
  sold = 'sold'
}