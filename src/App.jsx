import { createContext } from 'react'
import './App.css'
import FirstSection from './components/FirstSection/FirstSection'
export const MainContext = createContext()
export const SecondaryContext = createContext()

export default function App() {

  const allContext = {
    first: { source: 'https://avatars.mds.yandex.net/get-vthumb/3511662/fbbb59611e1fc0f2453aeeb6ce8f6609/800x450', text: 'Собака с бабочкой на носу' },
    second: { source: 'https://icdn.lenta.ru/images/2024/11/29/13/20241129132354457/square_1280_285c95ddae21c34942f9c98001ad597f.jpg', text: 'Чиловый парень' },
    third: { source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-FyHIeHwZVS-7YEl29eS_5tr6ATwt9Gv3Q&s', text: 'Шайлушай' }
  }

  return (
    <>
      <MainContext.Provider value={allContext}>
        <FirstSection />
      </MainContext.Provider>
    </>
  )
}
