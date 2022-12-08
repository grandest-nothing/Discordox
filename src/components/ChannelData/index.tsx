import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="grandest nothing"
            date="07/12/2022"
            content="Wubba Lubba Dub Dub"
          />
        ))}

        <ChannelMessage
          author="rodox"
          date="07/12/2022"
          content={
            <>
              <Mention>@grandest nothing</Mention>, flip flarp jarb wubba?
            </>
          }
          hasMentions
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em `${channelName}`" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};
export default ChannelData;
