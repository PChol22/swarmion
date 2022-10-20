"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedProviderConfig = exports.sharedParams = exports.sharedEsbuildConfig = exports.region = exports.projectName = exports.frameworkVersion = exports.defaultEnvironment = void 0;
var projectName = 'swarmion';
exports.projectName = projectName;
var region = 'eu-west-1';
exports.region = region;
var frameworkVersion = '>=3.0.0';
exports.frameworkVersion = frameworkVersion;
var defaultEnvironment = 'dev';
exports.defaultEnvironment = defaultEnvironment;
var sharedProviderConfig = {
  name: 'aws',
  runtime: 'nodejs16.x',
  architecture: 'arm64',
  region: region,
  profile: '${param:profile}',
  // Used to point to the right AWS account
  stage: "${opt:stage, 'dev'}",
  // Doc: https://www.serverless.com/framework/docs/providers/aws/guide/credentials/
  environment: {
    AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000'
  },
  deploymentMethod: 'direct'
};

/**
 * common profiles settings. This must be put in the `custom` section of the `serverless.ts`
 * config files since stage params cannot be used for the profile. See https://github.com/serverless/serverless/issues/10642
 *
 * An empty string for a profile means that the default profile will be used
 */
exports.sharedProviderConfig = sharedProviderConfig;
var sharedParams = {
  dev: {
    profile: 'swarmion-developer'
  },
  staging: {
    profile: ''
  },
  production: {
    profile: ''
  }
};
exports.sharedParams = sharedParams;
var sharedEsbuildConfig = {
  packager: 'pnpm',
  bundle: true,
  minify: true,
  keepNames: true,
  sourcemap: true,
  exclude: ['aws-sdk'],
  target: 'node16',
  platform: 'node',
  mainFields: ['module', 'main'],
  concurrency: 5
};
exports.sharedEsbuildConfig = sharedEsbuildConfig;
//# sourceMappingURL=sharedConfig.js.map