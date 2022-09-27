/* eslint-disable no-unused-expressions */
import './TimeMarker.css'

import Event from './Event';

function PlageHoraire(props) {
    const horaire = props.horaires

    const data = props.datas;

    return (
        <div id={horaire} className="plageHoraire">

            {data.map((element) => {
                if (element.horaireStart === horaire)
                    return <Event element={element} />
            }
            )}

        </div>
    )
}

export default PlageHoraire;