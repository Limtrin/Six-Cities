export interface RentalOfferInterface {
    id: number,
    city: City,
    title: string,
    type: string,
    preview_image: string,
    price: number,
    rating: number,
    is_premium: boolean,
    is_favorite: boolean,
    images: string[],
    bedrooms: number,
    max_adults: number,
    goods: string[],
    host: Host,
    description: string,
    location: Location,
}

interface City {
    name: string,
    location: Location,
}

interface Location {
    latitude: number,
    longitude: number,
    zoom: number,
}

interface Host {
    id: number,
    name: string,
    is_pro: boolean,
    avatar_url: string,
}

export type RentalOffersInterface = RentalOfferInterface[]
