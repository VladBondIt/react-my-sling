import { SET_CATEGORY_TYPES, SET_ACTIVE_CATEGORY_TYPE, SET_CATEGORY_BRANDS, SET_ACTIVE_CATEGORY_BRAND } from '../types'

const initialState = {
    typeItems: [{ id: 0, name: "Весь каталог" }],
    brandItems: [],
    activeTypeItem: 0,
    activeBrandItem: 0,

}
const categoryes = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_TYPES:
            return {
                ...state,
                typeItems: [
                    state.typeItems[0],
                    ...action.payload
                ],
            }
        case SET_CATEGORY_BRANDS:
            return {
                ...state,
                brandItems: action.payload,
            }
        case SET_ACTIVE_CATEGORY_TYPE:
            return {
                ...state,
                activeTypeItem: action.payload
            }
        case SET_ACTIVE_CATEGORY_BRAND:
            return {
                ...state,
                activeBrandItem: action.payload
            }
        default:
            return state;
    }
}

export default categoryes;