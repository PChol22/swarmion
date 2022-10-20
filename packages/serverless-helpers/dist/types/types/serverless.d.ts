import type { AWS } from '@serverless/typescript';
declare type FunctionsIamRoleStatements = {
    iamRoleStatements?: AWS['provider']['iamRoleStatements'];
    iamRoleStatementsInherit?: boolean;
};
export declare type LambdaFunction = Exclude<AWS['functions'], undefined>[string] & FunctionsIamRoleStatements;
export {};
//# sourceMappingURL=serverless.d.ts.map