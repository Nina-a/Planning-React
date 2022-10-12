/* eslint-disable array-callback-return */

import './plageHoraire.css'
import Event from './event';
import PropTypes from 'prop-types';

function PlageHoraire(props) {
    const horaire = props.horaires

    const data = props.datas;

    let nombreEventDebut = 0;

    let horaires = [];
    let i = 0;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        if (element.horaireStart === horaire) {
            nombreEventDebut++;
            horaires[i] = {
                debut: data[index].debutEnMinutes,
                fin: data[index].FinEnMinutes,
                margin: data[index].margin,
                duration: data[index].duration,
                element: element
            }
            i++;
        }
    }

    horaires.sort(function (a, b) {
        return a.debut - b.debut;
    })

    // Détemine si les évents sont sur la même plage horaire dans une même div
    let isNotTheSamePlageHoraire = false;
    let isTheSamePlageHoraire = false;

    for (let index = 0; index < horaires.length - 1; index++) {
        if (horaires[index].fin < horaires[index + 1].debut) {
            isNotTheSamePlageHoraire = true;
        } else {
            isTheSamePlageHoraire = true;
        }
    }

    if (isNotTheSamePlageHoraire === false) {
        isNotTheSamePlageHoraire = false
    } else {
        if (isTheSamePlageHoraire === true) {
            isNotTheSamePlageHoraire = false;
        } else {
            isNotTheSamePlageHoraire = true;
        }
    }

    // fait le calcul des marginsnombreEvent
    if (isNotTheSamePlageHoraire && nombreEventDebut > 1) {
        for (let index = 1; index < horaires.length; index++) {

            const minutes = horaires[index].element.start.slice(3, 5);

            horaires[index].element.margin = "margin-".concat(parseInt(minutes) - parseInt(horaires[index - 1].duration))
        }
    }

    return (
        <div data-testid={horaire} id={horaire} className="plageHoraire" style={{
            flexWrap: isNotTheSamePlageHoraire ? 'wrap' : ""
        }} >

            {horaires.map((event) => {
                if (event.element.horaireStart === horaire)
                { return <Event key={event.element.id} element={event.element} /> }
            }
            )}

        </div>
    )
}

PlageHoraire.propTypes = {
    horaires: PropTypes.string.isRequired,
    datas: PropTypes.array.isRequired,
}

export default PlageHoraire;