export interface FormField {
    name: string,
    value: string,
    error: string,
    rules: string[],
}

export interface FormType {
    [key: string]: FormField;
}

