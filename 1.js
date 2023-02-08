const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day
            }) 
            if(cek){
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// Promise then dan catch
cekHariKerja('minngu')
.finally(() => console.log('Selesai menunggu')) //finally dijalankan ketika salah satu then atau catch siap dijalankan
.then(response => console.log(`${response} adalah hari kerja`)) //then akan menghandle hasil eksesuki resolve jika kode yang dijalankan berhasil
.catch(response => console.log(`${response} bukan hari kerja`)); //catch akan menghandle eksekusi reject jika kode yang dijalankan gagal


// try merupakan kode yang akan di eksekusi jika terdapat kesalahan dalam perintah maka program akan masuk ke block catch
let hariKerja = async (cek) => {
    try { 
        let hari = await cekHariKerja(cek)
        console.log(`${hari} merupakan hari kerja`)
    } catch (error) {
        console.log(error.message)
    }
}

hariKerja('senin')