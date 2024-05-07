import React, { useEffect, useState } from "react";
import simplePeer from "simple-peer";

export default function SenderAudio(socket, id) {
	navigator.mediaDevices
		.getUserMedia({ video: true, audio: true })
		.then(GotMedia)
		.catch((err) => console.log(err));

	function GotMedia(stream) {
		const peer = new simplePeer({ initiator: true, stream: stream });
		const video = document.getElementById("videoo");
		if ("srcObject" in video) {
			video.srcObject = stream;
		} else {
			video.src = window.URL.createObjectURL(stream); // for older browsers
		}

		video.play();

		peer.on("signal", (data) => {
			socket.emit("offer", {
				offer: data,
				to: id,
			});
		});
		peer.on("connect", (data) => {
			console.log("peer-Connected");
		});
		peer.on("stream", (stream) => {
            
        });
		peer.on("close", () => {
			console.log("Peer disconnected");
		});
	}
}
