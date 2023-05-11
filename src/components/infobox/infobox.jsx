import './infobox.css';

export const InfoBox = () => {
return(
    <div className="infobox-container">
        <div className="infobox-title">
            <h1 className='infobox-h1'>My Info</h1>
            <h3 className='infobox-description'>Edit your information login details and prefrences</h3>
        </div>
        <div className="infobox-user-info">
            <table className='infobox-table'>
                <tr className='infobox-tr'>
                    <th className='infobox-L'>First name:</th>
                    <th className='infobox-R'>Yousra Lina</th>
                    <th className='infobox-th'>Edit</th>
                </tr>
                <tr className='infobox-tr'>
                    <th className='infobox-L'>Last name:</th>
                    <th className='infobox-R'>Boudchicha</th>
                </tr>
                <tr className='infobox-tr'>
                    <th className='infobox-L'>DOB:</th>
                    <th className='infobox-R'>22/01/2001</th>
                </tr>
                <tr className='infobox-tr'>
                    <th className='infobox-L'>E-mail:</th>
                    <th className='infobox-R'>yl.boudchicha@esi-sba.dz</th>
                </tr>
                <tr className='infobox-tr'>
                    <th className='infobox-L'>Phone-number:</th>
                    <th className='infobox-R'>057702294</th>
                </tr>
            </table>
        </div>
    </div>
)
}