class Timer {
    constructor({ timeout, onTimerEnd }) {
        this.step = 1000;
        this.timerId = 0;
        this.timeout = timeout;
        this.result = timeout;
        this.onTimerEnd = onTimerEnd;
    }

    doStep() {
        // const time = new Date(this.result);
        /* 
        this.domElement.textContent = `${String(time.getMinutes()).padStart(2, 0)} : ${String(
            time.getSeconds(),
        ).padStart(2, 0)}`;
        */
        this.result -= this.step;

        if (this.result === -this.step) {
            this.onTimerEnd();

            return this;
        }

        return this;
    }

    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => this.doStep(), this.step);
        }

        return this;
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
        this.timerId = 0; // обнулим счетчик
        this.result = this.timeout;

        return this;
    }
}

export default Timer;
