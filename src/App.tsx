import React from 'react';
import {EditTimetable} from "./ui/components/modal/editTimetable";


function App() {
    return (
        <>
            <EditTimetable trigger={<button>Open modal</button>}/>
        </>
    )
}

export default App;
