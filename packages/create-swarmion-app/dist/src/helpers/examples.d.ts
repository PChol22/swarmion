export declare type RepoInfo = {
    username: string;
    name: string;
    branch: string;
    filePath: string;
};
export declare const hasRepo: ({ username, name, branch, filePath, }: RepoInfo) => Promise<boolean>;
export declare const getRepoUrl: ({ username, name, branch, filePath, }: RepoInfo) => string;
export declare const downloadAndExtractRepo: (root: string, { username, name, branch, filePath }: RepoInfo) => Promise<void>;
//# sourceMappingURL=examples.d.ts.map