import React from 'react'

class Siswa extends React.Component {
    render() {
        return(
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                <h4 class="card-title">Data Siswa</h4>
                                <p class="card-description">Halaman Data Siswa</p>
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>NISN</th>
                                            <th>NIS</th>
                                            <th>NAMA</th>
                                            <th>KELAS</th>
                                            <th>ALAMAT</th>
                                            <th>NO. TELP</th>
                                            <th>ID SPP</th>
                                            <th>AKSI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>45673543</td>
                                            <td>54326789</td>
                                            <td>Nabilla</td>
                                            <td>XI 1</td>
                                            <td>Neo City</td>
                                            <td>081231398825</td>
                                            <td>11</td>
                                            <td><button class="btn btn-success btn-sm">Ubah</button>
                                            |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>45673789</td>
                                            <td>54326790</td>
                                            <td>Mark Lee</td>
                                            <td>XI 1</td>
                                            <td>Kwangya</td>
                                            <td>081231397729</td>
                                            <td>11</td>
                                            <td><button class="btn btn-success btn-sm">Ubah</button>
                                            |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>45674546</td>
                                            <td>54326799</td>
                                            <td>Jeno Lee</td>
                                            <td>XI 2</td>
                                            <td>Neo Planet</td>
                                            <td>081431398826</td>
                                            <td>11</td>
                                            <td><button class="btn btn-success btn-sm">Ubah</button>
                                            |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>45673548</td>
                                            <td>54326709</td>
                                            <td>Jisung</td>
                                            <td>XI 2</td>
                                            <td>Neo City</td>
                                            <td>081231398830</td>
                                            <td>11</td>
                                            <td><button class="btn btn-success btn-sm">Ubah</button>
                                            |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>45677843</td>
                                            <td>54324789</td>
                                            <td>Jaemin</td>
                                            <td>XI 3</td>
                                            <td>Kwangya</td>
                                            <td>081231408825</td>
                                            <td>11</td>
                                            <td><button class="btn btn-success btn-sm">Ubah</button>
                                            |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                        </tr>
                                    </tbody>
                                    </table>
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

export default Siswa;