import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { Navbar } from "../../components/ui/Navbar"
import { types } from "../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

const context = {
    user: {
        name: 'User',
        logged:true
    },
    dispatch: jest.fn()
}

describe('Testing navbar', () => {
    const wrapper = mount(
        <AuthContext.Provider value={context}>
            <MemoryRouter initialEntries={['/']}>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('should render propery', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text()).toBe('User')
    })

    test('should call logout, call the navigate and dispatch', () => {
        wrapper.find('.nav-link.btn').prop('onClick')()

        expect(context.dispatch).toHaveBeenCalledWith({
            type: types.logout
        })

        expect(mockNavigate).toHaveBeenCalledWith('/login', {
            replace: true
        })
    })
})