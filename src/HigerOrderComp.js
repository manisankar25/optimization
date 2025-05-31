import React from "react"

const hoc = (AnotherComp) => {
    return function EnhancedComponent(props) {
        return (
            <React.Fragment>
                <div>hoc component</div>
                <AnotherComp></AnotherComp>
            </React.Fragment>
        )
    }
}

const PrintValue = () => {
    return (<div>
        <h1>print value</h1>
        <p>This is a higher order component example.</p>
    </div>)
}

export default hoc(PrintValue);