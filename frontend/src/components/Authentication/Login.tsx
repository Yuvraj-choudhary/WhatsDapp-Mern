import { useToast, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import Form from "./Form";
const Login = () => {
  const [email, setEmail]: any = useState("");
  const [password, setPassword]:any = useState("");
  const [show, setShow]:any = useState(false);
  const [loading, setLoading]:any = useState(false);
  const [confirmpassword, setConfirmpassword]:any = useState();
  const [picLoading, setPicLoading]: any = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      window.location.reload();
      history.push("/@");
    } catch (error: any) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      setLoading(false);
    }
  };

  return (
    <VStack>
      <Form
        isLogin={true}
        picLoading={picLoading}
        postDetails={null}
        setConfirmpassword={setConfirmpassword}
        setEmail={setEmail}
        setName={null}
        setPassword={setPassword}
        show={show}
        submitHandler={submitHandler}
        handleClick={handleClick}
        email={email}
        password={password}
      />
    </VStack>
  );
};

export default Login;
