import React,{} from 'react';
const Child1 = ({ state }) => {
    return (
        <div className="Child1">
            <h1>Child 1</h1>
            <p>This is the first child component.</p>
            <h2>{state}</h2>
        </div>
    );
}
export default React.memo(Child1);
// This is a simple React component that displays a title and a paragraph.