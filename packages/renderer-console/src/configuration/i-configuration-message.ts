import { IConfigurationHeading } from "./i-configuration-heading";
import { IConfigurationBase } from "./i-configuration-base";
import { IConfigurationContentTextual } from "./i-configuration-content-textual";

export interface IConfigurationMessage extends IConfigurationBase {
    heading?: IConfigurationHeading,
    content?: IConfigurationContentTextual,
};
