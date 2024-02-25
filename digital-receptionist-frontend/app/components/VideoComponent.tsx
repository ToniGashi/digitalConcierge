import Image from 'next/image';

function VideoComponent({mode} : {mode: string}) {
  console.log('MODE IN VIDEO COMPONENT: ', mode)
  return (
    <> 
      {mode === 'speaking' ? (
        <video 
          src="/vid.mp4"
          autoPlay
          muted
          width="1000" 
          height="800" 
        ></video>
      ) : (
        <Image
          src='https://drive.google.com/uc?id=1BXYFR1Iym-EFe0FHs4QcbV1jm4FOmM1y'
          className="rounded-lg lg:shadow-2xl w-full h-full"
          width={1000}
          height={800}
          alt="image"
        />
      )}
    </>
  )
}

export default VideoComponent