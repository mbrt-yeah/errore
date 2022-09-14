import { IConfiguration } from "../configuration/i-configuration";
import { IErrore } from "@errore/core";

export interface IRendererConsoleParameters {
    errore: IErrore,
    configuration: IConfiguration,
};
