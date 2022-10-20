declare const TEMPLATES: readonly ["swarmion-starter", "swarmion-full-stack"];
export declare type Template = typeof TEMPLATES[number];
export declare const isValidTemplate: (template: unknown) => template is "swarmion-starter" | "swarmion-full-stack";
export {};
//# sourceMappingURL=templates.d.ts.map