import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaCdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const utilsLayer = new lambda.LayerVersion(this, 'UtilsLayer', {
      description: 'Common utilities layer',
      compatibleRuntimes: [lambda.Runtime.NODEJS_18_X],
      code: lambda.Code.fromAsset('src/layers/utilsLayer'),
    });

    const letterFunction = new lambda.Function(this, 'LetterFunction', {
      description: 'Returns the first letter of a given string',
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('src/lambda/letter'),
      handler: 'index.handler',
      layers: [utilsLayer],
    });

    const letterFunctionUrl = letterFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: {
        // By default, we'll allow all origins and methods.
        allowedOrigins: ['*'],
        allowedMethods: [lambda.HttpMethod.ALL],
        // allowedHeaders: ['content-type'], // You can specify which headers you want to allow.
      },
    });

    new cdk.CfnOutput(this, 'LetterFunctionUrl', {
      value: letterFunctionUrl.url,
    });
  }
}
