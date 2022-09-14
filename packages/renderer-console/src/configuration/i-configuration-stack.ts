import { IConfigurationBase } from "./i-configuration-base";
import { IConfigurationContentTabular } from "./i-configuration-content-tabular";
import { IConfigurationHeading } from "./i-configuration-heading";

export interface IConfigurationStack extends IConfigurationBase {
    heading?: IConfigurationHeading,
    content?: IConfigurationContentTabular,
};
