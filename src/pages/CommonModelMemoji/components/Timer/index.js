import styles from './styles.css';

export default class Timer {
    constructor(timerModel) {
        this.timerModel = timerModel;
        this.rootElement = document.createElement('div');
        this.rootElement.className = styles.root;
        this.time = new Date(0);
        this.render();
    }

    render() {
        this.time.setTime(this.timerModel.timeLeft * 1000);
        this.rootElement.textContent = `${String(this.time.getMinutes()).padStart(2, 0)} : ${String(
            this.time.getSeconds(),
        ).padStart(2, 0)}`;
    }
}
