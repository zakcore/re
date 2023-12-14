import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from '../../features/home/HomePage';
import globalRouter from '../../router/Routes';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  globalRouter.navigate = navigate;
  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
        
        <ToastContainer position='bottom-right' hideProgressBar />
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);