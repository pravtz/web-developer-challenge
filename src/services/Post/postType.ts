export type PostTypeCreate = {
    text: string;
    figure: object;
    author: string;
}

export type PostTypeList = {
    id: string;
    text: string;
    figure: string;
    author: string;
}