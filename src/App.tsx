import React from 'react';
import {EditTimetable} from "./ui/components/modal/editTimetable";
import {Button} from "./ui/components/button/button";


function App() {
    return (
        <>
            <EditTimetable trigger={<button>Open modal</button>}/>
        </>
    )
}

export default App;
