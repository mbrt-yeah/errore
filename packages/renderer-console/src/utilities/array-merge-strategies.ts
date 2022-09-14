import { Options } from "deepmerge";

type TArrayMergeStrategyName = "combine" | "overwrite";

type TArrayMergeStrategy = (target: any[], source: any[], options: Options) => any[];

const ArrayMergeStrategies: { [key in TArrayMergeStrategyName]: TArrayMergeStrategy } = {
    "combine": (target, source, options) => {
        const destination = target.slice()

        /*
        source.forEach((item, index) => {
            if ( typeof destination[index] === "undefined" )
                destination[index] = options.clone(item, options)

            else if ( options.isMergeableObject(item) )
                destination[index] = merge(target[index], item, options)

            else if ( target.indexOf(item) === -1 )
                destination.push(item)
        });
        */

        return destination;
    },
    "overwrite": (destinationArray, sourceArray, options) => sourceArray,
};

export { TArrayMergeStrategy, ArrayMergeStrategies };
