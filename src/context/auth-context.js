import React from 'react';

// The context API acts as sort of global data storage. 
// All components wrapped in authContext.Provider will be able to access
// authenticated and login;

// Components wrapped with AuthContext.Consumer can access the context as follows
// <AuthContext.Consumer>{(context) => {do stuff with context}}
const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;