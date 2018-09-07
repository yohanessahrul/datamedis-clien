import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class KebijakanPrivasi extends Component {
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
                                <h1>Kebijakan Privasi</h1>
                                <p>Kebijakan privasi ini menggambarkan informasi pribadi yang kami kumpulkan dan bagaimana kami menggunakannya.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <h4>A. Akses Terhadap Layanan Datamedis</h4>
                                <div>
                                    <ul>
                                        <li>
                                            <p>Alamat email dan password yang Anda masukkan pada saat Pendaftaran adalah akses Anda untuk menggunakan Layanan Datamedis (<b>'Akses <i>Login</i>'</b>). Kami hanya memberikan Akses <i>Login</i> kepada Anda sebagai pihak yang melakukan pendaftaran, oleh karenanya Anda wajib menjaga kerahasiaan Akses <i>Login</i> tersebut dan memastikan bahwa Akses <i>Login</i> tersebut hanya digunakan oleh Anda sendri ataupun pihak ketiga yang Anda beri kewenangan. Segala penggunaan Akses <i>Login</i> secara tidak bertanggung jawab oleh pihak lain diluar Anda, kecuali dapat dibuktikan bahwa penggunaan tersebut adalah murni dari kesalahan Kami, adalah sepenuhnya menjadi tanggung jawab Anda. Dalam hal demikian, Anda akan membebaskan Kami dari setiap kebocoran kerahasiaan informasi yang didasarkan oleh penggunaan Akses <i>Login</i> sebagaimana disebut sebelumnya.</p>
                                        </li>
                                        <li>
                                            <p>Berdasarkan pertimbangan penuh dari Kami, dengan mempertimbangkan perilaku Anda pada saat penggunaan Layanan Datamedis, Kami berhak untuk melakukan pemblokiran dan/atau penghapusan Akses <i>Login</i> Anda.</p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="12">
                                <h4>B. Persetujuan Atas Komunikasi Elektronik</h4>
                                <div>
                                    <ul>
                                        <li>
                                            <p>Anda mengijinkan Kami untuk menyampaikan surat elektronik baik melalui setiap alamat email maupun melalui setiap nomor telpon yang Anda sampaikan baik pada saat Pendaftaran maupun pada saat pemesanan Layanan Datamedis.id sepanjang konten dari komunikasi tersebut berkaitan dengan Layanan Datamedis.id serta informasi di bidang kesehatan lainnya.</p>
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
                <Footer/>
            </div>
        );
    }
}

export default KebijakanPrivasi;