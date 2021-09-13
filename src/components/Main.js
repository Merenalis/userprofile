import React, {useEffect} from 'react'
import '../styles/index.css';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getResult} from "../functions/getResult";
import User from "./User";

function Main() {
    const dispatch = useDispatch()
    const data = useSelector(state => state, shallowEqual)

    useEffect(() => {
        dispatch(getResult())
    }, [dispatch])

    return (
        <User info={data.repos.info}/>
    );
}

export default Main;