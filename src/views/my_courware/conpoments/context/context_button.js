import React from 'react'
export const setting = {
  light: {
    color: '#fff',
    backgroud: '#fff'
  },
  dark: {
    color: '#000',
    backgroud: '#000'
  }
}

export const SettingContext = React.createContext(setting.light)