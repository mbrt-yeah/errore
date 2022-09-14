import { Errore } from "../errore";

export const ErroreWithMetadataTypedSimple = new Errore<string>({
    message: "This is the message of an error with simply typed metadata.",
    name: "Error with simply typed metadata",
    metadata: "A string as metadata"
});