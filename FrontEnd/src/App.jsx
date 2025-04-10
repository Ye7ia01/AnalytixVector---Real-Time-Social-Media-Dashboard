import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const FB_APP_ID = '682817207539712'
  const REDIRECT_URI = 'https://www.facebook.com/connect/login_success.html'
  const facebookLoginUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${FB_APP_ID}&redirect_uri=${REDIRECT_URI}&scope=instagram_basic,instagram_manage_insights,pages_show_list&response_type=code`;

  const handleLogin = () => {
    window.location.href = facebookLoginUrl;
  }

  return (
    <>
      <button onClick={handleLogin}>Login with Facebook</button>
    </>
  )
}

export default App
