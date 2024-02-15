import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ContainerLogin = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #ffa500;
  font-size: calc(7px + 2vmin);
  border-radius: 8px;
  color: black;
  text-align: center;
  width: 150px;
  height: 40px;
  padding: 10px 2px;
  cursor: pointer;
`;

function ButtonLogin() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/login');
  }

  return (
    <>
      <ContainerLogin onClick={handleLogin}>Connexion</ContainerLogin>
    </>
  );
}
export default ButtonLogin;
