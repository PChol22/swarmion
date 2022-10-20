export declare type CloudFormationImport<Name extends string> = {
    'Fn::ImportValue': Name;
};
export declare type CloudFormationExport<Name extends string, Value> = {
    Description: string;
    Value: Value;
    Export: {
        Name: Name;
    };
};
//# sourceMappingURL=cloudFormation.d.ts.map