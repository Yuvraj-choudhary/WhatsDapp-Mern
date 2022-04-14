import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Emoji from "../icons/Emoji";
import "../styles.css"

const ShowEmoji = ({
  showGifPicker,
  colorMode,
  setShowGifPicker,
  setShowPicker,
  showPicker,
}) => {
  return (
    <>
      {showGifPicker ? (
        <IconButton
          style={{
            marginRight: 7,
            marginTop: "auto",
            color: colorMode === "dark" ? "#898787" : "#707070",
          }}
          onClick={() => setShowGifPicker((val: any) => !val)}
          className="button-inner-effect"
        >
          <Close />
        </IconButton>
      ) : showPicker ? (
        <IconButton
          style={{
            marginRight: 7,
            marginTop: "auto",
            color: colorMode === "dark" ? "#898787" : "#707070",
          }}
          onClick={() => setShowPicker((val: any) => !val)}
          className="button-inner-effect"
        >
          <Close />
        </IconButton>
      ) : (
        <IconButton
          style={{
            marginRight: 5,
            marginTop: "auto",
            color: colorMode === "dark" ? "#898787" : "#707070",
          }}
          onClick={() => setShowPicker((val: any) => !val)}
          className="button-inner-effect"
        >
          <Emoji />
        </IconButton>
      )}
    </>
  );
};

export default ShowEmoji;
