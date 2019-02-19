import React from 'React'
import {Text} from 'react-native'

//Initial State
const initialState = {
    driverCode: '',
    logar: false,
    loginMsg: '',
}


//Cotext
export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component{
    constructor(props){
        super(props)
        this.state = initialState
    }

    login = (driverCode, nav) => {
        if (driverCode === '1' || driverCode === '1234567'){
        this.setState({ driverCode, logar: true, loginMsg: 'Ok' })
        nav.navigate('Home') 

     }else {
     this.setState({ logar: false, loginMsg: 'Senha incorreta' }) 
    } 
    }
     
    render(){
        return(
            <AppContext.Provider
               value={{
                   driverCode: this.state.driverCode,
                   login: this.login,
                   loginMsg: this.state.loginMsg,
               }}>
                {this.props.children}
                                       
            </AppContext.Provider>
        )
    }
}