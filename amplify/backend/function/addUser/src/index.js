/* Amplify Params - DO NOT EDIT
	API_WAISDYNAMODB_GRAPHQLAPIENDPOINTOUTPUT
	API_WAISDYNAMODB_GRAPHQLAPIIDOUTPUT
	AUTH_WAIS38036AA9_USERPOOLID
	ENV
	REGION
	STORAGE_WAISSTORAGE_BUCKETNAME
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify('Hello from Lambda!'),
  }
  return response
}

// try{
//   const graphqlData = await axios({
//     url: process.env.API_URL,
//     method: 'post',
//     headers: {
//       'x-api-key': process.env.API_WAISDYNAMODB_GRAPHQLAPIENDPOINTOUTPUT,
//     },
//     data: {
//       query: print(gql`
//         mutation createTestType($input: CreateTestTypeInput!) {
//           createTestType(input: $input) {
//             id
//             val
//           }
//         }
//       `),
//       variables: {
//         input: {
//           id: '12345!',
//           val: 'My first val',
//         },
//       },
//     },
//   })
//   console.log('Successfully created TestType')
//   return {
//     statusCode: 200,
//     body: JSON.stringify('OKK'),
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     },
//   }
//   } catch (err) {
//   console.log('Failed to create a UserProfile entry: ', err)
//   }