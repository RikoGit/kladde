import styles from '../styles.css';

class Timer {
    constructor({ timeout, onTimerEnd, parentNode }) {
        this.domElement = document.createElement('div');
        this.step = 1000;
        this.timerId = 0;
        this.timeout = timeout;
        this.result = timeout;
        this.setDomElementClass();
        if (parentNode) {
            this.renderTo(parentNode);
        }
        this.onTimerEnd = onTimerEnd;
    }

    setDomElementClass() {
        this.domElement.className = Timer.CLASSES.name;
    }

    renderTo(parentNode) {
        parentNode.appendChild(this.domElement);
    }

    show() {
        const time = new Date(this.result);
        this.domElement.textContent = `${String(time.getMinutes()).padStart(2, 0)} : ${String(
            time.getSeconds(),
        ).padStart(2, 0)}`;
        this.result -= this.step;

        if (this.result === -this.step) {
            this.stop();
            this.onTimerEnd();

            return this;
        }

        return this;
    }

    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => this.show(), 1000);
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

Timer.CLASSES = {
    name: styles.timer,
};

export default Timer;
