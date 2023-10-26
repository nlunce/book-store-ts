/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookActionCardCreateFormInputValues = {
    title?: string;
    author?: string[];
    description?: string;
    bookCover?: string;
    price?: number;
    isbn10?: string;
    available?: boolean;
};
export declare type BookActionCardCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    bookCover?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    isbn10?: ValidationFunction<string>;
    available?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookActionCardCreateFormOverridesProps = {
    BookActionCardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    bookCover?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    isbn10?: PrimitiveOverrideProps<TextFieldProps>;
    available?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BookActionCardCreateFormProps = React.PropsWithChildren<{
    overrides?: BookActionCardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BookActionCardCreateFormInputValues) => BookActionCardCreateFormInputValues;
    onSuccess?: (fields: BookActionCardCreateFormInputValues) => void;
    onError?: (fields: BookActionCardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookActionCardCreateFormInputValues) => BookActionCardCreateFormInputValues;
    onValidate?: BookActionCardCreateFormValidationValues;
} & React.CSSProperties>;
export default function BookActionCardCreateForm(props: BookActionCardCreateFormProps): React.ReactElement;
