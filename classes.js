class Ring {
    constructor(color,gem) {
        this.color = color;
        this.gem = gem;
    }
    print() {
        console.log(`${this.color} ${this.gem} ring`);
    }
}

const shapphireRing = new Ring('gold','sapphire')
const rubyRing = new Ring('gold','ruby');
const diamondRing = new Ring('gold','diamond')

shapphireRing.print()
rubyRing.print()
diamondRing.print()