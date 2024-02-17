import { WorkContents } from "./work-contents.model";
import { WorkMetadata } from "./work-metadata.model";

export interface Work {
    metadata: WorkMetadata;
    contents: WorkContents;
}