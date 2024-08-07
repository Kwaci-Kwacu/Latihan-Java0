
let panjang = 20.5; 
let lebar = 30; 


let hargaPerMeter = 1500000; 

// PPN
let ppn = 0.15; 

// Menghitung luas tanah
let luasTanah = panjang * lebar;

// Menghitung total harga sebelum PPN
let totalHargaSebelumPPN = luasTanah * hargaPerMeter;

// Menghitung jumlah PPN
let jumlahPPN = totalHargaSebelumPPN * ppn;

// Menghitung total harga setelah PPN
let totalHargaSetelahPPN = totalHargaSebelumPPN + jumlahPPN;


console.log("Luas tanah: " + luasTanah + " meter persegi");
console.log("Total harga sebelum PPN: Rp " + totalHargaSebelumPPN.toLocaleString());
console.log("Jumlah PPN (15%): Rp " + jumlahPPN.toLocaleString());
console.log("Total harga setelah PPN: Rp " + totalHargaSetelahPPN.toLocaleString());
