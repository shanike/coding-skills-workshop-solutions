import React from 'react';
import '../css/copmy.scss'

class Compi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            input2: "",
            input3: ""
        }
    }

    onChangeInput = (event) => {
        this.setState({ input: event.target.value });
    }

    onChangeInput2 = (event) => {
        this.setState({ input2: event.target.value });
    }

    onChangeInput3 = (event) => {
        this.setState({ input3: event.target.value });
    }
    

    render() {
        return (
            <div dir="ltr">
                this is a simple <input value={this.state.input} type="text" onChange={(bla) => {
                    console.log("hello from change1", this.state.input); this.onChangeInput(bla)
                }} />
                <br /><br />
                this is a simple <input value={this.state.input2} type="text" onChange={(bla) => {
                    console.log("hello from change2", this.state.input2); this.onChangeInput2(bla)
                }} />
                <br /><br />
                this is a simple <input value={this.state.input3} type="text" onChange={(bla) => {
                    console.log("hello from change3", this.state.input3); this.onChangeInput3(bla)
                }} />
            </div>
        )
    }
}
export default Compi;