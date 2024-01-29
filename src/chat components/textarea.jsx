import React from 'react'
import smiley from '../assets/images/smiley.svg'
import attachment from '../assets/images/attachment.svg'
import send from '../assets/images/send.svg'
import FileReading from '../components/filesUpload/image'
export default function Textarea({ HandleInputs, inputData, setInputData,SendInformation,activeChat}) {

    function UploadFile() {
        let file = document.querySelector('.file').click()
    }

    async function HandleFileUpload() {
        let file = document.querySelector('#fileUpload')

        setInputData((values) => {
            return { ...values, disableInput: true }
        })
        const Base64 = await FileReading(file.files[0])
        setInputData((values) => {
            return { ...values, type: 'image', text: Base64,groupId: activeChat }
        })
    }
    

    return (
        <div className="text-area">
            <div className="icon-attachment">
                <div>
                    <img src={smiley} height="15px" width="auto" alt="status" />
                </div>
                <div>
                    <img
                        src={attachment}
                        height="15px"
                        width="auto"
                        alt="status"
                        onClick={UploadFile}
                    />
                    <input
                        type="file"
                        id="fileUpload"
                        onChange={HandleFileUpload}
                        className="file"
                        name="picture"
                        hidden
                    />
                </div>
            </div>
            {inputData.disableInput == false && (
                <div className="textbox">
                    <input
                        type="text"
                        value={inputData.text}
                        onChange={HandleInputs}
                        name="text"
                        className="input"
                        placeholder="Type a message"
                    />
                </div>
            )}
            <div className="p-1 px-3 bg-light">
                <img src={send} height="15px" width="auto" alt="status" onClick={SendInformation}/>
            </div>
        </div>
    )
}
