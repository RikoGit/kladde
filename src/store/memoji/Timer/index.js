class Timer {
    constructor({ timeoutInSeconds, onTimerEnd, onTick }) {
        this.state = 'stop';
        this.timeoutInSeconds = timeoutInSeconds;
        this.onTimerEnd = onTimerEnd;
        this.onTick = onTick;
        this.timerId = null;
        this.timeLeft = timeoutInSeconds;
    }

    static tickDuration = 1000;

    tick() {
        this.timeLeft -= 1;
        if (this.onTick) {
            this.onTick();
        }

        if (this.timeLeft === 0) {
            clearInterval(this.timerId);
            this.state = 'stop';
            if (this.onTimerEnd) {
                this.onTimerEnd();
            }
        }
    }

    start() {
        if (this.timerId) {
            this.timerId = clearInterval(this.timerId);
        }
        this.timerId = setInterval(() => this.tick(), Timer.tickDuration);
        this.timeLeft = this.timeoutInSeconds;
        this.state = 'play';
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
        this.timerId = null;
        this.state = 'stop';
    }
}

export default Timer;
