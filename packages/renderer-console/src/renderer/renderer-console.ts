import { ConfigurationDefault } from "../configuration/configuration-default";
import { ICompilationResult } from "./i-compilation-result";
import { IConfiguration } from "../configuration/i-configuration";
import { IConfigurationCause } from "../configuration/i-configuration-cause";
import { IConfigurationMessage } from "../configuration/i-configuration-message";
import { IConfigurationMetadata } from "../configuration/i-configuration-metadata";
import { IConfigurationPosition } from "../configuration/i-configuration-position";
import { IConfigurationStack } from "../configuration/i-configuration-stack";
import { IErrore } from "@errore/core";
import { IRendererConsole } from "./i-renderer-console";
import { IRendererConsoleParameters } from "./i-renderer-console-parameters";
import { IStyleTable } from "../configuration/i-style-table";
import { ITemplateData } from "../templates/i-template-data";
import { StyleFunction } from "ansi-colors";
import CliTable3 from "cli-table3";
import Stacktracey from "stacktracey";

export class RendererConsole implements IRendererConsole {
    public errore: IErrore<any>;
    public configuration: IConfiguration;

    public constructor(parameters: IRendererConsoleParameters) {
        this.errore = parameters.errore;
        this.configuration = parameters.configuration || ConfigurationDefault;
    }

    public start(display: boolean = true): string {
        const data: ITemplateData = {
            label: this.__compileText("Error", this.configuration.label?.style),
            name:  this.__compileText(this.errore.name, this.configuration.name?.style),
            msg:   this.__compileMessage(this.errore.message, this.configuration.message),
            meta:  this.__compileMetadata(this.errore.getMetadata(), this.configuration.metadata),
            pos:   this.__compilePosition(this.errore.getStackParsed(), this.configuration.position),
            stack: this.__compileStack(this.errore.getStackParsed(), this.configuration.stack),
            cause: this.__compileCause(this.errore.getCause(), this.configuration.cause),
        };

        const errorRendered = this.configuration.template(data);

        if (display)
            console.log(errorRendered);

        return errorRendered;
    }

    private __compileCause(cause?: IErrore<any>, configuration?: IConfigurationCause): string | undefined {
        if (!cause || configuration?.deactivate)
            return undefined;

        const renderer = new RendererConsole({
            errore: cause,
            configuration: this.configuration,
        });

        return renderer.start(false);
    }

    private __compileMessage(message?: string, configuration?: IConfigurationMessage): ICompilationResult | undefined {
        if (configuration?.deactivate || !message)
            return undefined;

        let header = "", content = "";

        if (!configuration?.heading?.deactivate)
            header = this.__compileText(configuration?.heading?.value || "Message", configuration?.heading?.style);

        if (!configuration?.content?.deactivate)
            content = this.__compileText(message, configuration?.content?.style);

        return { header, content, };
    }

    private __compileMetadata(metadata?: any, configuration?: IConfigurationMetadata): ICompilationResult | undefined {
        if (configuration?.deactivate || !metadata)
            return undefined;

        let header = "", content = "";

        if (!configuration?.heading?.deactivate)
            header = this.__compileText(configuration?.heading?.value || "Metadata", configuration?.heading?.style);

        
        if (!configuration?.content?.deactivate) {
            const data: string[][] = [];

            if (typeof metadata === "object") {
                for(const key of Object.keys(metadata))
                    data.push([key, metadata[key] + ""]);
            }

            content = this.__compileTable(data, configuration?.content?.style);
        }

        return { header, content, };
    }

    private __compilePosition(stackParsed?: Stacktracey, configuration?: IConfigurationPosition): string | undefined {
        if (configuration?.deactivate || !stackParsed || !stackParsed.items || stackParsed.items.length === 0)
            return undefined;

        const stackFrameAt0 = stackParsed.items[0];

        if (!stackFrameAt0)
            return undefined;

        let header = "", content = "";

        if (!configuration?.heading?.deactivate)
            header = this.__compileText(configuration?.heading?.value || "at", configuration?.heading?.style);

        if (!configuration?.content?.deactivate)
            content = this.__compileText(`${stackFrameAt0.callee} ${stackFrameAt0.file}:${stackFrameAt0.line}`, configuration?.content?.style);

        return `${header} ${content}`;
    }

    private __compileStack(stackParsed?: Stacktracey, configuration?: IConfigurationStack): ICompilationResult | undefined {
        if (configuration?.deactivate || !stackParsed || !stackParsed.items || stackParsed.items.length === 0)
            return undefined;

        let header = "", content = "";

        if (!configuration?.heading?.deactivate)
            header = this.__compileText(configuration?.heading?.value || "Stack Trace", configuration?.heading?.style);

        if (!configuration?.content?.deactivate) {
            const data: string[][] = [];

            for (const item of stackParsed.items)
                data.push([item.file, item.callee, item.line + "", item.column + ""]);

            content = this.__compileTable(data, configuration?.content?.style);
        }

        return { header, content, };
    }

    private __compileTable(data: string[][], styles?: IStyleTable): string {
        const table = new CliTable3(styles);

        for (const datum of data)
            table.push(datum);

        return table.toString();
    }

    private __compileText(text: string, styles: StyleFunction[] = []): string {
        let textFinal = text;

        for (const style of styles)
            textFinal = style(textFinal);

        return textFinal;
    }
};
