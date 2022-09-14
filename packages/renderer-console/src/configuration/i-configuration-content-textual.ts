import { IConfigurationBase } from "./i-configuration-base";
import { StyleFunction } from "ansi-colors";

export interface IConfigurationContentTextual extends IConfigurationBase {
    style?: StyleFunction[],
};
