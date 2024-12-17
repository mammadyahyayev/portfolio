export interface IPost {
    id: string;
    title: string;
    link: string;
    publishedDate: number | Date;
    publishedDateFormat: string;
    linkLabel: string;
    tags: string[];
    imageSrc?: string;
}