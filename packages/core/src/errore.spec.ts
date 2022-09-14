import { ErroreEmpty } from "./test-dummies/errore-empty";
import { ErroreSimple } from "./test-dummies/errore-simple";
import { ErroreWithMetadata, ErroreWithMetadataMetadata } from "./test-dummies/errore-with-metadata";
import { ErroreWithMetadataTypedComplex, ErroreWithMetadataTypedComplexMetadata } from "./test-dummies/errore-with-metadata-typed-complex";
import { ErroreWithMetadataTypedSimple } from "./test-dummies/errore-with-metadata-typed-simple";
import test from "ava";
import { Errore } from "./errore";

test("[Errore#constructor] An empty Errore instance has property values that are undefined or have empty strings", async t => {
    const errore = new Errore();
    
    t.is(errore.message, "");
    t.is(errore.name, "");
    t.not(errore.stack, undefined);
    t.not(errore.getStackParsed(), undefined);
    t.is(errore.getCause(), undefined);
    t.is(errore.getMetadata(), undefined);
});

test("[Errore#constructor] A simple Errore instance has a message and a name property", async t => {
    t.is(ErroreSimple.message, "This is the message of a simple error.");
    t.is(ErroreSimple.name, "Simple error");
    t.not(ErroreSimple.stack, undefined);
    t.not(ErroreSimple.getStackParsed(), undefined);
    t.is(ErroreSimple.getCause(), undefined);
    t.is(ErroreSimple.getMetadata(), undefined);
});

test("[Errore#constructor] An Errore instance with metadata has untyped metadata", async t => {
    t.is(ErroreWithMetadata.message, "This is the message of an error with metadata.");
    t.is(ErroreWithMetadata.name, "Error with metadata");
    t.not(ErroreWithMetadata.stack, undefined);
    t.not(ErroreWithMetadata.getStackParsed(), undefined);
    t.is(ErroreWithMetadata.getCause(), undefined);
    t.is(ErroreWithMetadata.getMetadata(), ErroreWithMetadataMetadata);
});

test("[Errore#constructor] An Errore instance with simply typed metadata has a metadata property of simple type", async t => {
    t.is(ErroreWithMetadataTypedSimple.message, "This is the message of an error with simply typed metadata.");
    t.is(ErroreWithMetadataTypedSimple.name, "Error with simply typed metadata");
    t.not(ErroreWithMetadataTypedSimple.stack, undefined);
    t.not(ErroreWithMetadataTypedSimple.getStackParsed(), undefined);
    t.is(ErroreWithMetadataTypedSimple.getCause(), undefined);
    t.is(ErroreWithMetadataTypedSimple.getMetadata(), "A string as metadata");
});

test("[Errore#constructor] An Errore instance with complex typed metadata has a metadata property of complex type", async t => {
    t.is(ErroreWithMetadataTypedComplex.message, "This is the message of an error with complexely typed metadata.");
    t.is(ErroreWithMetadataTypedComplex.name, "Error with complexely typed metadata");
    t.not(ErroreWithMetadataTypedComplex.stack, undefined);
    t.not(ErroreWithMetadataTypedComplex.getStackParsed(), undefined);
    t.is(ErroreWithMetadataTypedComplex.getCause(), undefined);
    t.is(ErroreWithMetadataTypedComplex.getMetadata(), ErroreWithMetadataTypedComplexMetadata);
});
