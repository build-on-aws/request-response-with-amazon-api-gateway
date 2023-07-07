import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class RequestResponseExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new apigw.RestApi(this, 'SimpleApi', {
      restApiName: 'Simple API'
    });

    const redirect = new apigw.HttpIntegration('https://aws.amazon.com')
    
    api.root.addMethod('GET', redirect);

  }
}
