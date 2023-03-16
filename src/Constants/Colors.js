import { Platform } from "react-native"

const COLORS = {
    WHITE: 'white',
    BLACK: 'black',
    PRIMARY: '#ff406c',
    SHADEDARK: '#717171',
    SHADELIGHT: '#aaaaaa',
    DANGERBG: '#ffada8',
    DANGER: '#ff5349',
    LIGHT: 'white',
    DARK: Platform.OS === 'android' ? '#2C2F33' : 'black',
    SHADOW: 'rgba(0,0,0,0.1)'
}

const DARKCOLORS = {
    WHITE: 'white',
    BLACK: 'black',
    PRIMARY: '#ff406c',
    SHADELIGHT: '#717171',
    SHADEDARK: '#aaaaaa',
    DANGERBG: '#ffada8',
    DANGER: '#ff5349',
    LIGHT: Platform.OS === 'andorid' ? '#2C2F33' : 'black',
    DARK: 'white',
    SHADOW: 'rgba(255,255,255,0.3)'
}

export default COLORS
export { DARKCOLORS }