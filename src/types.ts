export interface RentalOfferInterface {
    name: string,
    type: string,
    image: string,
    price: number,
    rating: number,
    isPremium: boolean,
    inBookmarks: boolean,
}

export type RentalOffersInterface = RentalOfferInterface[]
