import { IConfigurationBase } from "./i-configuration-base";
import { IConfigurationContentTabular } from "./i-configuration-content-tabular";
import { IConfigurationHeading } from "./i-configuration-heading";

export interface IConfigurationMetadata extends IConfigurationBase {
    heading?: IConfigurationHeading,
    content?: IConfigurationContentTabular,
};
