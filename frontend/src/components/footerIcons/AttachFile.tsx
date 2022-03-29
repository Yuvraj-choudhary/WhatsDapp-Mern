import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuList} from "@chakra-ui/react";
import { Button, IconButton } from "@material-ui/core";
import { Gif } from "@material-ui/icons";
import Attach from "../icons/Attach";

const AttachFile = ({
  showPicker,
  showGifPicker,
  colorMode,
  setShowGifPicker,
  postDetails,
  postVideo,
  postFile
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
          <MenuList>
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
              <Button
                component="span"
                style={{
                  marginRight: 7,
                  width: "100%",
                  height: 60,
                  color: colorMode === "dark" ? "#fff" : "#000",
                }}
              >
                Attach Image
              </Button>
            </label>
            <MenuDivider />
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

              <Button
                component="span"
                style={{
                  marginRight: 7,
                  width: "100%",
                  height: 60,
                  color: colorMode === "dark" ? "#fff" : "#000",
                }}
              >
                Attach Video
              </Button>
            </label>
            <MenuDivider />
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

              <Button
                component="span"
                style={{
                  marginRight: 7,
                  width: "100%",
                  height: 60,
                  color: colorMode === "dark" ? "#fff" : "#000",
                }}
              >
                Attach File
              </Button>
            </label>
          </MenuList>
        </Menu>
      )}
    </>
  );
}

export default AttachFile;
