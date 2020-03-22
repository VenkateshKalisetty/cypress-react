import React from "react";

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        const { name } = this.props.childProps;
        this.state = {
            name
        }
        console.log(`Constructor`);
    }

    /**
     * Mounting
     */
    UNSAFE_componentWillMount() {
        console.log(`Component Will Mount`);
    }
    componentDidMount() {
        console.log(`Component Did Mount`);
    }

    /**
     * Updating 
     */
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log(`Component Will Receive Porps`, nextProps);
    // }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.childProps.name !== "demo") {
            console.log(`Should Component Update`, nextProps, nextState);
            return false;
        }
        return true;
    }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log(`Component Will Update`, nextProps, nextState);
    }
    componentDidUpdate(prevPorps, prevState) {
        console.log(`Component Did Update`, prevPorps, prevState);
    }

    /**
     * UnMounting
     */
    componentWillUnmount() {
        console.log(`Component Will Unmount`);
    }

    render() {
        console.log(`Render`);
        const { name } = this.props.childProps;
        return (
            <React.Fragment>
                <h3>Name: {name}</h3>
            </React.Fragment>
        )
    }
}