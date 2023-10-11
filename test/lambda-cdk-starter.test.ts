import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as LambdaCdkStarter from '../lib/lambda-cdk-starter-stack';

test('Lambda function created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new LambdaCdkStarter.LambdaCdkStarterStack(
    app,
    'LambdaCdkStarterStack'
  );
  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'index.handler',
    Runtime: 'nodejs18.x',
  });
});

test('Lambda layer created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new LambdaCdkStarter.LambdaCdkStarterStack(
    app,
    'LambdaCdkStarterStack'
  );
  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::LayerVersion', {
    CompatibleRuntimes: ['nodejs18.x'],
  });
});
