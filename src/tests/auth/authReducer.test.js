import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"

describe('Testing authReducer', () => {
    const initialState = {
        logged: false
    }

    test('should return a state', () => {
        const state = authReducer(initialState, {})

        expect(state).toEqual({
            logged: false
        })
    })

    test('should authenticate and place "name" of the user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Robert'
            }
        }

        const state = authReducer(initialState, action)

        expect(state).toEqual({
            logged: true,
            name: 'Robert'
        })
    })

    test('should erase the name of the user and change logged to false', () => {
        const action = {
            type: types.logout,
        }

        const state = authReducer({
            logged: true,
            name: 'Robert'
        }, action)

        expect(state).toEqual({logged: false})
    })
})