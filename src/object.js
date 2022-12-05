class alien {
    constructor(maxX, maxY) {
        this.maxX = maxX
        this.maxY = maxY
        this.x = Math.trunc(Math.random(1) * maxX) || 0
        this.y = Math.trunc(Math.random(1) * maxY) || 0
        //this.traectory = Math.random() < 0.5 ? 'horizontal' : 'vertical'
        this.traectory = ['horizontal', 'vertical', 'doubtful', 'chaotic'][Math.floor(Math.random() * 4)]
        this.radius = Math.floor(Math.random(7) * 39)
        this.color = this.randomColor()

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
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color
        ctx.fill();
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
        this.x = this.x - (Math.floor(Math.random() * 3) - 1) * 3
        this.y = this.y - (Math.floor(Math.random() * 3) - 1) * 3
        if (this.x < 0) this.x = this.maxX
        if (this.x > this.maxX) this.x = 0
        if (this.y < 0) this.y = this.maxY
        if (this.y > this.maxY) this.y = 0
    }

    chaotic() {
        if (this.movement) {
            this.movement -= 1
        } else {
            this.movement = Math.floor(Math.random(7) * 99)
            this.deltax = Math.floor(Math.random() * 3)
            this.deltay = Math.floor(Math.random() * 3)
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
            color += pallete[Math.floor(Math.random() * pallete.length)]
        }
        return color
    }
}

export default alien