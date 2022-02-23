import React from 'react'

class Histori extends React.Component {
    render() {
        return(
            <div class="main-panel">
            <div class="content-wrapper">
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                            <h4 class="card-title">Histori Pembayaran</h4>
                            <p class="card-description">Halaman Histori Pembayaran</p>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>NISN</th>
                                        <th>NAMA SISWA</th>
                                        <th>KELAS</th>
                                        <th>KOMPETENSI KEAHLIAN</th>
                                        <th>ANGKATAN</th>
                                        <th>NOMINAL</th>
                                        <th>TANGGAL BAYAR</th>
                                        <th>BULAN</th>
                                        <th>TAHUN</th>
                                        <th>KET</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>45673543</td>
                                        <td>Nabilla Putri</td>
                                        <td>XI 2</td>
                                        <td>Rekayasa Perangkat Lunak</td>
                                        <td>29</td>
                                        <td>600000</td>
                                        <td>2022-01-25</td>
                                        <td>Januari</td>
                                        <td>2022</td>
                                        <td><button class="btn btn-success btn-sm">Lunas</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>45673543</td>
                                        <td>Nabilla Putri</td>
                                        <td>XI 2</td>
                                        <td>Rekayasa Perangkat Lunak</td>
                                        <td>29</td>
                                        <td>600000</td>
                                        <td>2022-01-26</td>
                                        <td>Februari</td>
                                        <td>2022</td>
                                        <td><button class="btn btn-success btn-sm">Lunas</button></td>
                                    </tr>
                                        <tr> <td>3</td>
                                        <td>45673543</td>
                                        <td>Nabilla Putri</td>
                                        <td>XI 2</td>
                                        <td>Rekayasa Perangkat Lunak</td>
                                        <td>29</td>
                                        <td>600000</td>
                                        <td>2022-01-27</td>
                                        <td>Juni</td>
                                        <td>2022</td>
                                        <td><button class="btn btn-success btn-sm">Lunas</button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>45673546</td>
                                        <td>Mark Lee</td>
                                        <td>XI 1</td>
                                        <td>Rekayasa Perangkat Lunak</td>
                                        <td>29</td>
                                        <td>600000</td>
                                        <td>2022-01-27</td>
                                        <td>Januari</td>
                                        <td>2022</td>
                                        <td><button class="btn btn-success btn-sm">Lunas</button></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>45673546</td>
                                        <td>Mark Lee</td>
                                        <td>XI 1</td>
                                        <td>Rekayasa Perangkat Lunak</td>
                                        <td>29</td>
                                        <td>600000</td>
                                        <td>2022-01-27</td>
                                        <td>Februari</td>
                                        <td>2022</td>
                                        <td><button class="btn btn-success btn-sm">Lunas</button></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>45673546</td>
                                        <td>Mark Lee</td>
                                        <td>XI 1</td>
                                        <td>Rekayasa Perangkat Lunak</td>
                                        <td>29</td>
                                        <td>600000</td>
                                        <td>2022-01-28</td>
                                        <td>Januari</td>
                                        <td>2022</td>
                                        <td><button class="btn btn-success btn-sm">Lunas</button></td>
                                    </tr>
                                </tbody>
                                </table>
                                <button class="btn btn-outline-success btn-sm">Cetak Laporan</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Histori;