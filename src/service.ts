import {Body, PutObjectRequest} from "aws-sdk/clients/s3";
import * as AWSXRay from "aws-xray-sdk";
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
export class Service{

    public static async fileUpload(
        bucket: string,
        key: string,
        body: Body
    ): Promise<string> {
        const s3 = new AWS.S3();
        const params: PutObjectRequest = {
            Bucket: bucket,
            Key: key,
            Body: body,
        };
        const uploadedFileInfo = await s3.upload(params).promise();
        return `${uploadedFileInfo.Bucket}/${uploadedFileInfo.Key}`;
    }

    static async sendRequest(): Promise<any>{
        const axios = require("axios");
        return (await axios.get("https://6rxwl4otv1.execute-api.us-west-2.amazonaws.com/dev/pets")).data;
    }

    public static async someFunction(): Promise<string> {
        return new Promise<string>(function(resolve) {
            setTimeout(function() {
                resolve("some result");
            }, 100);
        });
    }
}
