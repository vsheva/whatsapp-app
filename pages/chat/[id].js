import React from 'react';
import styled from 'styled-components';
import Head from "next/head";
import Sidebar from "../../components/Sidebar";

const enteredIdChat = () => {
  return <Container>
    <Head>
        <title>Chat</title>
    </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
  </Container>;
};

export default enteredIdChat;

const Container = styled.div`
display: flex;

`
const ChatContainer=styled.div``
