/**
 * @file    Contains the i-errore-parameters module
 * @author  Matthias Einbrodt
 * @since   0.1.0
 * 
 * @license MIT License (MIT)
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/mbrt-yeah/errore/blob/master/LICENSE
 */

/** @module i-errore-parameters */

import { Errore } from "./errore";

/**
 * Interface that encapsulates the parameters which can be passed to the constructor of 
 * an enhanced JS error class (see {@link Errore} class).
 *  
 * @interface IErroreParameters
 * @typeParam  M - The type of the metadata property
 */
export interface IErroreParameters<M = any> {
    /** A cause of an enhanced JS error object */
    cause?: Errore | Error;

    /** A name of an enhanced JS error object */
    name: string;

    /** A message of an enhanced JS error object */
    message: string;

    /** Metadata of an enhanced JS error object */
    metadata?: M;

    /** A stack trace of an enhanced JS error object */
    stack?: string;
};
