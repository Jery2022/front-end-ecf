import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ButtonLogin() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/login');
  }

  return (
    <>
      <Button
        className="MyButtonSmall"
        variant="outline-warning"
        onClick={handleLogin}
      >
        Connexion
      </Button>
    </>
  );
}
export default ButtonLogin;
