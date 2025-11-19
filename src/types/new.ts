export interface Category {
  id: number
  name: string
  slug: string
}

export interface New {
  id: number
  image: string
  title: string
  slug: string
  category: Category
}
