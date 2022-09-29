/* eslint-disable no-unused-expressions */
import './PlageHoraire.css'
import Event from './Event';

function PlageHoraire(props) {
    const horaire = props.horaires

    const data = props.datas;

    var nombreEvent = 0;
    //console.log(data);

    var horaires = [];
    var i = 0;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        if (element.horaireStart === horaire) {
            nombreEvent++;
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

    // Détemine si les évents sont sur la même plage horaire

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

    // pour avoir le bon truc de la plage horaire
    //isNotTheSamePlageHoraire = isNotTheSamePlageHoraire && isTheSamePlageHoraire;

    // fait le calcul des margins
    if (isNotTheSamePlageHoraire && nombreEvent > 1) {
        for (let index = 1; index < horaires.length; index++) {
            var minutes = horaires[index].element.start.slice(3, 5);

            horaires[index].element.margin = "margin-".concat(parseInt(minutes) - parseInt(horaires[index - 1].duration))
        }
    }


    return (
        <div id={horaire} className="plageHoraire" style={{
            flexWrap: isNotTheSamePlageHoraire ? 'wrap' : ""
        }} >

            {horaires.map((event) => {
                if (event.element.horaireStart === horaire)
                    return <Event element={event.element} />
            }
            )}

        </div>
    )
}

export default PlageHoraire;