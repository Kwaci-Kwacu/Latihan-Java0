let Rhodey ={
    tinggi : 170 / 100,
    berat : 90,
}

function statusberat() {
    let BMI = Rhodey.berat / Math.pow(Rhodey.tinggi, 2)
    console.log("Berat:"+ BMI)

    if (BMI < 18.5) {
        console.log("Kekurangan berat badan")
    } else if (BMI < 24.9) {
        console.log("Normal (ideal)")
    } else if (BMI < 29.9) {
        console.log("Kelebihan berat badan (kecenderungan)")
    } else {
        console.log("Obesitas")
    }
}

statusberat()