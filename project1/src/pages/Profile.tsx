import { useNavigate } from "react-router";

function Profile() {
  const navigate = useNavigate();
  const logout = () => {
      navigate("/")
  };
  return (
    <div>
      <p>Profile</p>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Profile;
