interface ConstrainedJSONSchemaProperty {
    readonly type?: 'string';
    readonly const?: string;
    readonly enum?: readonly string[];
}
export interface ConstrainedJSONSchema {
    readonly type: 'object';
    readonly additionalProperties?: boolean;
    readonly properties?: {
        readonly [key: string]: ConstrainedJSONSchemaProperty;
    };
    readonly required?: readonly string[];
}
export {};
//# sourceMappingURL=constrainedJSONSchema.d.ts.map