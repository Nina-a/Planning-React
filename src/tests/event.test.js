import { render, act, screen } from '@testing-library/react';
import Event from '../components/event';

test('Component event is working', () => {
    act(() => {
        let element = {
            id: 12,
            margin: "margin-15",
            duration: 60,
        }
        render(<Event element={element}
        />);
    });
    const checkContent = screen.getByTestId("12");
    expect(checkContent).toHaveTextContent("12");
})