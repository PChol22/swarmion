import { ProjectConfiguration, Tree } from '@nrwl/devkit';
import { NormalizedSchema, PackageJson, TsConfig } from '../types';
interface PackageGeneratorParams {
    tree: Tree;
    options: NormalizedSchema;
    sourcePath: string;
    packageJson: (options: NormalizedSchema) => PackageJson;
    packageProjectJson: (root: string) => ProjectConfiguration;
    packageTsConfig: (options: NormalizedSchema) => TsConfig;
}
export declare const packageGenerator: ({ options, packageJson, packageProjectJson, packageTsConfig, sourcePath, tree, }: PackageGeneratorParams) => void;
export {};
//# sourceMappingURL=packageGenerator.d.ts.map