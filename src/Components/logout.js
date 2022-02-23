import React from 'react'

class Logout extends React.Component {
    render() {
        return(
            <div>
                <center>
                   <br/><h5>Anda sudah logout, perlu Login untuk melanjutkan</h5>
                   <button class="btn btn-success btn-sm">Login</button>
                </center>
            </div>
        )
    }
}

export default Logout;