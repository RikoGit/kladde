export default class Timer {
    constructor({ timeoutInSeconds, onTimerEnd, onChange }) {
        this.state = 'stop';
        this.timeoutInSeconds = timeoutInSeconds;
        this.onTimerEnd = onTimerEnd;
        this.onChange = onChange;
        this.timerId = null;
        this.timeLeft = timeoutInSeconds;
    }

    static tickDuration = 1000;

    tick() {
        this.timeLeft -= 1;

        if (this.timeLeft === 0) {
            clearInterval(this.timerId);
            this.state = 'stop';
            if (this.onTimerEnd) {
                this.onTimerEnd();
            }
        }

        if (this.onChange) this.onChange();
    }

    start() {
        if (this.state === 'play') return;
        if (this.timerId) {
            this.timerId = clearInterval(this.timerId);
        }
        this.timerId = setInterval(() => this.tick(), Timer.tickDuration);
        this.timeLeft = this.timeoutInSeconds;
        this.state = 'play';
        if (this.onChange) this.onChange();
    }

    stop() {
        if (this.state === 'stop') return;
        if (this.timerId) {
            clearInterval(this.timerId);
        }
        this.timerId = null;
        this.state = 'stop';
        if (this.onChange) this.onChange();
    }

    setDefaultTimeLeft() {
        if (this.timeLeft === this.timeoutInSeconds) return;
        this.timeLeft = this.timeoutInSeconds;
        if (this.onChange) this.onChange();
    }
}
