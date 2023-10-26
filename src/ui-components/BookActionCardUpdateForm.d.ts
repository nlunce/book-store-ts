/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BookActionCard } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookActionCardUpdateFormInputValues = {
    title?: string;
    author?: string[];
    description?: string;
    bookCover?: string;
    price?: number;
    isbn10?: string;
    available?: boolean;
};
export declare type BookActionCardUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    bookCover?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    isbn10?: ValidationFunction<string>;
    available?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookActionCardUpdateFormOverridesProps = {
    BookActionCardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    bookCover?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    isbn10?: PrimitiveOverrideProps<TextFieldProps>;
    available?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BookActionCardUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookActionCardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bookActionCard?: BookActionCard;
    onSubmit?: (fields: BookActionCardUpdateFormInputValues) => BookActionCardUpdateFormInputValues;
    onSuccess?: (fields: BookActionCardUpdateFormInputValues) => void;
    onError?: (fields: BookActionCardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookActionCardUpdateFormInputValues) => BookActionCardUpdateFormInputValues;
    onValidate?: BookActionCardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BookActionCardUpdateForm(props: BookActionCardUpdateFormProps): React.ReactElement;
