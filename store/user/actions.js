import { userSlice } from "./slice";
const { actions: slice } = userSlice;
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const logedIn = u => (dispatch) => {
    cookies.set("__t__", u.token, { path: '/' });
    dispatch(slice.logedIn(u))
}

export const logOut = () => (dispatch) => {
    dispatch(slice.logOut())
}