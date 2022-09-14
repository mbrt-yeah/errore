import { ICompilationResult } from "../renderer/i-compilation-result";

export interface ITemplateData {
    cause?: string,
    label?: string,
    name?: string,
    msg?: ICompilationResult,
    meta?: ICompilationResult,
    pos?: string,
    stack?: ICompilationResult,
};
