# lambda-layer-cdk-starter

This is a minimal starter project for developing AWS Lambdas that use Lambda Layers using CDK and TypeScript.

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

## Testing locally with SAM

The Lambda functions can be invoked locally using [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html#install-sam-cli-instructions).

Before you can run SAM, you must run `cdk synth` to generate a CloudFormation template for the app. This template is used by SAM to run the Lambda functions locally.

To generate the template and run SAM, run the following commands:

```bash
npm run build
cdk synth
sam local start-lambda -t ./cdk.out/LambdaCdkStarterStack.template.json
```

The example lambda can then be called through the following URL:

- `http://127.0.0.1:3001/2015-03-31/functions/LetterFunction/invocations`

Example request via CURL:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "body": "{\"text\":\"hello\"}"
}' http://127.0.0.1:3001/2015-03-31/functions/LetterFunction/invocations

```

The request body mimics the event object that is passed to the Lambda function when it is invoked by AWS.


## Deployment

Before you deploy the site, make sure you have a `.env` file set up with information corresponding to your environment. You should also set up access keys in your local environment.

To deploy, first build the app and synthesize the Cloudformation template
```bash
npm run build
cdk synth
```
After that, you can make sure your diff looks correct by running `cdk diff`.

If everything looks good, you can then deploy your app with `cdk deploy`.

The output of the deploy command should also output the real Lambda Function URLs, that you can then call from wherever you require.



