import firebase form 'firebase';

class AuthService{
  login(providerName){
    const authProvider = new firebase.auth[`${provideName}AuthProvider`]();
    
    
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;