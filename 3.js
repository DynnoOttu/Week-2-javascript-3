// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1


//  let berlibur = false;
//  const waktuLiburan = new Promise((resolve, reject) => {
//     if(berlibur){
//         setTimeout(() => {
//             resolve('Waktunya kita berlibur')
//         }, 3000)
//     } else {
//         setTimeout(() => {
//             reject('Waktunya untuk bekerja')
//         }, 4000)
//     }
//  })

//  waktuLiburan 
//  .then(waktu => console.log(waktu))
//  .catch(waktu => console.log(waktu))




// promise all
let karyawan = true;
const dataKaryawan = new Promise((resolve, reject) => {
    if(karyawan){
        setTimeout(() => {
            resolve([{
                nama: 'dynno yohanis ottu',
                jabatan: 'junior programmer',
                gaji: 600000,
            }])
        }, 1000)
    } else {
        setTimeout(() => {
            reject('karyawan tidak ditemukan')
        }, 1000)
    }
})

let kegiatan = true;
const dataKegiatan = new Promise((resolve, reject) => {
    if(kegiatan){
        setTimeout(() => {
            resolve([{
                 Kegiatan: 'Membersikan sampah',
                 hari: 'Jumat',
                 keterangan: 'Semua masyarakat wajib mengikuti kegiatan yang dimakasut'
            }])
        }, 2000)
    } else {
        setTimeout(() => {
            reject('Kegiatan tidak ditemukan')
        }, 2000)
    }
})

Promise.all([dataKaryawan, dataKegiatan])
    .then(tampilkan => console.log(tampilkan))
    .catch(tampilkan => console.log(tampilkan))