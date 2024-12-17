export function fillBackdrop(
    elem: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
) {
    context.fillStyle = "rgba(0,0,0,0.01)";
    context.beginPath();
    context.fillRect(0, 0, elem.width, elem.height);
}
