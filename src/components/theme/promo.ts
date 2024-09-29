export interface IPromo {
    title: string;
    description?: string;
    image?: string; // or Component ?
    link: string; // or Link ?
}

export interface TitleLink extends IPromo {
    title: string,
    link: string
}
