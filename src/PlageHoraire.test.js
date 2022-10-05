import { render, act, screen } from '@testing-library/react';
import PlageHoraire from './PlageHoraire';

test('Component plagehoraire "09h" had the good numbers of children', () => {
    act(() => {
        let horaires = "09h";
        let datas = [{
            FinEnMinutes: 585,
            debutEnMinutes: 540,
            duration: 45,
            horaireEnd: "9h",
            horaireStart: "09h",
            id: 12,
            margin: "margin-00",
            start: "09:00",
        },];

        render(<PlageHoraire horaires={horaires} datas={datas}
        />);
    });
    const checkContent = screen.getByTestId("09h");
    expect(checkContent.childElementCount).toBe(1);
})

test('Component plagehoraire "10h" had the good numbers of children', () => {
    act(() => {
        let horaires = "10h";
        let datas = [{
            FinEnMinutes: 585,
            debutEnMinutes: 540,
            duration: 45,
            horaireEnd: "9h",
            horaireStart: "09h",
            id: 12,
            margin: "margin-00",
            start: "09:00",
        },
        {
            FinEnMinutes: 630,
            debutEnMinutes: 600,
            duration: 30,
            horaireEnd: "10h",
            horaireStart: "10h",
            id: 9,
            margin: "margin-00",
            start: "10:00",
        },
        {
            FinEnMinutes: 660,
            debutEnMinutes: 625,
            duration: 35,
            horaireEnd: "11h",
            horaireStart: "10h",
            id: 6,
            margin: "margin-25",
            start: "10:25",

        },
        {
            FinEnMinutes: 675,
            debutEnMinutes: 645,
            duration: 30,
            horaireEnd: "11h",
            horaireStart: "10h",
            id: 7,
            margin: "margin-45",
            start: "10:45",
        },
        {
            FinEnMinutes: 740,
            debutEnMinutes: 700,
            duration: 40,
            horaireEnd: "12h",
            horaireStart: "11h",
            id: 16,
            margin: "margin-40",
            start: "11:40",
        }];

        render(<PlageHoraire horaires={horaires} datas={datas}
        />);
    });
    const checkContent = screen.getByTestId("10h");
    expect(checkContent.childElementCount).toBe(3);
})