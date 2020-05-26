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

export interface Review {
    id: number,
    user: User,
    rating: number,
    comment: string,
    date: string,
}

interface User {
    id: number,
    is_pro: boolean,
    name: string,
    avatar_url: string,
}

interface City {
    name: string,
    location: Location,
}

export interface Location {
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

export type Reviews = Review[];
export type RentalOffersInterface = RentalOfferInterface[];
