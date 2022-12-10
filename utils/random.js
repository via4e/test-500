

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

export function randomNZP() {
    // gives -1,0,1 (negative, zero, positiove)
    return Math.floor(Math.random() * 3) - 1
}

export function randomNP() {
    // gives -1 or 1
    return Math.random() < 0.5 ? -1 : 1
}

export default randomInt