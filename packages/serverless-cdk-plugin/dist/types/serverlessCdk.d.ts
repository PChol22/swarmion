import { App, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as Serverless from 'serverless';
import * as Plugin from 'serverless/classes/Plugin';
import { O } from 'ts-toolbelt';
import { ServerlessConstruct } from './types';
interface OptionsExtended extends Serverless.Options {
    verbose?: boolean;
}
export declare class ServerlessCdkPlugin implements Plugin {
    cliOptions: OptionsExtended;
    serverless: Serverless;
    hooks: Plugin.Hooks;
    commands: Plugin.Commands;
    log: Plugin.Logging['log'];
    stackName: string;
    app: App;
    stack: Stack;
    configurationVariablesSources?: Plugin.ConfigurationVariablesSources;
    construct?: ServerlessConstruct | Construct;
    constructInstantiationPromise?: Promise<void>;
    constructor(serverless: Serverless, cliOptions: OptionsExtended, { log }: Plugin.Logging);
    static getCdkPropertyHelper: <T extends Construct>(prop: O.SelectKeys<T, string, "default"> & string) => string;
    static ServerlessConstruct: typeof ServerlessConstruct;
    resolveConstruct(): Promise<void>;
    instantiateConstruct(): Promise<void>;
    appendCloudformationResources(): void;
}
export {};
//# sourceMappingURL=serverlessCdk.d.ts.map