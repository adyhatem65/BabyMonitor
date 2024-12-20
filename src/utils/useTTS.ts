import Tts, {Options} from 'react-native-tts';

interface ttsProps {
  initializeTtsListeners(): Promise<void>;
  playTTS: (message: string, options?: Options) => Promise<void>;
  playAlert: (heartRate: number, babyTemperature: number) => Promise<void>;
}

export default function useTTS(): ttsProps {
  // Function to initialize Text-to-Speech (TTS) settings and listeners
  const initializeTtsListeners = async () => {
    // Check the initialization status of the TTS engine
    Tts.getInitStatus().then(
      e => {
        console.log('ALL OK TTS ✅', e); // TTS is initialized successfully
      },
      err => {
        // If there is no TTS engine installed, request to install one
        if (err.code === 'no_engine') {
          console.log('NO ENGINE TTS ✅');
          Tts.requestInstallEngine();
        }
      },
    );

    // The following commented-out code can be used to list available voices and set a default voice
    // const voices = await Tts.voices();
    // console.log('tts-voices', voices);
    // Tts.setDefaultVoice('es-us-x-sfb-local');

    // set the default language to arabic
    // Tts.setDefaultLanguage('ar');

    // Set the default speaking rate. Lower values are slower, and higher values are faster
    Tts.setDefaultRate(0.7, true);

    // Ignore the silent switch on the device, allowing TTS to play even if the device is set to silent
    Tts.setIgnoreSilentSwitch('ignore');

    // Set the default pitch. Lower values result in a lower pitch, and higher values in a higher pitch
    Tts.setDefaultPitch(0.7);

    // Set up listeners for various TTS events

    // Listener for when TTS starts speaking
    Tts.addEventListener('tts-start', event => {
      // console.log('TTS Started: ', event);
    });

    // Listener for TTS progress (triggered repeatedly while speaking)
    Tts.addEventListener('tts-progress', event => {
      // console.log('TTS progress: ', event); // Uncomment to log progress events
    });

    // Listener for when TTS finishes speaking
    Tts.addEventListener('tts-finish', event => {
      // console.log('TTS finished: ', event);
    });

    // Listener for when TTS is canceled
    Tts.addEventListener('tts-cancel', event => {
      // console.log('TTS Cancel: ', event);
    });
  };

  // Function to play a message using TTS
  const playTTS = async (message: string, options?: Options) => {
    // Ensure TTS is initialized before speaking
    await Tts.getInitStatus().then(
      e => {
        console.log('ALL OK TTS ✅', e); // TTS is initialized successfully
      },
      err => {
        // If there is no TTS engine installed, request to install one
        if (err.code === 'no_engine') {
          console.log('NO ENGINE TTS ✅');
          Tts.requestInstallEngine();
        }
      },
    );

    // Use TTS to speak the provided message
    Tts.speak(message, options);
  };

  // function to play different sounds based on heart rate and baby temperature
  const playAlert = async (heartRate: number, babyTemperature: number) => {
    if (heartRate === 0) {
      await playTTS('احترس معدل ضربات قلب طفلك منخفضة');
      await playTTS("Please be careful, your child's heart rate is low");
    }
    if (babyTemperature === 0) {
      await playTTS('احترس درجة حرارة طفلك منخفضة');
      await playTTS("Please be careful, your child's temperature is low");
    }
  };

  return {
    initializeTtsListeners,
    playAlert,
    playTTS,
  };
}
