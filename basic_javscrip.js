// // vrriable
// let nama = "pakis"   //string
// let umur = 16      //integer //
// let single = true   //boolean

// // constanta
// let pi = 3.14       //float / double //

// console.log(umur + "berumur " +umur + "tanun")


class persegi {
    constructor(sisi) {
        this.sisi = sisi
    }

    luas = () => {
        return this.sisi^2
    }

    keliling = () => {
        return 4 * this.sisi
    }
}

let kotak = new persegi(5)
console.log("Luas: " + kotak.luas())
console.log("Keliling: " + kotak.keliling())

class kubus extends persegi {
    
}