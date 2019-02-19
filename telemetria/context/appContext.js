import React from 'React'
import * as axios from 'axios'

//Initial State
const initialState = {
    driverCode: '',
    logar: false,
    loginMsg: '',
    objHomeInfo: []
}


//Cotext
export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component{
    constructor(props){
        super(props)
        this.state = initialState
    }

    componentDidMount(){
       
    }

    login = (driverCode, nav) => {
        const headers= {
            'Content-Type': 'application/x-www-form-urlencoded' 
        }
        axios.post('http://172.16.75.99:8080/v1/telemetria/login',`driverCode=${driverCode}`, {header: headers})
            .then(data => {
                console.log(data)
                this.setState({ driverCode, logar: true, loginMsg: 'Ok' })
                nav.navigate('Home') 
            }).catch(error =>{
                console.log('Deu rum: ', error)
                this.setState({ logar: false, loginMsg: 'Senha incorreta' }) 
            })
     
     
   
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