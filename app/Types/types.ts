

export type SingleDescItem = {
    title: string,
    titleEng: string,
    icon: string
}

export type LockType = {
    id: number,
    title: string,
    image:string,
    desc: SingleDescItem[],
}