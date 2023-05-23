import { AppService } from './app.service';
import { Observable } from 'rxjs';
export declare const storage: {
    storage: any;
};
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    downloadFile(filename: any, res: any): Observable<Object>;
    UploadMultiplesFiles(files: any, Body: any): Promise<{
        response: boolean;
    }>;
    downloadPDF(res: any): Promise<void>;
}
