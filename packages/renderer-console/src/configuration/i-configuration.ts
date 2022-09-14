import { IConfigurationLabel } from "./i-configuration-label";
import { IConfigurationMessage } from "./i-configuration-message";
import { IConfigurationName } from "./i-configuration-name";
import { IConfigurationMetadata } from "./i-configuration-metadata";
import { IConfigurationStack } from "./i-configuration-stack";
import { IConfigurationPosition } from "./i-configuration-position";
import { IConfigurationCause } from "./i-configuration-cause";
import { TTemplate } from "../templates/t-template";

export interface IConfiguration {
    cause?: IConfigurationCause,
    label?: IConfigurationLabel,
    name?: IConfigurationName,
    message?: IConfigurationMessage,
    position?: IConfigurationPosition,
    metadata?: IConfigurationMetadata,
    stack?: IConfigurationStack,
    template: TTemplate,
};
