import React from 'react'
import styles from '../../styles/Landing.module.css'

export default function landing() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Abel&family=Inconsolata&family=Inter:wght@300;500&display=swap" rel="stylesheet" />
      <title>Barenganaja</title>

      <section className={styles.body}>
        <div className={styles.content1}>
          <div className={styles.navbar}>
            <div className={styles.brand}>
              <img src='assets/images/logo-horizontal2.png' />
            </div>
            <div className={styles.navigation}>
              <a href='#' className={styles.active}>Layanan</a>
              <a href='#'>Pengguna</a>
              <a href='#'>Cara Pesan</a>
              <a href='#'>Partners</a>
              <a href='#'>FAQ</a>
            </div>
          </div>
          <div className={styles.greeter}>
            <div className={styles.textgreeter}>
              <p>Nikmati semua layanan <span>Barenganaja</span> dengan <span>Aman</span></p><div className={styles.underlinetext}></div>
              <div className={styles.paragraphheader}>Banyak layanan yang bisa kamu pilih untuk bisa menikmati akun secara bersama dengan teman, keluarga dan orang terdekat, yuk! cek sekarang juga di Barenganaja.</div>
            <div className={styles.start}>
              <a  className={styles.buttonstart} href='#'>Lihat Layanan</a>
              <a href='#'><div>
                <img src='assets/images/arrowright.png' />
              </div></a>
            </div>
            </div>
            <img src='assets/images/vector-cuate1.png' />
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.infoweb}>
            <div className={styles.item}>
              <div className={styles.logo}>
                <img src='assets/images/person.png' />
              </div>
              <div className={styles.info}>
                <h1>25.000<span>+</span></h1>
                <p>Pengguna</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.logo}>
                <img src='assets/images/reshotarrow.png' />
              </div>
              <div className={styles.info}>
                <h1>84.000<span>+</span></h1>
                <p>Transaksi</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.logo}>
                <img src='assets/images/wallet.png' />
              </div>
              <div className={styles.info}>
                <h1>26<span>+</span></h1>
                <p>Layanan</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.logo}>
                <img src='assets/images/thumbup.png' />
              </div>
              <div className={styles.info}>
                <h1>4/5</h1>
                <p>Kepuasan</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content3}>
          <div className={styles.fasilitas}>
            <h1>Ada banyak <span>keuntungan</span> yang dapat kamu peroleh.</h1>
          </div>
          <div className={styles.detail}>
            <div className={styles.detailleft}>
              <div>
                <p>Hemat sampai 70%</p>
                <div className={styles.detaillogo}>
                  <img className={styles.leftlogo} src='assets/images/percent.png' />
                </div>
              </div>
              <div>
                <p>Privasi Terjamin</p>
                <div className={styles.detaillogo}>
                  <img className={styles.leftlogo} src='assets/images/verified.png' />
                </div>
              </div>
              <div className={styles.supportagent}>
                <p>Customer Service Responsive</p>
                <div className={styles.detaillogo}>
                  <img className={styles.leftlogo} src='assets/images/supportagent.png' />
                </div>
              </div>
            </div>
            <img className={styles.detailvector} src='assets/images/world-pana.png' />
            <div className={styles.detailright}>
              <div>
                <div className={styles.detaillogo}>
                  <img className={styles.rightlogo} src='assets/images/wallet.png' />
                </div>
                <p>Beragam Metode Pembayaran</p>
              </div>
              <div>
                <div className={styles.detaillogo}>
                  <img className={styles.rightlogo} src='assets/images/verifiedstar.png' />
                </div>
                <p>Layanan Legal & Resmi</p>
              </div>
              <div>
                <div className={styles.detaillogo}>
                  <img className={styles.rightlogo} src='assets/images/notifications.png' />
                </div>
                <p>Pengingat Pembayaran</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content4}>
          <div className={styles.textlayanan}>
            <h1>Berlangganan <span>Produk Digital</span></h1>
          </div>
          <div className={styles.search}>
            <div className={styles.searchbar}>
              <img className={styles.rightlogo} src='assets/images/search.png' />
              <input placeholder='Cari Produk'></input>
            </div>
            <div className={styles.searchright}>
              <div className={styles.searchbar}></div>
              <div className={styles.searchbar}></div>
            </div>
          </div>
          <div className={styles.produklayanan}></div>
        </div>
      </section>
    </>
  )
}
