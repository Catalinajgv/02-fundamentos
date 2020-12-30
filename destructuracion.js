let deadpool = {
    n: 'wade',
    ap: 'winston',
    p: 'regeneración',
    getn: function() {
        return `${this.n} ${this.ap} -poder ${this.p}`
    }
};

let { n, ap, p } = deadpool;
console.log(n, ap, p);