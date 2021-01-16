const moment = require('moment')

export class LoggerService {
    async info(msg) {
        console.log(msg);
    }

    async error(msg) {
        console.error(msg);
    }
}

export class TimedLoggerService extends LoggerService {

    get_formatted_log_line(msg, type: string) {
        const current = moment().utc().format('Y-M-D HH:MM:SS');    //todo: check seconds > 59
        return `${current} [${type}] ${msg}`;
    }

    async info(msg) {
        console.log(this.get_formatted_log_line(msg, 'INFO'));
    }

    async error(msg) {
        console.error(this.get_formatted_log_line(msg, 'ERROR'));

    }
}
