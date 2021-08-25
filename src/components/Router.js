 

const rootDiv = document.getElementById('root');

export const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
    );
  
    while (rootDiv.innerHTML != "") {
      rootDiv.innerHTML = ""
    }
  
    rootDiv.innerHTML(routes[pathname]());
  };