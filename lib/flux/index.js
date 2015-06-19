const NEW_MESSAGE = Symbol('NEW_MESSAGE');

//----- ACTION ---

export function newMessage(content) {
  return {
    type: NEW_MESSAGE,
    content
  };
}

//----- STORE ---

export function handleNewMessage(
    state = {messageCounter: 0}, {type, content}) {
  switch (type) {
    case NEW_MESSAGE:
      const id = state.messageCounter++;
      state[id] = {content, id};
      return state;
    default:
      return state;
  }
}
