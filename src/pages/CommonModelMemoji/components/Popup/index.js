import styles from './styles.css';

export default class Popup {
    constructor({ gameModel, onClick }) {
        this.gameModel = gameModel;
        this.createRootElement();
        if (onClick) {
            this.rootElement.querySelector(`.${styles.button}`).addEventListener('click', onClick);
        }

        this.render();
    }

    createRootElement() {
        this.rootElement = document.createElement('div');
        this.rootElement.innerHTML = `<div class="${styles.main}">
                <h1 class="${styles.title}">
                    <span class="${styles.text} ${styles.text_win}">
                        <span class="${styles.letter}">W</span>
                        <span class="${styles.letter}">i</span>
                        <span class="${styles.letter}">n</span>
                    </span>
                    <span class="${styles.text} ${styles.text_lose}">
                        <span class="${styles.letter}">L</span>
                        <span class="${styles.letter}">o</span>
                        <span class="${styles.letter}">s</span>
                        <span class="${styles.letter}">e</span>
                    </span>
                </h1>
                <div class="${styles.button}">
                    <span class="${styles.button_text_win}">Play again</span>
                    <span class="${styles.button_text_lose}">Try again</span>
                </div>
            </div>`;
    }

    render() {
        const { state } = this.gameModel;

        this.rootElement.className = styles.root;
        if (state === 'win' || state === 'lose') {
            this.rootElement.classList.add(styles.state_open);
            this.rootElement.classList.add(styles[`state_${state}`]);
        }
    }
}
