export interface FormField {
    name: string,
    value: string,
    error: boolean,
    rules: string[],
}

export interface FormType {
    [key: string]: FormField;
}

