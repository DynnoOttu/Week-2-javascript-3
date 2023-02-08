const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        if(!error){
            callback(null, month)
        } else {
            callback(new Error('Sorry data not found'), [])
        }
    }, 4000)
}

getMonth((error, data) => {
    if(!error){
        data.map(month => month)
        console.log(data)
    }
    return error
})