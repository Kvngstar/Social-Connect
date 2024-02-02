import React, { useEffect, useState } from 'react'
import SimplePeer from 'simple-peer'
export default function Reciever(socket,id) {
    const peer = new SimplePeer()

    peer.on('signal', (data) => {
        console.log("answer",data)
        socket.emit('answer', { answer: data, to: id })
    })

    peer.on('connect', () => {
        console.log('Peer connected')
    })

    peer.on('stream', (stream) => {
        // Handle incoming stream (e.g., play it in a <video> element)
    })

    peer.on('close', () => {
        console.log('Peer disconnected')
    })

    
    // socket.on('offer', (data) => {
    //     if (!peer) {
    //     }
    //     peer.signal(data)
    // })
}
