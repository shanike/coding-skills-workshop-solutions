export interface Book {
    _id?: string,
    name?: string,
    chapters?: { chapterName?: string }[]
    total?: number,
    finished?: boolean
}

export interface Chapter {
    _id: string,
    chapterName: string
}
