const a = 4
const b = 3
const c = 10

let hitung = 0

for (let i = 0; i < c; i++) {
    hitung += a * Math.pow(b, i)
}

console.log("jumlah 10 suku pertama dari deret geometri adalah: " + hitung.toLocaleString()) 