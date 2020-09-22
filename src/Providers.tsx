import React from 'react'
import { AuthProvider } from './auth/AuthProvider'
import { Routes } from './navigation/Routes'

interface Props {}

export const Providers: React.FC<Props> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
