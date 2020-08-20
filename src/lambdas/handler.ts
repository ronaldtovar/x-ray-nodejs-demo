import {Service} from "../service";

export async function handler(event: any, context: any){
    const result = await Service.fileUpload("n8n-workflow-test","test1.txt", " my test content");
    console.log(`uploaded file to S3: ${result}`);

    const response = await Service.sendRequest();
    console.log(response);
}


