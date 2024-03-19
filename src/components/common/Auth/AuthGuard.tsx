import { userAtom } from '@_recoil/atom/user'
import { auth } from '@_remote/firebaseApp'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setInitialize] = useState(false)
  const setUser = useSetRecoilState(userAtom)

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
