const test = (cartype) => {
    return new Promise((resolve, reject) => {
        if (cartype == 'toyota') {
            reject('toyota tidak boleh');
        }
        resolve(`${cartype} baru`);
    })
}

test("mercy").then((result) => {
    return `${result} 2019`;
}).then((result2) => {
    console.log(result2);
}).catch((error) => {
    console.log(error)
})