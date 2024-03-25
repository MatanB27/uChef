export interface FormField {
    name: string,
    value: string,
    error: string,
    valid: boolean,
    rules: string[],
}

export interface FormType {
    [key: string]: FormField;
}

