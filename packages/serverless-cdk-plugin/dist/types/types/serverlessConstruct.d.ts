import { Construct } from 'constructs';
import * as Serverless from 'serverless';
export interface ServerlessProps {
    serverless: Serverless;
}
export declare class ServerlessConstruct extends Construct {
    serverlessProps?: ServerlessProps;
    constructor(scope: Construct, id: string, serverlessProps?: ServerlessProps);
}
//# sourceMappingURL=serverlessConstruct.d.ts.map