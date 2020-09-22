import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

interface UserProps {
  userName: string
}
interface Props {
  user: UserProps | null
  login: () => void
  logout: () => void
}

export const AuthContext = createContext<Props>({
  user: null,
  login: () => {},
  logout: () => {}
})

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null)
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser: UserProps = { userName: 'bob' }
          setUser(fakeUser)
          AsyncStorage.setItem('user', JSON.stringify(fakeUser))
        },
        logout: () => {
          AsyncStorage.removeItem('user')
          setUser(null)
        }
      }}>
      {children}
    </AuthContext.Provider>
  )
}
