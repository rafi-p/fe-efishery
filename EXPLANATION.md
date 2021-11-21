# Explanation

## Product List Page
* Navbar dibuat sticky di atas untuk memudahkan user mencapai halaman yang diinginkan
* Logo navbar dapat di klik untuk pindah ke halaman dashboard dengan interaksi cursor pointer dan hover sehingga user mengetahui bahwa logo bisa di klik
* Tabel dibuat 1 halaman dengan style simple agar data mudah terbaca dan lebih fokus pada data.
* Header table dibuat sticky agar user tahu data masuk dalam kategori atau kolom mana dengan pembatas border warna hijau dan shadow.
* Sort dan filter dibuat diatas header table agar mudah digunakan
* Button akan disabled jika belum memilih kategori ataupun input search
* Hasil sorting akan menempatkan semua row data yang kosong di paling atas jika ascending, begitu juga sebaliknya, semua row data kosong akan ditempatkan di bawah jika descending
* Komposisi warna mengikuti warna brand dari eFishery itu sendiri yaitu dengan warna utama `hijau`


## Add Product Page
* Navbar akan dalam keadaan `active` untuk memudahkan user untuk mengetahui sedang berada di page mana
* Page disediakan button untuk kembali ke halaman dashboard. User punya 2 opsi untuk ke dashboard yaitu melalui `logo` navbar atau `button` back
* Semua input yang disediakan adalah input yang di butuhkan oleh server
* Input kota akan muncul setelah memilih input provinsi terlebih dahulu untuk menghindari kesalahan/ketidakcocokan antara data provinsi dan kota
* Button submit akan `disabled` jika ada input yang belum di isi oleh user
* Jika proses submit data berhasil, maka akan muncul pop up notification dan lalu diarahkan ke dashboard
