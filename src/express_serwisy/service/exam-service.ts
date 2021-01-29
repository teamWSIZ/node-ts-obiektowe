import {LoggerService} from "./logger-service";
import axios from "axios";
import {Exam} from "../model/exam";

export class ExamService {
    url: string;
    private logger: LoggerService;

    constructor(url: string, logger: LoggerService) {
        this.url = url;
        this.logger = logger;
    }

    async getAllExams(onlyActive: boolean = false): Promise<Exam[]> {
        let url = `${this.url}/exams`;
        await this.logger.info(`Pulling all exams from ${url}`);

        let res = await axios.get(url);
        let result: Exam[] = [];
        res.data.forEach((item) => {
            result.push(Object.assign(new Exam(), item));
        });
        await this.logger.info(`Pulled ${result.length} exams from Exam microservice`)
        if (onlyActive) {
            return result.filter(ex => ex.active === true);
        } else {
            return result;
        }
    }

}
