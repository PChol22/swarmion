export declare type DefinedProperties<Type> = {
    [Property in keyof Type as Type[Property] extends undefined ? never : Property]: Type[Property];
};
//# sourceMappingURL=utils.d.ts.map