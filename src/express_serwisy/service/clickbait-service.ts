import {LoggerService} from "../../express_serwisy_done/service/logger-service";

export class ClickbaitService {
    private clicks: number;
    private logger: LoggerService;

    constructor(logger: LoggerService) {
        this.clicks = 0;
        this.logger = logger;
    }

    async click() {
        await this.logger.info('User click recorded');
        this.clicks += 1;
    }

    async get_clicks() {
        return this.clicks;
    }
}
