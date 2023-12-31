/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarOverridesProps = {
    Navbar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    LogoSlot?: PrimitiveOverrideProps<ViewProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Books?: PrimitiveOverrideProps<TextProps>;
    "Contact us"?: PrimitiveOverrideProps<TextProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button39493466?: PrimitiveOverrideProps<ButtonProps>;
    Button39493467?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavbarProps = React.PropsWithChildren<Partial<FlexProps> & {
    logoSlot?: React.ReactNode;
} & {
    overrides?: NavbarOverridesProps | undefined | null;
}>;
export default function Navbar(props: NavbarProps): React.ReactElement;
