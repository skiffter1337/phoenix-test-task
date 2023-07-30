import React from 'react';
import {EditTimetable} from "./ui/components/modal/editTimetable";
import {Button} from "./ui/components/button/button";


function App() {
    return (
        <>
            <EditTimetable trigger={<div>123</div>}/>
        </>
    )
}

export default App;
