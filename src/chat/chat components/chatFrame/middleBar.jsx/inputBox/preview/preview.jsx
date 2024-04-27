import React from 'react'

export default function PreviewImage({previewimg,setInputData}) {

    function ClearImgInput() {
		setInputData((values) => {
			return { ...values, type: "", text: "", disableInput: false };
		});
	}
    return (
        <div className="preview-image ">
            <div className="d-flex justify-content-end p-2 w-100" onClick={ClearImgInput}>X</div>
            <div className="d-flex align-items-center justify-content-center">
                <img src={previewimg} height="100"  width="150px" alt="" />
            </div>
        </div>
    )
}
