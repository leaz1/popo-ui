import { Tag } from "./tag.model";

export interface WorkMetadata {
    id: string;
    title: string;
    authors: string[];
    tags?: Tag[] | string[];
}