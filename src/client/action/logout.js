import initMatrix from '../initMatrix';

function logout() {
  const mx = initMatrix.matrixClient;
  mx.logout().then(() => {
    mx.clearStores();
    window.localStorage.clear();
    window.location.reload();
  });
}

export default logout;
