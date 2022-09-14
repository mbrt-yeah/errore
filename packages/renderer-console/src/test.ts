import { Errore } from "@errore/core";
import { render } from "./render";

type TErroreMetadata = {
    namespace?: string,
    tags?: string[],
}

const ErroreMetadata: TErroreMetadata = {
    "namespace": "@errore/renderer-console/test",
    "tags": ["test", "cli"]
}

const causalFunction = function(hello: string): void {
    const error = new Errore<TErroreMetadata>({
        message: "This is a causal error",
        name: "Causal error"
    });
    //const error = new Error("This is a causal error");
    //error.name = "Causal error";
    throw error;
}

const testFunction = function(hello: string) {
    try
    {
        causalFunction(hello);
    }
    catch(error: unknown)
    {
        const cause = Errore.create(error as Error);

        const errore = new Errore<TErroreMetadata>({
            "cause": cause,
            "name": "Test function error",
            "message": "This is a test function error",
            "metadata": ErroreMetadata,
        });

        render(errore);
    }
}

testFunction("world");
