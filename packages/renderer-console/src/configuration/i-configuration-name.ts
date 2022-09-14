import { StyleFunction } from "ansi-colors";
import { IConfigurationSuffix } from "./i-configuration-suffix";

export interface IConfigurationName {
    style?: StyleFunction[],
    suffix?: IConfigurationSuffix,
};
