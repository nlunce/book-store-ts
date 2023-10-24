/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarLoggedInMobileOverridesProps = {
    NavbarLoggedInMobile?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    LogoSlot?: PrimitiveOverrideProps<ViewProps>;
    Options39265065?: PrimitiveOverrideProps<FlexProps>;
    user?: PrimitiveOverrideProps<TextProps>;
    Options39265072?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1165"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1166"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1167"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type NavbarLoggedInMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavbarLoggedInMobileOverridesProps | undefined | null;
}>;
export default function NavbarLoggedInMobile(props: NavbarLoggedInMobileProps): React.ReactElement;
