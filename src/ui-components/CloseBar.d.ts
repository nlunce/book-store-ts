/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyIconProps } from "./MyIcon";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CloseBarOverridesProps = {
    CloseBar?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
} & EscapeHatchProps;
export declare type CloseBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CloseBarOverridesProps | undefined | null;
}>;
export default function CloseBar(props: CloseBarProps): React.ReactElement;
