import * as Serverless from 'serverless';
import * as Plugin from 'serverless/classes/Plugin';
import { DeploymentStrategies } from '../types/deploymentTypes';
import { RemoteServerlessContractSchemas, ServerlessContractSchemas } from '../types/serviceOptions';
interface OptionsExtended extends Serverless.Options {
    verbose?: boolean;
    strategy?: DeploymentStrategies;
}
export declare class ServerlessContractsPlugin implements Plugin {
    cliOptions: OptionsExtended;
    serverless: Serverless;
    hooks: Plugin.Hooks;
    commands: Plugin.Commands;
    log: Plugin.Logging['log'];
    constructor(serverless: Serverless, cliOptions: OptionsExtended, { log }: Plugin.Logging);
    deployWithContractSchemasValidation(): Promise<void>;
    listLocalContractSchemas(): ServerlessContractSchemas;
    printLocalServerlessContractSchemas(): void;
    printRemoteServerlessContractSchemas(): Promise<void>;
    listRemoteContractSchemas(): Promise<RemoteServerlessContractSchemas | undefined>;
    tagStackWithTimestamp(): void;
    uploadContractSchemas(): Promise<void>;
    validateDeployment(): Promise<void>;
    generateOpenApiDocumentation(): void;
}
export {};
//# sourceMappingURL=serverlessContractsPlugin.d.ts.map