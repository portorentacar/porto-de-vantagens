import {Route, Redirect} from 'react-router-dom';
import React, {useContext } from 'react';
import {AuthContext} from '../contexts/Auth'

function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){

    const {signed,loading} = useContext(AuthContext)
 
if(loading) {
    return (
        <div>  
            <h1>Carregando a página</h1>
        </div>
    )
}

if(!signed && isPrivate) {
    return <Redirect to="/" />
}

if(signed && !isPrivate) {
    return <Redirect to="/admin/painel" />
}

return (
    <Route
    {...rest}
    render={props => (
        <Component {...props} />
    )} />
)

}

export default RouteWrapper;