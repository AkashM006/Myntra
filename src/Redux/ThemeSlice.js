import { createSlice } from "@reduxjs/toolkit";
import COLORS, { DARKCOLORS } from '../Constants/Colors'

const initialState = {
    colors: { ...DARKCOLORS },
    theme: 'dark'
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggle: state => {
            if (state.theme === 'light') state.colors = { ...DARKCOLORS }
            else state.colors = { ...COLORS }
            state.theme = state.theme == 'light' ? 'dark' : 'light'
        },
        setTheme: (state, action) => {
            if (action.payload === 'light')
                state.colors = { ...COLORS }
            else
                state.colors = { ...DARKCOLORS }
            state.theme = action.payload
        }
    }
})

export const { toggle, setTheme } = ThemeSlice.actions

export default ThemeSlice.reducer