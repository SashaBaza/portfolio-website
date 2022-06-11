import {useState, useLayoutEffect} from 'react'

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches  // медіа запит щоб дізнатись тему системи, повертає буліан-значення
const defaultTheme = isDarkTheme ? 'dark' : 'light'

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme)

    useLayoutEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme', theme)
    }, [theme])

    return {theme, setTheme}
}