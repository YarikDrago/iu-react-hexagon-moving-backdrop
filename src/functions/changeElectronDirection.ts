export function changeElectronDirection(direction: number) {
    const newAngelDir = Math.random() * 2 - 1 >= 0 ? 1 : -1;
    return direction + (newAngelDir * Math.PI) / 3
}
