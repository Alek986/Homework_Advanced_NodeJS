export interface AuthorInterface {
    firstName: string;
    lastName: string;
    from: string;
    birthDate: number;
}
export interface BookInterface {
    title: string;
    description: string;
    genre: string;
    publisher: string;
    isbn: number;
}
export interface AuthorCreationProps {
    firstName: string;
    lastName: string;
    from: string;
    birthDate: number;
}
export interface BookCreationProps {
    title: string;
    description: string;
    genre: string;
    publisher: string;
    isbn: number;
}
export interface UpdateBookProps {
    title?: string;
    description?: string;
    genre?: string;
    publisher?: string;
    isbn?: number;
}
export interface UpdateAuthorProps {
    firstName?: string;
    lastName?: string;
    from?: string;
    birthDate?: number;
}
