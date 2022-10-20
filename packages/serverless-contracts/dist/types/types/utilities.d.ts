export declare type Unpacked<T> = T extends (infer U)[] ? U : T;
export declare type CleanEmptyObject<T extends object> = keyof T extends never ? Record<string, never> : T;
//# sourceMappingURL=utilities.d.ts.map