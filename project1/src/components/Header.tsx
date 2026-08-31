import { Link } from 'react-router'
function Header() {
  return (
    <div className='headerbox'>
        <Link to="/">Home</Link>
        <Link to="/mypage">mypage</Link>
        <Link to="/mypage/profile">profile</Link>
        <Link to="/mypage/orders">orders</Link>
    </div>
  )
}

export default Header