import React from 'react'
import smiley from '../assets/images/smiley.svg'
import attachment from '../assets/images/attachment.svg'
import send from '../assets/images/send.svg'
import FileReading from '../components/filesUpload/image'
export default function Textarea({ HandleInputs, inputData, setInputData }) {
    function UploadFile() {
        let file = document.querySelector('.file').click()
    }
    async function HandleFileUpload() {
        let file = document.querySelector('#fileUpload')
        console.log(file.files[0])
        const Base64 = await FileReading(file.files[0])
        setInputData((values) => {
            return { ...values, type: 'image', text: Base64,disableIput: true }
        })
        console.log(Base64)
        // console.log(file.files[0])
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
          { (inputData.disableInput !== false) &&  <div className="textbox">
                <input
                    type="text"
                    value={inputData.text}
                    onChange={HandleInputs}
                    v
                    name="text"
                    className="input"
                    placeholder="Type a message"
                />
            </div>}
            <div className="p-1 px-3 bg-light">
                <img src={send} height="15px" width="auto   " alt="status" />
            </div>
        </div>
    )
}
