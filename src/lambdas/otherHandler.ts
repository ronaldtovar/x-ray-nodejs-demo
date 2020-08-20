import * as AWSXRay from "aws-xray-sdk";
import {Service} from "../service";

export async function otherHandler(event: any, context: any){
    init();
    const result = await Service.fileUpload("n8n-workflow-test","other_file.txt", "other content...");
    console.log(`uploaded file to S3: ${result}`);

    const response = await Service.sendRequest();
    console.log(response);

}

function init(){
    AWSXRay.captureHTTPsGlobal(require('http'), true);
    AWSXRay.captureHTTPsGlobal(require('https'), true);
    AWSXRay.capturePromise();
}
