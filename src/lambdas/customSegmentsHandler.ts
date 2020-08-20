import {Service} from "../service";
import * as AWSXRay from "aws-xray-sdk";

export async function customSegmentsHandler(event: any, context: any){
    init();
    let result = await Service.fileUpload("n8n-workflow-test","custom_segments_file.txt", "some other content...");
    console.log(`uploaded file to S3: ${result}`);

    result = await Service.sendRequest();
    console.log(`request result: ${result}`);
    const subSegment = AWSXRay.getSegment().addNewSubsegment(`my custom segment`);
        result =  await Service.someFunction();
        console.log(`custom segment function result: ${result}`)
    subSegment.close();

}

function init(){
    AWSXRay.captureHTTPsGlobal(require('http'), true);
    AWSXRay.captureHTTPsGlobal(require('https'), true);
    AWSXRay.capturePromise();
}
