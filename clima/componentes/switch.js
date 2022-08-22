import { Switch } from 'react-native'
import { useState } from 'react'

export default function() {
  const [light, setLight] = useState(false)

  return (
    <Switch
      value={!light}
      onValueChange={() => {
        setLight(!light)
        let cor = light ? '#fff' : '#000'
        return cor
      }}
    />
  )
}