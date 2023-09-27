import React from 'react'
import { useState } from "react"
const Folder = ({ folder,setSelectedFolder }) => {
    //const folders = folder;
    //console.log(folders)
    const [expand, setExpand] = useState(false)

    const expandHandler = () => {
        console.log("clicked")
        setExpand((prev) => !prev)
        //setFolderName(folder.name)
        setSelectedFolder(folder)
    }

    return (
        <div>
            <div onClick={expandHandler} style={{cursor:"pointer"}}>📁{folder.name}</div>
            {expand && folder.files && <ul >
                {folder.files.map((file) =>
                    <li key={file} style={{ paddingLeft: "2px" }}>{file}</li>
                )}
            </ul>}
           {
            folder.folders.map((item)=><Folder key = {item} folder={item}  setSelectedFolder={setSelectedFolder}/>)
           }
        
        </div>
        
    )
}


export default Folder