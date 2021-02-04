var AWS = require('aws-sdk')
AWS.config.update({ region: process.env.REGION })
var lambda = new AWS.Lambda({
  region: process.env.REGION,
})

exports.handler = async (event, context, callback) => {
  const targetFunctionName = 'asyncactions-' + process.env.ENV
  const username = event.userName
  const payload = {
    action: 'InitUser',
    username: username,
    uuid: context.awsRequestId,
  }

  try {
    await lambda
      .invoke({
        FunctionName: targetFunctionName,
        Payload: JSON.stringify(payload),
      })
      .promise()
    callback(null, event)
    console.log('Completed confirmation trigger for user ' + username)
  } catch (e) {
    callback(e)
    console.log(
      'Failed confirmation trigger for the following input' +
        JSON.stringify({
          event: event,
          context: context,
          callback: callback,
          target: targetFunctionName,
          payload: payload,
        }),
    )
  }
}

/* Request example
{
    "event": {
        "version": "1",
        "region": "eu-central-1",
        "userPoolId": "eu-central-1_cQMs3Twmd",
        "userName": "testuser4",
        "callerContext": {
            "awsSdkVersion": "aws-sdk-unknown-unknown",
            "clientId": "3eer2la0uv93i8tfu303t8i2fg"
        },
        "triggerSource": "PostConfirmation_ConfirmSignUp",
        "request": {
            "userAttributes": {
                "sub": "ace1c21e-440b-484e-abea-678f6d925dde",
                "cognito:user_status": "CONFIRMED",
                "email_verified": "true",
                "phone_number_verified": "false",
                "phone_number": "+306972222222",
                "email": "giorgoshstam@gmail.com"
            }
        },
        "response": {}
    },
    "context": {
        "callbackWaitsForEmptyEventLoop": true,
        "functionVersion": "$LATEST",
        "functionName": "wais38036aa9PostConfirmation-staging",
        "memoryLimitInMB": "128",
        "logGroupName": "/aws/lambda/wais38036aa9PostConfirmation-staging",
        "logStreamName": "2021/02/04/[$LATEST]80bc633015f947fa9462f9960358a466",
        "invokedFunctionArn": "arn:aws:lambda:eu-central-1:700078438137:function:wais38036aa9PostConfirmation-staging",
        "awsRequestId": "92a41d94-fd78-40c1-9e11-ab67dd3c1f6d"
    },
    "target": "asyncactions-staging",
    "payload": {
        "action": "InitUser",
        "uuid": "92a41d94-fd78-40c1-9e11-ab67dd3c1f6d"
    }
}
*/
