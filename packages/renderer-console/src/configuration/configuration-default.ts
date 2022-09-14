import { bgRedBright, blueBright, bold, dim, gray, white, whiteBright } from "ansi-colors";
import { IConfiguration } from "./i-configuration";
import { TemplateDefault } from "../templates/template-default";

const tableCharsDefault = {
    "top": "—",
    "top-mid": "",
    "top-left": "",
    "top-right": "",
    "bottom": "—",
    "bottom-mid": "",
    "bottom-left": "",
    "bottom-right": "",
    "left": "",
    "left-mid": "",
    "mid": "—",
    "mid-mid": "",
    "right": "",
    "right-mid": "",
    "middle": ""
};

export const ConfigurationDefault: IConfiguration = {
    cause: {
        deactivate: false,
    },
    label: {
        value: "Error",
        style: [bold, bgRedBright, whiteBright],
    },
    name: {
        style: [bold, whiteBright],
    },
    message: {
        deactivate: false,
        heading: {
            deactivate: true,
            value: "Message",
            style: [bold, whiteBright],
        },
        content: {
            deactivate: false,
            style: [white],
        }
    },
    position: {
        deactivate: false,
        heading: {
            deactivate: false,
            value: "at",
            style: [dim, gray]
        },
        content: {
            deactivate: false,
            style: [blueBright],
        },
    },
    metadata: {
        deactivate: false,
        heading: {
            deactivate: false,
            value: "Metadata",
            style: [bold, whiteBright],
        },
        content: {
            deactivate: false,
            style: {
                chars: tableCharsDefault,
                head: ["Name", "Value"],
                colWidths: [30, 90],
                wordWrap: true,
                wrapOnWordBoundary: false,
                style: {
                    head: ["bold", "white"],
                    border: ["grey", "dim"],
                    compact: false,
                }
            },
        },
    },
    stack: {
        deactivate: false,
        heading: {
            deactivate: false,
            value: "Stack Trace",
            style: [bold, whiteBright],
        },
        content: {
            deactivate: false,
            style: {
                chars: tableCharsDefault,
                head: ["File", "Function", "Line", "Column"],
                colWidths: [40, 60, 10, 10],
                wordWrap: true,
                wrapOnWordBoundary: false,
                style: {
                    head: ["bold", "white"],
                    border: ["gray", "dim"],
                    compact: false,
                }
            },
        },
    },
    template: TemplateDefault,
};
