import { ArrayMergeStrategies } from "./array-merge-strategies";
import { ConfigurationDefault } from "../configuration/configuration-default";
import { IConfiguration } from "../configuration/i-configuration";
import merge from "deepmerge";

export function createConfigurationFinal(configurationCustom?: IConfiguration): IConfiguration {
    let configurationBase = global.__ERRORE_RENDERER_CONSOLE_CONFIGURATION_CUSTOM__;

    if (configurationBase === undefined)
        configurationBase = ConfigurationDefault;

    return merge(configurationBase, configurationCustom || {}, { 
        arrayMerge: ArrayMergeStrategies.overwrite, 
    });
};
