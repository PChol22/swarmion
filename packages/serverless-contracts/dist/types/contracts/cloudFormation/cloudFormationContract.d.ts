import { CloudFormationExport, CloudFormationImport } from './types';
export declare class CloudFormationContract<Name extends string = string> {
    contractType: "cloudFormation";
    id: string;
    name: Name;
    constructor({ id, name }: {
        id: string;
        name: Name;
    });
    get importValue(): CloudFormationImport<Name>;
    get cdkImportValue(): Name;
    exportValue<Value>({ description, value, }: {
        description: string;
        value: Value;
    }): CloudFormationExport<Name, Value>;
}
//# sourceMappingURL=cloudFormationContract.d.ts.map