## Request-Response with Amazon API Gateway

This is the companion repository for the tutorial Request-Response with Amazon API Gateway and AWS Lambda (URL pending).

Cloning this repository is not required for the tutorial, but it provides branches with individual milestones for each step:

## Instructions

### Load a milestone 
You can load and explore the individual milestones by checking out their respective branches:

**Step 1 - Create and Deploy the CDK App**:

```bash
git checkout 01-empty-cdk-project
```

**Step 2 - Create and Deploy the API**:

```bash
git checkout 02-api-gateway
```

**Step 3 - Create a Lambda Function**:

```bash
git checkout 03-lambda-function
```

**Step 4 - Connect the Lambda Function to the API**:

```bash
git checkout 04-connect-lambda-to-api
```

### Deploy a milestone

To deploy any of the milestones to an AWS account, you need the following:
- A free AWS account: [How to create a free AWS account](https://aws.amazon.com/getting-started/guides/setup-environment/)
- The AWS CDK: [How to setup and bootstrap the AWS CDK](https://aws.amazon.com/getting-started/guides/setup-cdk/)

Once everything is set up, load any of the branches and type the following command:

```bash
cdk deploy
```

### Clean up

To clean up and delete all created resources, type:

```bash
cdk destroy
```

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

