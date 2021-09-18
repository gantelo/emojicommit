# About

Standarize emoji use across your company for your commits

# Tech stack

 - React
 - DynamoDB: key/value store for emoji click tracking
 - Lambda: upsert action to the DDB
 - CloudWatch/Lambda: 1 day trigger event to update the sort order based on emoji copies
 - API Gateway: endpoint to call lambda function

## [Link to the page](https://gantelo.github.io/emojicommit/)
