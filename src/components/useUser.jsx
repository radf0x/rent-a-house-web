import { useState } from 'react';

export default function useUser() {
  const getUser = () => {
    const user = sessionStorage.getItem('user');
    const userObject = JSON.parse(user);
    return userObject;
  };

  const [user, setUser] = useState(getUser());

  const saveUser = userObject => {
    sessionStorage.setItem('user', JSON.stringify(userObject));
    setUser(userObject);
  };

  return { user, setUser: saveUser }
}
