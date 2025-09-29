import './be.css'

function BusinessExcellence () {
    return (
        <div>  
            <div className='be-container'>
                <div className='header'><h1>Welcome to the Bar</h1></div>
                <div className='menu'>
                    <h2>What is the BAR</h2>
                    <h3>General Meaning</h3>
                    <h5>The Bar refers to the legal profession as a whole, especially lawyers who are qualified to represent clients in court. The term comes from the physical “bar” or railing in a courtroom that separates the public from the area reserved for judges, lawyers, and court officials.</h5>
                    <h3>Functions of the BAR</h3>
                    <ul>
                        <li>Admission and Regulation</li>
                        <li>Representation in Court</li>
                        <li>Professional Development</li>
                    </ul>
                </div>
                
                <div className='content'>
                    <img src='the_bar.png' alt='the_bar' className='the_bar'/>
                </div>
            </div>

        </div>
    )
}

export default BusinessExcellence