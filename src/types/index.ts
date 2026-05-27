
export interface Residence {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  specs: string[]
  features: string[]
  sizeSqFt: number
  availableFrom: string
  pricePerMonth: string
}

export interface Amenity {
  id: string
  name: string
  description: string
  iconName: string // name in Lucide
  image: string
  detailText: string
  capacityLimit: string
  operatingHours: string
}

export interface Landmark {
  id: string
  name: string
  type: 'transit' | 'retail' | 'arts'
  distance: string
  desc: string
  pxX: number // custom map position absolute percentage
  pxY: number // custom map position absolute percentage
}

export interface GalleryItem {
  id: string
  alt: string
  src: string
  location: string
  likes: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface BookingDetails {
  name: string
  phone: string
  email: string
  residenceId: string
  preferredDate: string
  preferredTime: string
  additionalNotes: string
}
