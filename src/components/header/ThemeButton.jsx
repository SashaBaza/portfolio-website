import React from 'react'
import { BiSun } from 'react-icons/bi'
import { HiMoon } from 'react-icons/hi'
import {useTheme} from '../../hooks/useTheme'

const ThemeButton = () => {
    const {theme, setTheme} = useTheme()

    const lightThemeClick = () => {
        setTheme('light')
    }
    const darkThemeClick = () => {
        setTheme('dark')
    }    
   
  return (
    <div className='theme-buttons'>
        <BiSun className='theme-btn light' onClick={lightThemeClick}/>
        <HiMoon className='theme-btn dark' onClick={darkThemeClick}/>
    </div>
  )
}

export default ThemeButton