import { IConfigurationBase } from "./i-configuration-base";
import { IConfigurationContentTextual } from "./i-configuration-content-textual";
import { IConfigurationHeading } from "./i-configuration-heading";

export interface IConfigurationPosition extends IConfigurationBase {
    heading?: IConfigurationHeading,
    content?: IConfigurationContentTextual,
};
