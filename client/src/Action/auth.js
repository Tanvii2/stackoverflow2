import * as api from '../API/index'
import { setCurrentUser } from './currentUser';

export const signUp = (authData, navigate) => async (dispatch) => {
   
    try {
      const { data } = await api.signUp(authData);
      console.log(data)
      dispatch({type: 'AUTH', data})
      dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))) )
      navigate('/')
    } 
    catch (error) {
      console.log(error)
    }
}

export const logIn = (authData, navigate) => async (dispatch) => {
   
    try {
       
      const { data } = await api.logIn(authData);
      console.log(data)
      dispatch({type: 'AUTH', data})
      dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
      navigate('/')
    } 
    catch (error) {
         console.log(error)
    }
}



