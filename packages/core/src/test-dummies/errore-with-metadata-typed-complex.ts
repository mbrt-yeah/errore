import { Errore } from "../errore";

type MetadataTypeComplex = {
    "hello": string,
    "tags": any[],
    "version": number,
};

const ErroreWithMetadataTypedComplexMetadata: MetadataTypeComplex = {
    "hello": "world",
    "tags": ["what", 1],
    "version": 1,
};

const ErroreWithMetadataTypedComplex = new Errore<MetadataTypeComplex>({
    message: "This is the message of an error with complexely typed metadata.",
    name: "Error with complexely typed metadata",
    metadata: ErroreWithMetadataTypedComplexMetadata,
});

ErroreWithMetadataTypedComplex.getMetadata();

export { ErroreWithMetadataTypedComplex, ErroreWithMetadataTypedComplexMetadata }