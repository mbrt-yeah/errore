/**
 * @file    Contains the i-errore module
 * @author  Matthias Einbrodt
 * @since   0.1.0
 * 
 * @license MIT License (MIT)
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/mbrt-yeah/errore/blob/master/LICENSE
 */

import StackTracey from "stacktracey";

/** @module i-errore */

/**
 * Interface that can be implemented by classes that should act as 
 * an enhanced JS error instance
 *  
 * @interface IErrore
 * @extends   {Error}
 * @typeParam  M - The type of the metadata property
 */
export interface IErrore<M = any> extends Error {

    /**
     * Gets the cause of an enhanced JS error instance
     * 
     * @returns The cause of an enhanced JS error instance
     */
    getCause(): IErrore | undefined;

    /**
     * Checks if an enhanced JS error instance has a cause
     * 
     * @returns true if enhanced JS error has a cause, false if otherwise
     */
    hasCause(): boolean;

    /**
     * Sets the cause of an enhanced JS error instance
     * 
     * @param cause - The cause of an enhanced JS error instance
     */
    setCause(cause: Error | IErrore): void;

    /**
     * Gets the metadata of an enhanced JS error instance
     * 
     * @returns Metadata of an enhanced JS error instance
     */
    getMetadata(): M | undefined;

    /**
     * Checks if an enhanced JS error instance has metadata
     * 
     * @returns true if enhanced JS error has metadata, false if otherwise
     */
    hasMetadata(): boolean;

    /**
     * Sets the metadata of an enhanced JS error instance
     * 
     * @param metadata - Metadata of an enhanced JS error instance
     */
    setMetadata(metadata: M): void;

    /**
     * Gets the parsed stack trace of an enhanced JS error instance
     * 
     * @returns Parsed stack trace of an enhanced JS error instance
     */
    getStackParsed(): StackTracey | undefined;

    /**
     * Checks if an enhanced JS error instance has a parsed stack trace
     * 
     * @returns true if an enhanced JS error has a parsed stack trace, false if otherwise
     */
    hasStackParsed(): boolean;

    /**
     * Sets the parsed stack trace of an enhanced JS error instance
     * 
     * @param stack - A stack trace unparsed or parsed
     */
    setStackParsed(stack: string | StackTracey): void;
};
