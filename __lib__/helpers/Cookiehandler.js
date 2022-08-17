import Cookies from 'universal-cookie';

export const userAuthStatus = async()=>{
    const cookie = new Cookies();
    const _u_ = await cookie.get('__u__');
    if(_u_){
        return {
            isUser: true,
            token: _u_.token,
            user: _u_.user,
        }
    }else{
        return {
            isUser: false
        }
    }
}
