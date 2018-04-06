import React, {Componenet} from "react";
import Auth from "./presenter";


class Container extends Componenet {
    state ={
        action: "lgoin"
    };

    render() {
        const{action}=this.state;
        return <Auth action={action} changesAction={this._changeAction}/>;
    }
    _changeAction= () => {
        this.setState(prevState => {
            const {action} = prevState;
            if (action === "login"){
                return {action:"signup"};
            }
            else if (action==="signup"){
                return {
                    action:"login"};
                }
        });
    };
}

export default Container;