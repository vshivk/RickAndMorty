export interface Character {
    created: string,
    episode: string[],
    gender: string,
    id: number,
    image: string,
    location: Location,
    name: string,
    origin: object,
    species: string,
    status: string,
    type: string,
    url: string
}

export interface Location {
    name: string,
    url: string
}

export interface GeneralState {
    characters: Character[],
    locations: Location[],
    episodes: string[],
    isLoading: boolean,
    currentPage: number,
    error: string
}