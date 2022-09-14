import { IConfigurationBase } from "./i-configuration-base";
import { StyleFunction } from "ansi-colors";

export interface IConfigurationSuffix extends IConfigurationBase {
    value?: string,
    style?: StyleFunction[],
};
