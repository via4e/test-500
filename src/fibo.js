class fibo {
    constructor(n) {
        this.n = n
    }
    getFibo() {
       let f = Array.from({
                length: this.n
            }).reduce(
                (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []
            );
       return f
    }
}
export default fibo