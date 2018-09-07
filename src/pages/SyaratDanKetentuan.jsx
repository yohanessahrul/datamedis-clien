import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class SyaratDanKetentuan extends Component {
    componentDidMount() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div>
                <div className="headerWrap">
                    <Navigation/>
                </div>
                <div className="contentWrap">
                    <Container className="section">
                        <Row>
                            <Col md="12">
                                <h1>Syarat & Ketentuan</h1>
                                {/* <p>Kebijakan privasi ini menggambarkan informasi pribadi yang kami kumpulkan dan bagaimana kami menggunakannya.</p> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <h4>A. Tentang Datamedis.id</h4>
                                <div>
                                    <ul>
                                        <li>
                                            <p>Datamedis.id (<b>'Datamedis'</b> atau <b>'Kami'</b>) merupakan situs/aplikasi penyedia layanan visualisasi terhadap data medis yang disediakan oleh pasien, faskes atau perwakilan-nya (sebagaimana didefinisikan di bawah) yang bertujuan untuk memberikan kemudahan percernaan bagi setiap penguna-nya (<b>'Layanan Datamedis'</b>).</p>
                                        </li>
                                        <li>
                                            <p>Sebagai penegasan, bahwa Kami bukan merupakan Fasilitas Kesehatan atau penyedia layanan lain yang disamakan dengan itu juga bukan pula sebagai reseller atau agen atau hubungan lain yang dipersamakan dengan itu (termasuk waralaba) dari suatu Fasilitas Kesehatan dan oleh karenanya setiap hal yang berkaitan dengan kebenaran informasi dari Rekam Medis yang tersedia, atau hal lain yang berkaitan dengan itu, termasuk legalitas dari Fasilitas Kesehatan yang akan melaksanakan Layanan Kesehatan termasuk personel-nya adalah bukan merupakan tanggung jawab Kami.</p>
                                        </li>
                                        <li>
                                            <p>Selain itu, kami juga tidak bertanggung jawab atas validitas dan/atau keakuratan dari Rekam Medis asli yang terus kami hanya visualisasikan.</p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="12">
                                <h4>B. Dokumen Syarat dan Ketentuan</h4>
                                <div>
                                    <ul>
                                        <li>
                                            <p>Dokumen Syarat dan Ketentuan ini adalah Perjanjian Induk Pemesanan (<b>'Perjanjian'</b>), yang Kami buat dan Kami sediakan untuk dibaca dan dipahami oleh Anda sebelum menggunakan Layanan Datamedis. Perjanjian ini mengatur secara terperinci mengenai tata cara penggunaan Layanan Datamedis berikut dengan pembatasan-nya.</p>
                                        </li>
                                        <li>
                                            <p>Selain dokumen Perjanjian ini Anda wajib untuk membaca dan memahami ketentuan sebagaimana tertuang dalam Privacy Policy yang kami sediakan dalam situs/aplikasi Datamedis (<b>'Privacy Policy'</b>)</p>
                                        </li>
                                        <li>
                                            <p>Dengan menekan tombol 'setuju' (atau metoda lain yang disediakan oleh Datamedis dalam mengkonfirmasi persetujuan Anda atas Perjanjian ini) maka Anda dianggap telah memahami mengakui, menyetujui, dan akan melaksanakan setiap hal yang tertuang di dalam Perjanjian ini serta Privacy Policy dan oleh karenanya Perjanjian ini serta Privacy Policy akan menjadi dokumen hukum yang mengikat Anda dan Datamedis sehubungan penggunaan Layanan Datamedis.</p>
                                        </li>
                                        <li>
                                            <p>Perjanjian ini berikut dengan setiap dokumen lain yang diacu dalam Perjanjian ini dibuat, diatur, dan ditafsirkan berdasarkan ketentuan hukum Negara Republik Indonesia dan setiap permasalahan yang timbul atas pelaksanaan Perjanjian ini dan penggunaan Layanan Datamedis akan diselesaikan secara musyawarah oleh Anda dan Kami.</p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="12">
                                <h4>C. Hak Kekayaan Intelektual Atas Datamedis</h4>
                                <div>
                                    <ul>
                                        <li>
                                            <p>Kami adalah pemilik tunggal dan pemegang yang sah dari hak kekayaan intelektual atas&nbsp;aplikasi Datamedis.id. Nama, ikon, dan logo Datamedis.id merupakan hak cipta dan merek dagang yang dilindungi undang-undang Republik Indonesia. Dilarang keras menggunakan, memodifikasi, atau memasang nama, ikon, logo, atau merek tersebut tanpa persetujuan tertulis dari&nbsp;Kami.&nbsp;</p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="12">
                                <h4>D. Keamanan Situs</h4>
                                <div>
                                    <ol>
                                        <li>
                                            <p>Kami berkomitmen penuh untuk menjaga privasi Anda dan menjamin bahwa pada saat Anda memberikan dan memasukkan informasi yang diminta pada saat menggunakan layanan situs kami. Informasi Pelanggan hanya akan kami pergunakan untuk hal-hal sebagaimana tertuang dalam Perjanjian ini.&nbsp;</p>
                                        </li>
                                        <li>
                                            <p>Keamanan website/situs adalah tanggung jawab kami sepenuhnya dan kami akan mengupayakan upaya terbaik untuk melaksanakan pengamanan tersebut. Namun demikian, gangguan <i>hacker</i> atau gangguan lain sejenisnya termasuk virus yang berasal dari luar sistem kami akan dianggap sebagai <i>force majeure</i>. Dalam kondisi demikian, kami akan melaksanakan perbaikan pada situs kami dalam tempo yang singkat.</p>
                                        </li>
                                        <li>
                                            <p>Komitmen kami adalah menjaga keamanan website/situs Datamedis.id dengan mencegah terjadinya akses ilegal, kami melakukan pencegahan secara elektronik, fisik dan prosedur manajerial yang diperlukan demi menjaga privasi Anda yang Kami kumpulkan secara online.</p>
                                        </li>
                                        <li>
                                            <p>Situs Kami dapat menyediakan referensi menuju ke website lain, namun ketika Anda berkunjung ke website lain tersebut kami tidak menjamin keamanan privasi, informasi serta jika adanya gangguan apapun yang disebabkan oleh pilihan Anda untuk mengunjungi situs-situs tersebut. Anda mengakui bahwa akibat tersebut merupakan tanggung jawab pribadi Anda.</p>
                                        </li>
                                        <li>
                                            <p>Semua server web dapat melakukan pelacakan dasar informasi mengenai pengunjung. Informasi yang dapat dilacak ini mencakup, tetapi tidak terbatas pada, alamat IP, browser, dan waktu kunjungan termasuk halaman pengarah. Informasi yang dapat dilacak adalah untuk tujuan administrasi rutin dan tujuan perawatan semata. </p>
                                        </li>
                                        <li>
                                            <p>Apabila diperlukan, Datamedis dapat menggunakan <i>cookies</i> untuk menyimpan informasi tentang preferensi pengunjung dan sejarah dalam rangka untuk lebih melayani pengunjung dan/atau menyajikan pengunjung dengan materi yang telah disesuaikan.</p>
                                        </li>
                                        <li>
                                            <p>Iklan dari pihak ketiga lainnya juga dapat menggunakan <i>cookies</i>, skrip dan/atau <i>web beacon</i> untuk melacak pengunjung ke situs kami untuk menampilkan iklan dan informasi berguna lainnya. Pelacakan tersebut dilakukan langsung oleh pihak ketiga melalui server sendiri dan tunduk pada kebijakan privasi mereka sendiri .</p>
                                        </li>
                                        <li>
                                            <p>Perhatikan bahwa Anda dapat mengubah pengaturan browser Anda untuk menonaktifkan <i>cookies</i> jika Anda memiliki masalah privasi. Menonaktifkan <i>cookies</i> untuk semua situs tidak dianjurkan karena dapat mengganggu penggunaan beberapa situs. Pilihan terbaik adalah untuk menonaktifkan atau mengaktifkan <i>cookies</i> pada basis per-situs. </p>
                                        </li>
                                    </ol>
                                </div>
                            </Col>
                            <Col md="12">
                                <h4>E. Record Informasi Klien</h4>
                                <div>
                                    <ul>
                                        <li>
                                            <p>Anda memberikan hak penuh kepada Kami untuk melakukan pengolahan data dan informasi yang Anda berikan pada saat Pendaftaran dan/atau Pemesanan jasa Datamedis.id termasuk riwayat pengunaan serta hal lain yang berkaitan dengan itu.</p>
                                        </li>
                                        <li>
                                            <p>Sebagai fasilitas bagi Anda, Kami juga memberikan kemudahan bagi Anda untuk menyimpan (meng-<i>upload</i>) rekaman medis Anda ke dalam sistem Kami, untuk mempermudah Anda dalam melakukan pelacakan rekaman kesehatan. Atas hal tersebut, hanya atas persetujuan dari Anda melalui sistem yang Kami sediakan, Kami dapat melakukan pengolahan atas informasi yang Anda upload tersebut termasuk untuk menyampaikan hasil pengolahan tersebut data kepada pihak ketiga lainnya. </p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default SyaratDanKetentuan;