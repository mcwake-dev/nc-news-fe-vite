export const AUTHENTICATED_ONLY = true;
export const UNAUTHENTICATED_ONLY = false;

const Authenticated = (WrappedComponent, needsAuthentication) => {
  function AuthenticatedHOC(props) {
    if ((user && needsAuthentication) || (!user && !needsAuthentication)) {
      return <WrappedComponent {...props} setUser={setUser} user={user} />;
    } else {
      return <></>;
    }
  }

  return AuthenticatedHOC;
};

export default Authenticated;
