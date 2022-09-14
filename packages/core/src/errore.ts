/**
 * @file    Contains the errore module
 * @author  Matthias Einbrodt
 * @since   0.1.0
 * 
 * @license MIT License (MIT)
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/mbrt-yeah/errore/blob/master/LICENSE
 */

/** @module errore */

import { IErrore } from "./i-errore";
import { IErroreParameters } from "./i-errore-parameters";
import StackTracey from "stacktracey";

/**
 * Class that represents an Errore instance
 * 
 * @class      Errore
 * @extends    Error
 * @implements {IErrore}
 * @typeParam  M - The type of the metadata property
 */
export class Errore<M = any> extends Error implements IErrore<M> {

    /**
     * Creates an Errore instance from a JS Error instance
     * 
     * @description
     * The methods creates a new `Errore` instance with optional metadata 
     * from a JS `Error` instance.
     * 
     * You can also pass an `Errore` instance as a parameter. Should this `Errore`
     * instance have no metadata, the optional metadata parameters will be attached to it.
     *
     * @static
     * @template M                              The type of the metadata property
     * @param    {Error | Errore<M>} error      A JS Error instance or an Errore instance
     * @param    {M=any}             metadata   Metadata with additional information about the error
     * @returns  {Errore<M>}                    An Errore instance
     */
    public static create<M = any>(error: Error | Errore<M>, metadata?: M): Errore<M> {
        if ( !(error instanceof Errore) ) {
            return new Errore<M>({
                message: error.message,
                name: error.name,
                metadata: metadata,
                stack: error.stack,
            });
        }

        if ( !error.hasMetadata() && metadata )
            error.setMetadata(metadata);

        return error;
    }

    /** Cause of the Errore instance */
    private __cause?: IErrore;

    /** Metadata of the Errore instance */
    private __metadata?: M;

    /** Parsed stack trace of the Errore instance */
    private __stackParsed?: StackTracey;

    /**
     * @param parameters - Parameters of the Errore instance
     */
    public constructor(parameters: IErroreParameters<M> = {
        name: "",
        message: "",
    }) {
        super();

        this.message = parameters.message;
        this.name = parameters.name;
        this.__metadata = parameters.metadata;

        if (parameters.cause)
            this.setCause(parameters.cause);

        this.stack = parameters.stack || this.__createStack();

        if (this.stack)
            this.setStackParsed(this.stack);
    }

    /**
     * Gets the cause of the Errore instance
     * 
     * @returns {IErrore<any> | undefined} The cause of the Errore instance
     */
    public getCause(): IErrore<any> | undefined {
        return this.__cause;
    }

    /**
     * Checks if the Errore instance instance has a cause
     * 
     * @returns {boolean} true if the Errore instance has a cause, false if otherwise
     */
    public hasCause(): boolean {
        return this.__cause !== undefined;
    }

    /**
     * Sets the cause of the Errore instance
     * 
     * @description
     * Accepts an `Errore` instance or a JS `Error` instance.
     * In case of the latter, the JS `Error` instance is used
     * to create an `Errore` instance before setting the property value.
     * 
     * @param {IErrore<any> | Error} cause The cause of the Errore instance
     */
    public setCause(cause: IErrore<any> | Error): void {
        if (cause instanceof Error)
            this.__cause = Errore.create(cause);
        else
            this.__cause = cause;

        return;
    }

    /**
     * Gets the metadata of the Errore instance
     * 
     * @returns {M | undefined} Metadata of the Errore instance
     */
    public getMetadata(): M | undefined {
        return this.__metadata;
    }

    /**
     * Checks if the Errore instance instance has metadata
     * 
     * @returns {boolean} true if the Errore instance has metadata, false if otherwise
     */
    public hasMetadata(): boolean {
        return this.__metadata !== undefined;
    }

    /**
     * Sets the metadata of the Errore instance
     * 
     * @param {M} metadata Metadata of the Errore instance
     */
    public setMetadata(metadata: M): void {
        this.__metadata = metadata;
        return;
    }

    /**
     * Gets the parsed stack trace of the Errore instance
     * 
     * @returns {StackTracey | undefined} The parsed stack trace of the Errore instance
     */
    public getStackParsed(): StackTracey | undefined {
        return this.__stackParsed;
    }

    /**
     * Checks if the Errore instance instance has a parsed stack trace
     * 
     * @returns {boolean} true if the Errore instance has a parsed stack trace, false if otherwise
     */
    public hasStackParsed(): boolean {
        return this.stack !== undefined;
    }

    /**
     * Sets the parsed stack trace of the Errore instance
     * 
     * @param {string | StackTracey} stack A stack trace unparsed or parsed
     */
    public setStackParsed(stack: string | StackTracey): void {
        if (typeof stack === "string")
            this.__stackParsed = new StackTracey(stack);
        else
            this.__stackParsed = stack;
    }

    /**
     * Creates an unparsed stack of the Errore instance
     * 
     * @returns {string | undefined} The unparsed stack of the Errore instance
     */
    private __createStack(): string | undefined {
        let stack = (new Error()).stack; // TODO .stack is a not a default property - elaborate

        if (stack === undefined)
            return stack;

        let stackLines = stack.split("\n");

        if (stackLines.length === 0)
            return undefined;

        stackLines.splice(1,2);
        return stackLines.join("\n");
    }
};
