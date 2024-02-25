'use client';
import 'regenerator-runtime/runtime';
import { useEffect, useMemo, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';
import VideoComponent from '../components/VideoComponent';
import TextComponent from '../components/TextComponent';
import VoiceComponent from '../components/VoiceComponent';

function Concierge() {
  const { transcript, listening, resetTranscript} = useSpeechRecognition();

  const [response, setResponse] = useState('');

  const mode = useMemo(() => {
    return listening ? 'listening' : response ? 'speaking' : 'idle';
  }, [listening, response]);

  useEffect(() => {
    console.log([listening, transcript, response])
    if (!listening && transcript?.length > 1 && response?.length < 1) {
      (async () => {
        try {
          const response = await fetch('http://localhost:5000/openAiRequest', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:5000'
            },
            body: JSON.stringify({
              prompt: transcript
            })
          });
          const { resp } = await response.json();

          if (!resp || response.status !== 200)
            throw new Error('Failed to get a response from your query.');
          const msg = new window.SpeechSynthesisUtterance();
          
          const setSpeech = () => {
            return new Promise(
                function (resolve, reject) {        
                    const id = setInterval(() => {
                        if (window.speechSynthesis.getVoices().length !== 0) {
                            resolve(window.speechSynthesis.getVoices());
                            clearInterval(id);
                        }
                    }, 10);
                }
            )
        }
        
        let voices = await setSpeech();
          msg.text = resp;
          console.log('VOICES: ', voices)
          //@ts-ignore
          msg.voice = voices[7];
          msg.onend = () => {
            console.log('onend');
            handleResetButtonClick();
            location.reload();
          };
          setResponse(resp);
          window.speechSynthesis.speak(msg);
        } catch (error) {
          console.error('ERR:', error);
        }
      })();
    }
  }, [listening, response, transcript]);

  const handleStartButtonClick = () => {
    SpeechRecognition.startListening();
  };

  const handleStopButtonClick = () => {
    SpeechRecognition.stopListening();
  };

  const handleResetButtonClick = () => {
    resetTranscript();
    setResponse('');
  };

  return (
    <div className="h-screen w-screen">
      <div className="hero-content gap-5 flex">
        <VideoComponent mode={mode}/>
        <TextComponent transcript={transcript} listening={listening} response={response} handleStartButtonClick={handleStartButtonClick} handleStopButtonClick={handleStopButtonClick} handleResetButtonClick={handleResetButtonClick} />
      </div>
    </div>
  );
}

export default Concierge;
