import Image from "next/image"
import AudioVisualizer from "../common/AudioVisualizer"
import Poster from '@/public/voicePoster.png'

function VoiceComponent({mode} : {mode: string}) {
  return (
    <>
        {mode === 'speaking' ? (
            <AudioVisualizer />
        ) : (
            <Image
                src={Poster}
                className="rounded-lg lg:shadow-2xl w-full h-full"
                width={1000}
                height={800}
                alt="image"
            />
        )}
    </>
  )
}

export default VoiceComponent