import { auth } from '@_remote/firebaseApp'
import { useUserStore } from '@_store/user'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setInitialize] = useState(false)
  const setUser = useUserStore((state) => state.setUser);

  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      setUser(null)
    } else {
      setUser({
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
      })
    }
    setInitialize(true)
  })

  if (initialize === false) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard
