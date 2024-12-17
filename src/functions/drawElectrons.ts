import {ElectronProps} from "../types";
import {drawElectron} from "./drawElectron";
import {changeElectronDirection} from "./changeElectronDirection";

export function drawElectrons(
    electrons: Array<ElectronProps>,
    electronsForDelete: Array<number>,
    context: CanvasRenderingContext2D,
    electronRadius: number,
    edgeLength: number,
    lastTime: number,
    electronColor: string,
) {
    electrons.forEach((electron, electronIndex) => {
        if (electron.lifeStart + electron.lifelong < Date.now()) {
            electronsForDelete.push(electronIndex);
        } else {
            if (electron.edgeDist < edgeLength) {
                const x = electron.posX + electron.edgeDist * electron.dirX;
                const y = electron.posY + electron.edgeDist * electron.dirY;
                drawElectron(context, x, y, electronRadius, electronColor);
                electron.edgeDist += (Date.now() - lastTime) / 10;
            } else {
                const x = electron.posX + edgeLength * electron.dirX;
                const y = electron.posY + edgeLength * electron.dirY;
                drawElectron(context, x, y, electronRadius, electronColor);
                electron.posX = x;
                electron.posY = y;
                electron.edgeDist = 0;

                electron.angle = changeElectronDirection(electron.angle);
                electron.dirX = Math.sin(electron.angle);
                electron.dirY = Math.cos(electron.angle);
            }
        }
    });
    electronsForDelete.forEach((elem) => {
        electrons.splice(elem, 1);
    });
    return electrons;
}
