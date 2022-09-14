import { createConfigurationFinal } from "./utilities/create-configuration-final";
import { IConfiguration } from "./configuration";

export function setStyleCustom(configurationCustom: IConfiguration): void {
    global.__ERRORE_RENDERER_CONSOLE_CONFIGURATION_CUSTOM__ = createConfigurationFinal(configurationCustom);
    return;
};
