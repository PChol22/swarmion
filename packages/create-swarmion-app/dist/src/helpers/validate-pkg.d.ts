declare type ValidateOutput = {
    valid: false;
    problems: string[];
} | {
    valid: true;
    problems: null;
};
export declare const validateNpmName: (name: string) => ValidateOutput;
export {};
//# sourceMappingURL=validate-pkg.d.ts.map