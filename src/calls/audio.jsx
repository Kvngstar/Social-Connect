import React, { useEffect } from 'react'
import simplePeer from 'simple-peer'
import { Socket } from 'socket.io-client'

export default function audio(socket, channelConfig) {
    const [peer, setPeer] = useState(null)

    useEffect(() => {
        const peer = new simplePeer({ initiator: true })
        const initiationPeer = () => {
            peer.on('signal', (data) => {
                socket.emit('offer', {
                    offer: data,
                    to: 'reciever',
                })
            })
            peer.on('connect', (data) => {
                console.log('peer-Connected')
            })
            peer.on('stream', (stream) => {})
            peer.close('close', () => {
                console.log('Peer disconnected')
            })

            setPeer(peer)
        }
        initiationPeer()

        return () => {
            if (peer) {
                peer.destroy()
            }
        }
    })
}
