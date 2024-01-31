import data from "@emoji-mart/data"
import Picker  from "@emoji-mart/react";
import React from 'react';
import "./picker.css"

export default function EmojiPicker({onSelect,inputData, setInputData}) {
    function Emoji(event){
        console.log("Emoji Function")
        setInputData((v)=>{return {...v, text: (inputData.text + event.native),addIcon: false}})
        console.log(event)
    }
  return (
    <Picker data={data} onEmojiSelect={Emoji} />
  )
}
