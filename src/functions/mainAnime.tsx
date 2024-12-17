import {ElectronProps} from "../types";
import {createNewElectron} from "./createNewElectorn";
import {fillBackdrop} from "./fillBackdrop";
import {drawElectrons} from "./drawElectrons";

function mainAnime(elem: HTMLCanvasElement, sparkMaxAmount?: number) {
    const context = elem.getContext("2d");
    const electronColor = "rgb(74,196,46)";
    const electronRadius = 1;
    let electrons: Array<ElectronProps> = [];
    // length of hexagon edge
    const edgeLength = 50;
    const maxElectrons = sparkMaxAmount ? sparkMaxAmount : 10;
    let lastTime = Date.now();

    requestAnimationFrame(anime);

    function rebootAnimation() {
        electrons = [];
    }

    function anime() {
        window.addEventListener("resize", rebootAnimation);

        const electronsForDelete: Array<number> = [];
        if (context === null) {
            return;
        }
        // The condition of creation of a new electron
        if (Math.random() > 0.9 && electrons.length < maxElectrons) {
            const newElectron = createNewElectron(elem);
            electrons.push(newElectron);
        }
        fillBackdrop(elem, context);
        electrons = drawElectrons(
            electrons,
            electronsForDelete,
            context,
            electronRadius,
            edgeLength,
            lastTime,
            electronColor,
        );
        lastTime = Date.now();

        requestAnimationFrame(anime);
    }
}

export default mainAnime
