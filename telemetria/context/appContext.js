import React from 'React'
import * as axios from 'axios'

//Initial State
const initialState = {
    driverCode: '',
    loginMsg: '',
    objHomeInfo: [],
    loading: false
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
        this.setState({loading: true, loginMsg: ''})
        const headers= {
            'Content-Type': 'application/x-www-form-urlencoded' 
        }

        setTimeout(() => {
            axios.post('http://172.16.75.99:8080/v1/telemetria/login',`driverCode=${driverCode}`, {header: headers})
                .then(data => {
                    //console.log(data.data)
                    this.setState({ driverCode, loading: false, loginMsg: '', objHomeInfo: data.data })
                    console.log(this.state.objHomeInfo)
                    nav.navigate('Home') 
                }).catch(error =>{
                    console.log('Deu rum: ', error)
                    this.setState({ loading: false, loginMsg: 'Senha incorreta' }) 
                }) 
        }, 1000);
    }
     
    render(){
        return(
            <AppContext.Provider
               value={{
                   driverCode: this.state.driverCode,
                   login: this.login,
                   loginMsg: this.state.loginMsg,
                   objHomeInfo: this.state.objHomeInfo,
                   loading: this.state.loading
               }}>
                {this.props.children}                           
            </AppContext.Provider>
        )
    }
}