import { useState } from 'react'

const useShown = () => {
  const [isShownWork, setIsShownWork] = useState(false)
  const [isShownAbout, setIsShownAbout] = useState(false)
  const [isShownContact, setIsShownContact] = useState(false)

  const onMouseEnter = (e) => {
    switch (e.target.value) {
      case 'Hola.':
        setIsShownWork(true)
        break
      case 'Soy':
        setIsShownAbout(true)
        break
      case 'Sergio':
        setIsShownContact(true)
        break
      default:
        break
    }
  }

  const onMouseLeave = (e) => {
    switch (e.target.value) {
      case 'Work':
        setIsShownWork(false)
        break
      case 'About':
        setIsShownAbout(false)
        break
      case 'Contact':
        setIsShownContact(false)
        break
      default:
        break
    }
  }

  return {
    isShownAbout,
    isShownContact,
    isShownWork,
    onMouseEnter,
    onMouseLeave,
  }
}

export default useShown
