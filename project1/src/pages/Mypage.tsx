import { Outlet } from 'react-router'
import Header from '../components/Header'


function Mypage() {
  return (
    <div>
          <Header />
        <p>mypage</p>
         <Outlet />
    </div>
         
  )
}

export default Mypage