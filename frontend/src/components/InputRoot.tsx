import { useColorMode } from "@chakra-ui/react";
import { TextareaAutosize } from "@material-ui/core";

const InputRoot = ({
  newMessage,
  typingHandler,
  placeholder,
  setShowPicker,
}) => {
  const { colorMode } = useColorMode();
  return (
    <TextareaAutosize
      minRows={1}
      maxRows={4}
      onFocus={() => setShowPicker(false)}
      
      style={{
        width: "100%",
        minHeight: "47px",
        maxHeight: "148px",
        border: "none",
        fontSize: 20,
        borderRadius: "10px",
        outline: "none",
        background: colorMode === "dark" ? "#232b38" : "#f0f2f5",
        padding: "8px",
        boxShadow: "inset 0 0 6px 2px rgba(0,0,0,0.2)",
      }}
      placeholder={placeholder}
      value={newMessage}
      onChange={(e) => typingHandler(e.target.value)}
    />
  );
};

export default InputRoot;
