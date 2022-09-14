import { IConfigurationBase } from "./i-configuration-base";
import { IStyleTable } from "./i-style-table";

export interface IConfigurationContentTabular extends IConfigurationBase {
    style?: IStyleTable
};
