import {Exam} from "../_model/exam";
import {LoggerService} from "./logger-service";
import * as https from "https";
import axios from "axios";

export class ExternalDataService {
    url: string;
    private log: LoggerService;

    constructor(url: string, logger: LoggerService) {
        this.url = url;
        this.log = logger;
    }

    async getAllExams(): Promise<Exam[]> {
        let url = `${this.url}/exams`;
        this.log.info(`Pulling all exams from ${url}`);
        let res = await axios.get(url);
        let result: Exam[] = [];
        res.data.forEach((item) => {
            result.push(Object.assign(new Exam(), item));
        });
        console.log(`--------`);
        console.log(result[5]);
        return result;
    }

}
