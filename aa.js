const delay = require("delayjs");

async function masak(bahan) {
    await delay.delay(2000);
    return bahan;
}

async function makan(namaMakanan) {
    let hasilMasak = "gosong"
    hasilMasak = masak('terong');
    kasihMama = kasih(2);
    console.log(namaMakanan, hasilMasak);
}

makan("kentang");