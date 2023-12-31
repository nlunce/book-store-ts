/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavbarAuthenticatedProps } from "./NavbarAuthenticated";
import { FlexProps } from "@aws-amplify/ui-react";
import { FooterProps } from "./Footer";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BrowseYourBooksPageOverridesProps = {
    BrowseYourBooksPage?: PrimitiveOverrideProps<FlexProps>;
    NavbarAuthenticated?: NavbarAuthenticatedProps;
    BookCollectionSlot?: PrimitiveOverrideProps<FlexProps>;
    Footer?: FooterProps;
} & EscapeHatchProps;
export declare type BrowseYourBooksPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BrowseYourBooksPageOverridesProps | undefined | null;
}>;
export default function BrowseYourBooksPage(props: BrowseYourBooksPageProps): React.ReactElement;
