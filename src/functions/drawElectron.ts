export function drawElectron(
    context: CanvasRenderingContext2D,
    posX: number,
    posY: number,
    radius: number,
    color: string,
) {
    context.fillStyle = color;
    context.beginPath();
    context.ellipse(posX, posY, radius, radius, 0, 0, Math.PI * 2);
    context.fill();
}
