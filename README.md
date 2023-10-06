# lambda-cdk-starter

This is a minimal starter project for developing AWS Lambdas and Lambda Layers using CDK and TypeScript.

The project includes:

- A basic Lambda function
- A basic lambda layer and included TS config
- [Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html) for dedicated HTTP(S) endpoints
- CDK configuration for deploying the Lambda and Layer

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
