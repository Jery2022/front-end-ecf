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
        style={{ width: '120px' }}
        variant="outline-success"
        onClick={handleLogin}
      >
        Login
      </Button>
    </>
  );
}
export default ButtonLogin;
