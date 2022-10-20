import { CloudFormationContract } from '../cloudFormationContract';
import { FullContractSchemaType } from '../types';
export declare const getFullContractSchema: <Contract extends CloudFormationContract<string>>(contract: Contract) => FullContractSchemaType<Contract["name"]>;
//# sourceMappingURL=fullContractSchema.d.ts.map