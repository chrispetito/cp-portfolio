import React from 'react'
import '../styling/footer.css'

class Footer extends React.Component{
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div className='footer-div'>
                <i id="nav-icon-footer" className="fab fa-linkedin"></i>
                <i id="nav-icon-footer" className="fab fa-github"></i>
                <i id="nav-icon-footer" className="fas fa-file"></i>
            </div>
        )
    }
}

export default Footer