import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class BookContextProvider extends Component {
    state = {
        fullName: "",
        title: ""
    }

    currentAuthor = (fullName) => {
        this.setState({fullName})
    }

    render() {
        return (
            <Provider            
                value={{
                    fullName: this.state.fullName,
                    title: this.state.title, currentAuthor: this.currentAuthor
                }}>
                    {this.props.children}
            </Provider>
        )
    }
}

export {BookContextProvider, Consumer as BookContextConsumer}