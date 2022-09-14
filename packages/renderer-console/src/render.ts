import { ConfigurationDefault } from "./configuration/configuration-default";
import { createConfigurationFinal } from "./utilities/create-configuration-final";
import { IConfiguration } from "./configuration/i-configuration";
import { IErrore } from "@errore/core";
import { RendererConsole } from "./renderer/renderer-console";

/**
 * A function to render an IErrore instance
 * 
 * @description
 * This functions acts as the main entry point of the `renderer-console` module.
 * 
 * You can pass it a single `IErrore` instance and it will create a stringyfied
 * version of it which then logs to the console.
 * 
 * The way the stringyfied version of the `IErrore` instance is shown in the console/terminal 
 * depends on the given configuration.
 * 
 * The default configuration can be found here: [ConfigurationDefault]{@link ConfigurationDefault}
 * 
 * @param {IErrore} errore An IErrore instance
 * @param {IConfiguration=ConfigurationDefault} configuration A rendering configuration
 * @returns 
 */
export function render(
    errore: IErrore,
    configuration: IConfiguration = ConfigurationDefault
): string {
    const renderer = new RendererConsole({
        errore,
        configuration: createConfigurationFinal(configuration),
    });

    return renderer.start();
};
