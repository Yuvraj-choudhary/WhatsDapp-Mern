export const getSender = (loggedUser: any, users: any) => {
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

export const getSenderFull = (loggedUser: any, users: any) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};
export const getSenderPic = (loggedUser: any, users: any) => {
  return users[0]._id === loggedUser._id ? users[1].pic : users[0].pic;
};

export const getSenderCoin = (loggedUser: any, users: any) => {
  return users[0]._id === loggedUser._id ? users[1].coin : users[0].coin;
};

export const getReceiver = (users: any) => {
  return users[0].name;
};

export const getReceiverFull = (users : any) => {
  return users[0];
};

export const isSameSender = (message: any, m: any, i: any, userId: any) => {
  return (
    i < message.length - 1 &&
    (message[i + 1].sender._id !== m.sender._id ||
      message[i + 1].sender._id === undefined) &&
    message[i].sender._id !== userId
  );
};

export const isLastMessage = (message: any, i: any, userId: any) => {
  return (
    i === message.length - 1 &&
    message[message.length - 1].sender._id !== userId &&
    message[message.length - 1].sender._id
  );
};

export const isSameSenderMargin = (
  messages: any,
  m: any,
  i: any,
  userId: any
) => {
  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

export const isSameUser = (message: any, m: any, i: any) => {
  return i > 0 && message[i - 1].sender._id === m.sender._id;
};

export const isSameReceiver = (message: any, m: any, i: any, userId: any) => {
  return (
    i < message.length - 1 &&
    (message[i + 1].sender._id === m.sender._id ||
      message[i + 1].sender._id === undefined) &&
    message[i].sender._id === userId
  );
};
