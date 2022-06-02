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
import "../styles.css";

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
                      marginTop: "auto",
                    }}
                    onClick={() => setShowGifPicker(true)}
                    className="button-inner-effect"
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
                    marginTop: "auto",
                  }}
                  className="button-inner-effect"
              >
                <Attach />
              </MenuButton>
              <MenuList
                  borderColor="#d3d3d300"
                  borderRadius="33px"
                  boxShadow="2xl"
                  padding={1.5}
                  className="transition-all duration-300 ease-in-out"
              >
                <MenuItem
                    borderRadius="24px 24px 0 0"
                    boxShadow="inset 0 1px 4px 2px rgba(0,0,0,0.1)"
                    className="transition-all duration-1000 ease-in-out hover:shadow-sm"
                    display="flex"
                    justifyContent="center"
                >
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
                    <Text p={3} fontSize={18}>
                      Attach Image
                    </Text>
                  </label>
                </MenuItem>
                <MenuDivider marginTop="0.2rem" marginBottom="0.2rem" />
                <MenuItem
                    boxShadow="inset 0 0 4px 2px rgba(0,0,0,0.1)"
                    className="transition-all duration-1000 ease-in-out hover:shadow-sm"
                    display="flex"
                    justifyContent="center"
                >
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
                    <Text p={3} fontSize={18}>
                      Attach Video
                    </Text>
                  </label>
                </MenuItem>
                <MenuDivider marginTop="0.2rem" marginBottom="0.2rem" />
                <MenuItem
                    display="flex"
                    borderRadius="0 0 24px 24px"
                    boxShadow="inset 0 0 4px 2px rgba(0,0,0,0.1)"
                    className="transition-all duration-1000 ease-in-out hover:shadow-sm"
                    justifyContent="center"
                >
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
                    <Text p={3} fontSize={18}>
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