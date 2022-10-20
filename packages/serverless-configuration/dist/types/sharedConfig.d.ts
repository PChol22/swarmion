export declare const projectName = "swarmion";
export declare const region = "eu-west-1";
export declare const frameworkVersion = ">=3.0.0";
export declare const defaultEnvironment = "dev";
export declare const sharedProviderConfig: {
    readonly name: "aws";
    readonly runtime: "nodejs16.x";
    readonly architecture: "arm64";
    readonly region: "eu-west-1";
    readonly profile: "${param:profile}";
    readonly stage: "${opt:stage, 'dev'}";
    readonly environment: {
        readonly AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1";
        readonly NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000";
    };
    readonly deploymentMethod: "direct";
};
export declare const sharedParams: {
    dev: {
        profile: string;
    };
    staging: {
        profile: string;
    };
    production: {
        profile: string;
    };
};
export declare const sharedEsbuildConfig: {
    packager: string;
    bundle: boolean;
    minify: boolean;
    keepNames: boolean;
    sourcemap: boolean;
    exclude: string[];
    target: string;
    platform: string;
    mainFields: string[];
    concurrency: number;
};
//# sourceMappingURL=sharedConfig.d.ts.map