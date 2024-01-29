import React from 'react'
import FileReading from '../components/filesUpload/image'
import groupAdd from '../assets/images/group-add.svg'
import displayImage from '../assets/images/vi hub.jpg'



export default function CreateNewGroup({ newGroupData, setGroupData,SubmitNewGroup}) {
    function HandleNewGroupData(event) {
const {name,value} = event.target
console.log(newGroupData)
setGroupData((values)=>{

    return {...values,[name]:value}
   }) 
    }
    function UploadProfileimage(event) {
 document.querySelector("#file").click()
    }
   async  function OnchangeProfileImage(){
    console.log("onChange")
        const file = document.querySelector("#file")
       const base64 = await FileReading(file.files[0])
       
       setGroupData((values)=>{

        return {...values,groupIcon:base64}
       })
    }
 
    return (
        <div>
            {' '}
            <div className="p-1">
                <div className="d-flex align-items-center mt-1 bg-light px-2 rounded py-2">
                    <div >
                        <img
                            src={newGroupData.groupIcon ||groupAdd}
                            className="round-image"
                            alt=""
                        />
                        <input onChange={OnchangeProfileImage} type="file" name="file" id="file" hidden/>
                    </div>
                    <div>
                        <small onClick={UploadProfileimage}>Add group icon (optional)</small>
                    </div>
                </div>
                <div className=" rounded py-2">
                    <div>Provide group name</div>
                    <div>
                        <input
                            type="text"
                            name="groupName"
                            value={newGroupData.groupName}
                            onChange={HandleNewGroupData}
                            className="input"
                            placeholder="*mandatory"
                        />
                    </div>
                    <div className="mt-2">
                        <div>Group description</div>
                        <textarea
                            name="groupDescription"
                            value={newGroupData.groupDescription}
                            className=""
                            onChange={HandleNewGroupData}
                            placeholder="  Write about group"
                            id=""
                            cols=""
                            style={{ width: '100%' }}
                            rows="3"
                        ></textarea>
                    </div>

                    <div>
                        <div className="d-flex  mt-5 align-items-center mt-3">
                            <div className="w-100">
                                <button className="btn btn-light btn-sm w-100" onClick={SubmitNewGroup}>
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
