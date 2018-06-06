// This "interface" creates the data model or schema for posts.
// The data service will use this interface.

export interface Post {
    title: string;
    category: string;
    date_posted: Date;
    position: number;
    body: string
}