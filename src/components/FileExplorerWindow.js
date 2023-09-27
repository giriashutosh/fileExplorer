import React,{useRef, useState} from 'react'
import { data } from '../data/data'
import Folder from './Folder'
const FileExplorerWindow = () => {
    const [filedata, setFileData] = useState(data)
    const [foldername, setFolderName] = useState("root")
    const [selectedfolder, setSelectedFolder] = useState();
    const inputRef = useRef();
    console.log(foldername)
    const addFileHandler = (name, selectedfolder) => {
       
       
       selectedfolder.files.push(inputRef.current.value)
       
    }
    const addFolderHandler = (selectedfolder) => {
        selectedfolder.folders.push({"name" : inputRef.current.value, "files":["text"], "folders":[]})
        console.log(selectedfolder)
    }
  return (
    <div className='w-50 h-50 bg-slate-50'>
        {
            filedata.map((folder) => 
               <Folder key = {folder} folder = {folder}   setSelectedFolder={setSelectedFolder}/>
            )
        }
     <input type="text" className='border' ref = {inputRef}/>
     <button onClick={() => addFileHandler( selectedfolder)} className='bg-slate-200'> Add File</button>
     <button onClick={() => addFolderHandler(selectedfolder)} className='bg-slate-200'> Add Folder</button>
    </div>
  )
}

export default FileExplorerWindow
