import randomInt, { randomNP } from '../utils/random'
import randomWASM from '../utils/rnd.mjs';
const wasm_module = await randomWASM();

class alien {
    constructor(maxX, maxY) {
        this.calcType = 'js' // 'js' or 'wa', calculate with Javascript or WebAssembly

        this.maxX = maxX
        this.maxY = maxY
        this.x = randomInt(1,maxX) || 0
        this.y = randomInt(1, maxY) || 0
        //this.traectory = Math.random() < 0.5 ? 'horizontal' : 'vertical'
        this.traectory = ['horizontal', 'vertical', 'doubtful', 'chaotic'][randomInt(0,4)]
        this.radius = wasm_module._randomInt(3, 39) //randomInt(1,39)
        this.color = this.randomColor()

        this.alienType = (randomInt(0,4))  // 
        this.alienImage = new Image()
        this.alienImage2 = new Image()
        this.alienImage3 = new Image()
        this.alienImage.src = '../assets/alien.png'
        this.alienImage2.src = '../assets/alien2.png'
        this.alienImage3.src = '../assets/alien3.png'

        // 'chaotic' specific
        this.movement = 0
        this.deltax = 0
        this.deltay = 0
    }

    update() {
        switch (this.traectory) {
            case 'horizontal':
                this.horizontal()
                break
            case 'vertical':
                this.vertical()
                break
            case 'doubtful':
                this.doubtful()
                break
            case 'chaotic':
                this.chaotic()
                break
        }
    }

    draw(ctx) {
        switch (this.alienType) {
            case(0):
                ctx.beginPath();
                ctx.arc(this.y, this.x, this.radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = this.color
                ctx.fill();
                break;
            case(1):
                ctx.drawImage(this.alienImage, this.y, this.x)
                break;
            case (2):
                ctx.drawImage(this.alienImage2, this.y, this.x)
                break;
            case (3):
                ctx.drawImage(this.alienImage3, this.y, this.x)
                break;
        }

    }

    horizontal() {
        this.y -= 1
        if (this.y < 0) this.y = this.maxY
    }

    vertical() {
        this.x -= 1
        if (this.x < 0) this.x = this.maxX
    }

    doubtful() {
        this.x = this.x - wasm_module._randomNZP() * 3
        this.y = this.y - wasm_module._randomNZP() * 3
        if (this.x < 0) this.x = this.maxX
        if (this.x > this.maxX) this.x = 0
        if (this.y < 0) this.y = this.maxY
        if (this.y > this.maxY) this.y = 0
    }

    chaotic() {
        if (this.movement) {
            this.movement -= 1
        } else {
            this.movement = wasm_module._randomInt(30, 222)
            this.deltax = wasm_module._randomInt(0, 3) * randomNP()  //wasm_module._randomNZP()
            this.deltay = wasm_module._randomInt(0, 3) * randomNP()  // wasm_module._randomNZP()
        }
        this.x = this.x - this.deltax
        this.y = this.y - this.deltay

        if (this.x < 0) this.x = this.maxX
        if (this.x > this.maxX) this.x = 0
        if (this.y < 0) this.y = this.maxY
        if (this.y > this.maxY) this.y = 0
    }

    randomColor() {
        let color = '#'
        // const pallete = '0123456789ABCDEF' // full pallete
        const pallete = '23456789ABCDEF'
        for (let i = 0; i < 6; i++) {
            color += pallete[randomInt(0,pallete.length)]
        }
        return color
    }
}

export default alien