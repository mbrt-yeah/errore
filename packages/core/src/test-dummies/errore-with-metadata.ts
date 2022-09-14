import { Errore } from "../errore";

const ErroreWithMetadataMetadata = {
    "hello": "world",
    "tags": ["what", 1],
    "version": 1
};

const ErroreWithMetadata = new Errore({
    message: "This is the message of an error with metadata.",
    name: "Error with metadata",
    metadata: ErroreWithMetadataMetadata
});

export { ErroreWithMetadata, ErroreWithMetadataMetadata }