import React, { Component } from "react";

import { AppConsumer } from "../../context/appContext";

export default class logoff extends Component {
    render() {
        return (
            <AppConsumer>
                {(context) => (
                    context.logoff(context.objHomeInfo.login.token, this.props.navigation)
                )}
            </AppConsumer>
        )
    }
}
