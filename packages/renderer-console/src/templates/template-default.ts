import { ITemplateData } from "./i-template-data"

export function TemplateDefault(data: ITemplateData): string {
    let nameTpl = "",
        msgTpl = "",
        posTpl = "",
        metaTpl = "",
        stackTpl = "";

    nameTpl = `${data.label || "Error"} ${data.name}`;

    if (data.msg?.header)
        msgTpl = `\n\n${data.msg.header}`;

    if (data.msg?.content)
        msgTpl += `\n\n${data.msg.content}`;

    if (data.pos)
        posTpl = `\n\n${data.pos}`;

    if (data.meta?.header)
        metaTpl = `\n\n${data.meta.header}`;

    if (data.meta?.content)
        metaTpl += `\n\n${data.meta.content}`;

    if (data.stack?.header)
        stackTpl = `\n\n${data.stack.header}`;

    if (data.stack?.content)
        stackTpl += `\n\n${data.stack.content}`;

    let tpl = `\n\n${nameTpl} ${msgTpl} ${posTpl} ${stackTpl} ${metaTpl}`;

    if (data.cause)
        tpl += `\n\n${data.cause}`;

    return `${tpl}\n`;
};
