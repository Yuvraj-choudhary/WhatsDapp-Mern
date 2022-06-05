import { Spinner } from "@chakra-ui/react";
// @ts-ignore
import AudioReactRecorder, { RecordState } from "@kazzkiq/audio-react-recorder";
import { IconButton } from "@material-ui/core";
import { Mic, SettingsVoiceRounded } from "@material-ui/icons";
import Send from "../icons/Send";
import "../styles.css";

const SendOrMic = ({
  newMessage,
  pic,
  audio,
  gif,
  video,
  colorMode,
  sendMessageButton,
  picLoading,
  audioLoading,
  videoLoading,
  fileLoading,
  setIsAudioRecording,
  isRecording,
  onStop,
  isAudioRecording,
  setIsRecording,
}:any) => {
  if (isAudioRecording === true) {
    setIsRecording(RecordState.START);
  } else {
    setIsRecording(RecordState.STOP);
  }

  return (
    <>
      {(newMessage && newMessage.trim() !== "") ||
      pic ||
      audio ||
      gif ||
      video ? (
        <>
          <IconButton
            style={{
              marginLeft: 5,
              marginRight: -10,
              color: colorMode === "dark" ? "#898787" : "#707070",
                          marginTop: "auto",
            }}
            onClick={sendMessageButton}
            className="button-inner-effect"
          >
            <Send />
          </IconButton>
        </>
      ) : picLoading || audioLoading || videoLoading || fileLoading ? (
        <IconButton
          disableRipple
          style={{
            marginLeft: 7,
            marginRight: -10,
            color: colorMode === "dark" ? "#898787" : "#707070",
                        marginTop: "auto",
          }}
          className="button-inner-effect"
        >
          <Spinner />
        </IconButton>
      ) : (
        <>
          <IconButton
            style={{
              marginLeft: 5,
              marginRight: -10,
              color: colorMode === "dark" ? "#898787" : "#707070",
                          marginTop: "auto",
            }}
            onClick={() => setIsAudioRecording((e:any) => !e)}
            className="button-inner-effect"
          >
            {isAudioRecording ? <SettingsVoiceRounded /> : <Mic />}
          </IconButton>
          <AudioReactRecorder
            state={isRecording}
            onStop={(e:any) => onStop(e)}
            canvasWidth="0px"
            canvasHeight="0px"
            type="audio/mp3"
          />
        </>
      )}
    </>
  );
};

export default SendOrMic;
