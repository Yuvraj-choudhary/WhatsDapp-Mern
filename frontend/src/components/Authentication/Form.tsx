import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { auth } from "../../firebase";

const Form = ({
  setName,
  setEmail,
  setPassword,
  setConfirmpassword,
  picLoading,
  show,
  isLogin,
  postDetails,
  submitHandler,
  handleClick,
  email,
  password
}) => {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((e) => setEmail(e.user.email))
      .catch((err) => console.error(err));
  };

  return (
    <>
      {!isLogin && (
        <FormControl id="first-name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
      )}
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="button"
          value={email ? email : "Get The Email From Google"}
          onClick={() => signInWithGoogle()}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {!isLogin && (
        <>
          <FormControl id="password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup size="md">
              <Input
                type={show ? "text" : "password"}
                placeholder="Confirm password"
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id="pic">
            <FormLabel>Upload your Picture</FormLabel>
            <Input
              type="file"
              p={1.5}
              accept="image/*"
              onChange={(e: any) => postDetails(e.target.files[0])}
            />
          </FormControl>
        </>
      )}
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        {isLogin ? "Login" : "Sign Up"}
      </Button>
      {isLogin && (
        <Button
          variant="solid"
          colorScheme="red"
          width="100%"
          onClick={() => {
            setEmail("guestUser@example.com");
            setPassword("1234567");
          }}
        >
          Get Guest User Credentials
        </Button>
      )}
    </>
  );
};

export default Form;
