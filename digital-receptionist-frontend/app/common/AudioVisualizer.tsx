'use client';
import React from 'react';
import { useState } from 'react';
// @ts-ignore
import {
  AudioVisualizer as AudioVisualize,
  LiveAudioVisualizer
} from 'react-audio-visualize';
import { useAudioRecorder } from 'react-audio-voice-recorder';

const AudioVisualizer = () => {
  const [blob, setBlob] = useState<Blob>();
  const recorder = useAudioRecorder();
  return (
    <div>
      {recorder.mediaRecorder && (
        <LiveAudioVisualizer
          mediaRecorder={recorder.mediaRecorder}
          width={200}
          height={75}
        />
      )}

      {blob && (
        <AudioVisualize
          blob={blob}
          width={500}
          height={75}
          barWidth={1}
          gap={0}
          barColor={'#f76565'}
        />
      )}

      {blob && (
        <AudioVisualize
          blob={blob}
          width={500}
          height={75}
          barWidth={3}
          gap={2}
          barColor={'lightblue'}
        />
      )}
    </div>
  );
};

export default AudioVisualizer;
