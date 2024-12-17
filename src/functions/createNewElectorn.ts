import {ElectronProps} from "../types";

export function createNewElectron(canvasElem: HTMLCanvasElement) {
    // random vector of fly
    const flyAngle = (Math.PI * 2 * Math.round(Math.random() * 3)) / 3;
    const newElectron: ElectronProps = {
        angle: flyAngle,
        dirX: Math.sin(flyAngle),
        dirY: Math.cos(flyAngle),
        posX: canvasElem.width / 2,
        posY: canvasElem.height / 2,
        edgeDist: 0,
        speed: 0.5,
        lifelong: 10 * 1000 * Math.random(),
        lifeStart: Date.now(),
    };
    return newElectron;
}
