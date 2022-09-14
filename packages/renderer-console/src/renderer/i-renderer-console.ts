import { IRendererConsoleParameters } from "./i-renderer-console-parameters";

export interface IRendererConsole extends IRendererConsoleParameters {
    start(display: boolean): string;
};
