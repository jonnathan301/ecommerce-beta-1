import Firebase from '../plugins/firebase'
class AppService {
    fb = Firebase;

    createUser = (user) => {
        this.fb.auth().createUserWithEmailAndPassword(user.username, user.password).then((resp)=> {
            console.log(resp);
        });
    }    
}

export default AppService;