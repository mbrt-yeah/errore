import { StyleFunction } from "ansi-colors";
import { IConfigurationBase } from "./i-configuration-base";

export interface IConfigurationHeading extends IConfigurationBase {
    style?: StyleFunction[],
    value?: string,
};
