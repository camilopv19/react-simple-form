import { render, screen } from '@testing-library/react';
import App from '../App';
import AddUsers from '../components/Users/AddUsers';

let getByTestId;
beforeEach(() => {
    const component = render(<AddUsers />);
    getByTestId = component.getByTestId;
});
test('should render the initial form', () => {
    const userLabel = getByTestId('usernameLbl');
    const ageLabel = getByTestId('ageLbl');
    const btnElement = getByTestId('btnAdd');

    expect(userLabel.textContent).toBe('Username');
    expect(ageLabel.textContent).toBe('Age (in Years)');
    expect(btnElement.textContent).toBe('Add user');
})

