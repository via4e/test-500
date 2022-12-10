import randomInt, { randomNZP, randomNP } from '../utils/random'

class alien {
    constructor(maxX, maxY) {
        this.maxX = maxX
        this.maxY = maxY
        this.x = randomInt(1,maxX) || 0
        this.y = randomInt(1, maxY) || 0
        //this.traectory = Math.random() < 0.5 ? 'horizontal' : 'vertical'
        this.traectory = ['horizontal', 'vertical', 'doubtful', 'chaotic', 'chaotic', 'chaotic'][randomInt(0,6)]
        this.radius = randomInt(1,39)
        this.color = this.randomColor()

        this.alienType = (randomInt(0,2))  // 
        this.alienImage = new Image()
        this.alienImage.src = '../assets/alien.png'

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
                ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = this.color
                ctx.fill();
                break;
            case(1):
                ctx.drawImage(this.alienImage, this.x, this.y)
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
        this.x = this.x - randomNZP() * 3
        this.y = this.y - randomNZP() * 3
        if (this.x < 0) this.x = this.maxX
        if (this.x > this.maxX) this.x = 0
        if (this.y < 0) this.y = this.maxY
        if (this.y > this.maxY) this.y = 0
    }

    chaotic() {
        if (this.movement) {
            this.movement -= 1
        } else {
            this.movement = randomInt(47,249)
            this.deltax = randomInt(0,3) * randomNP()
            this.deltay = randomInt(0,3) * randomNP()
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