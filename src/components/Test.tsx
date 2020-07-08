import React from 'react';

export class Test extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            no: "eee",
            object: {
                hhh: "hhh"
            }
        }

    }

    handle = () => {
        this.setState({...this.state, object: {hhh: "hello"}})
    }

    componentDidMount() {
        console.log(this.state)
    }

    render() {
        console.log(this.state)
        return <div onClick={this.handle}>test</div>;
    }
};
