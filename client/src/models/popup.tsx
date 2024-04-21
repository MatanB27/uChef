//TODO: Unused for now, need to check how to add it to redux

export interface PopupDetails {
    icon: HTMLImageElement,
    title: string,
    subTitle?: string,
    btnText1: string,
    btnText2?: string,
    onClick1: (event: MouseEvent) => void,
    onClick2?: (event: MouseEvent) => void,
}