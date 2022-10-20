import { CompilerOptions } from 'typescript';
export declare type TsConfig = {
    extends: string;
    compilerOptions: CompilerOptions;
    files?: string[];
    include?: string[];
    exclude?: string[];
    references?: {
        path: string;
    }[];
    'ts-node'?: {
        files: boolean;
    };
};
//# sourceMappingURL=TsConfig.d.ts.map