import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
  Handler,
} from "aws-lambda";

const createAPIGatewayResponse = (
  statusCode: number,
  body: any
): APIGatewayProxyResult => {
  console.log("Response body", body);
  return {
    statusCode,
    ...(typeof body === "string"
      ? { body }
      : {
          body: JSON.stringify(
            statusCode === 200 || Object.keys(body || {}).length
              ? body
              : { message: "Something went wrong." }
          ),
        }),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "GET,OPTIONS,POST,PUT,DELETE,PATCH",
      "Access-Control-Allow-Credentials": true,
    },
  };
};

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(JSON.stringify(event));

  return createAPIGatewayResponse(200, {
    message: "Hello",
  });
};
