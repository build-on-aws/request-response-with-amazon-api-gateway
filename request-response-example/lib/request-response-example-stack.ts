import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class RequestResponseExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const backendFunction = new lambda.Function(
      this, 'BackendFunction', {
        runtime: lambda.Runtime.NODEJS_18_X,
        code: lambda.Code.fromAsset('lambda-src/backend-function'),
        handler: 'index.handler'
    });
  

    const api = new apigw.RestApi(this, 'SimpleApi', {
      restApiName: 'Simple API'
    });

    const redirect = new apigw.HttpIntegration('https://aws.amazon.com')

    api.root.addMethod('GET', redirect);

  }
}
