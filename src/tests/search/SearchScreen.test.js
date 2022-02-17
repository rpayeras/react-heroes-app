import { mount } from "enzyme"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { SearchScreen } from "../../components/search/SearchScreen"

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Testing SearchScreen component', () => {

    test('should show properly', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        )
         expect(wrapper).toMatchSnapshot()
         expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
    })

    test('should show batman chacaracter with queryString value', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>
        )

        expect(wrapper.find('input').prop('value')).toBe('batman')
    })

    test('should and error if hero not exists', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batmansdsd']}>
                <SearchScreen />
            </MemoryRouter>
        )

        expect(wrapper.find('.alert-danger').exists()).toBe(true)
    })


    test('should write a query and return the result page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change', {
            target: {
                name: 'q',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault: () => {}
        })

                
        expect(mockNavigate).toHaveBeenCalledWith('?q=batman')
    })
})