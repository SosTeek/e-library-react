export const getCurrentUser = () => {
    let user = null;
    try {
      user =
        localStorage.getItem('current_user') != null
          ? JSON.parse(localStorage.getItem('current_user'))
          : null;
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js  : getCurrentUser -> error', error);
      user = null;
    }
    return user;
};
  
export const setCurrentUser = (user) => {
    try {
      if (user) {
        localStorage.setItem('current_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('current_user');
      }
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error);
    }
 };
  
  export const getAllRoles = () => {
    let roles = null;
    try {
      roles =
        localStorage.getItem('roles') != null
          ? JSON.parse(localStorage.getItem('roles'))
          : null;
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js  : getAllRoles -> error', error);
      roles = null;
    }
    return roles;
  };
  
  export const setAllRoles = (roles) => {
    try {
      if (roles) {
        localStorage.setItem('roles', JSON.stringify(roles));
      } else {
        localStorage.removeItem('roles');
      }
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js : setAllRoles -> error', error);
    }
  };
  