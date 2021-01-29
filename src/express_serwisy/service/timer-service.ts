export class TimerService {
    getCurrentServerTimestamp() {
        return Math.round(new Date().getTime() / 1000);
    }
}

