export interface Category {
  id: number
  title: string
  slug: string
  locale?: Locale
}
export interface Locale {
    id: number;
    key: string;
    name: string;
  }

export interface New {
  id: number
  image: string
  title: string
  slug: string
  category: Category
}
