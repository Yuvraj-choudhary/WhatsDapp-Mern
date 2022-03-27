import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Emoji from '../icons/Emoji';

const ShowEmoji = ({
  showGifPicker,
  colorMode,
  setShowGifPicker,
  setShowPicker
}) => {
  return (
    <>
      {showGifPicker ? (
        <IconButton
          style={{
            marginRight: 7,
            color: colorMode === "dark" ? "#898787" : "#707070"
          }}
          onClick={() => setShowGifPicker((val: any) => !val)}
        >
          <Close />
        </IconButton>
      ) : (
        <IconButton
          style={{
            marginRight: 7,
            color: colorMode === "dark" ? "#898787" : "#707070"
          }}
          onClick={() => setShowPicker((val: any) => !val)}
        >
          <Emoji />
        </IconButton>
      )}
    </>
  );
};

export default ShowEmoji;
