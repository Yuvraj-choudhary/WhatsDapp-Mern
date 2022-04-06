import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { IconButton } from "@material-ui/core";
import { Gif } from "@material-ui/icons";
import Attach from "../icons/Attach";

const AttachFile = ({
  showPicker,
  showGifPicker,
  colorMode,
  setShowGifPicker,
  postDetails,
  postVideo,
  postFile,
}) => {
  return (
    <>
      {showPicker ? (
        !showGifPicker && (
          <IconButton
            style={{
              marginRight: 7,
              marginLeft: -15,
              color: colorMode === "dark" ? "#898787" : "#707070",
            }}
            onClick={() => setShowGifPicker(true)}
          >
            <Gif />
          </IconButton>
        )
      ) : (
        <Menu>
          <MenuButton
            as={IconButton}
            style={{
              marginRight: 7,
              marginLeft: -15,
              color: colorMode === "dark" ? "#898787" : "#707070",
            }}
          >
            <Attach />
          </MenuButton>
          <MenuList borderColor="#d3d3d300" borderRadius="33px" boxShadow="2xl">
            <MenuItem borderRadius="24px 24px 0 0">
              <label htmlFor="icon-button-file">
                <input
                  id="icon-button-file"
                  type="file"
                  accept="image/*"
                  style={{
                    display: "none",
                  }}
                  onChange={(e: any) => postDetails(e.target.files[0])}
                />
                <Text p={3} fontSize={20}>
                  Attach Image
                </Text>
              </label>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <label htmlFor="contained-button">
                <input
                  id="contained-button"
                  type="file"
                  accept="video/*"
                  style={{
                    display: "none",
                  }}
                  onChange={(e: any) => postVideo(e.target.files[0])}
                />
                <Text p={3} fontSize={20}>
                  Attach Video
                </Text>
              </label>
            </MenuItem>
            <MenuDivider />
            <MenuItem borderRadius="0 0 24px 24px" d="flex">
              <label htmlFor="contained">
                <input
                  id="contained"
                  type="file"
                  accept="file/*"
                  style={{
                    display: "none",
                  }}
                  onChange={(e: any) => postFile(e.target.files[0])}
                />
                <Text p={3} fontSize={20}>
                  Attach File
                </Text>
              </label>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default AttachFile;
