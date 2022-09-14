import { IConfiguration } from "./configuration/i-configuration";

declare global {
    var __ERRORE_RENDERER_CONSOLE_CONFIGURATION_CUSTOM__: IConfiguration | undefined;
};

export * from "./configuration";
export * from "./renderer";
export * from "./templates";
export * from "./utilities";

export * from "./render";
export * from "./set-configuration-custom";
export * from "./test";