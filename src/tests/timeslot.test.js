import { render, act, screen } from '@testing-library/react';
import TimeSlot from '../components/timeslot';

test('Component plagehoraire "09h" had the good numbers of children', () => {
    act(() => {
        let horaires = "09h";
        let datas = [{
            endInMinutes: 585,
            startInMinutes: 540,
            duration: 45,
            horaireEnd: "9h",
            startTime: "09h",
            id: 12,
            margin: "margin-00",
            start: "09:00",
        },];

        render(<TimeSlot horaires={horaires} datas={datas}
        />);
    });
    const checkContent = screen.getByTestId("09h");
    expect(checkContent.childElementCount).toBe(1);
})

test('Component plagehoraire "10h" had the good numbers of children', () => {
    act(() => {
        let horaires = "10h";
        let datas = [{
            endInMinutes: 585,
            startInMinutes: 540,
            duration: 45,
            horaireEnd: "9h",
            startTime: "09h",
            id: 12,
            margin: "margin-00",
            start: "09:00",
        },
        {
            endInMinutes: 630,
            startInMinutes: 600,
            duration: 30,
            horaireEnd: "10h",
            startTime: "10h",
            id: 9,
            margin: "margin-00",
            start: "10:00",
        },
        {
            endInMinutes: 660,
            startInMinutes: 625,
            duration: 35,
            horaireEnd: "11h",
            startTime: "10h",
            id: 6,
            margin: "margin-25",
            start: "10:25",

        },
        {
            endInMinutes: 675,
            startInMinutes: 645,
            duration: 30,
            horaireEnd: "11h",
            startTime: "10h",
            id: 7,
            margin: "margin-45",
            start: "10:45",
        },
        {
            endInMinutes: 740,
            startInMinutes: 700,
            duration: 40,
            horaireEnd: "12h",
            startTime: "11h",
            id: 16,
            margin: "margin-40",
            start: "11:40",
        }];

        render(<TimeSlot horaires={horaires} datas={datas}
        />);
    });
    const checkContent = screen.getByTestId("10h");
    expect(checkContent.childElementCount).toBe(3);
})