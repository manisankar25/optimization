import { use, useState, useEffect } from "react";
const Debounce = () => {
    const [input, setInput] = useState('');
    const [debounceInput, setDebounceInput] = useState('')

    useEffect(() => {
        const handler = setTimeout(()=>{
            setDebounceInput(input)
        }
            , 600)
            return(()=>clearTimeout(handler))
    }, [input])
    useEffect(() => {
        console.log('ddd',debounceInput)
        
    }, [debounceInput])

    return (<div>
        <h1>Debounce</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
    </div>)
}
export default Debounce;

// import React, { useState, useEffect } from 'react';

//  export default function SearchBox() {
//   const [query, setQuery] = useState('');
//   const [debouncedQuery, setDebouncedQuery] = useState(query);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedQuery(query);
//     }, 500); // wait 500ms after last keystroke

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [query]);

//   useEffect(() => {
//     if (debouncedQuery) {
//       console.log("Searching for:", debouncedQuery);
//       // API call here
//     }
//   }, [debouncedQuery]);

//   return (
//     <input
//       type="text"
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//       placeholder="Search..."
//     />
//   );
// }