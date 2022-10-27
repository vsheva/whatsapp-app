import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import ChatScreen from '../../components/ChatScreen';
import { useAuthState } from 'react-firebase-hooks/auth'; //Firebase Hook
import { useCollection } from 'react-firebase-hooks/firestore';
import Sidebar from '../../components/Sidebar';
import { auth, db } from '../../firebase';
import getRecipientEmail from '../../utils/getRecipientEmail';

const enteredIdChat = ({ chat, messages }) => {
  const [user] = useAuthState(auth);
  console.log('chat', chat);
  console.log('messages', messages);

  return (
    <Container>
      <Head>
        <title>Chat with {getRecipientEmail(chat.users, user)}</title> {/*берем данные SSR*/}
      </Head>

      <Sidebar />
      <ChatContainer>
        <ChatScreen chat={chat} messages={messages} />
      </ChatContainer>
    </Container>
  );
};

export default enteredIdChat;

//1. SSR (no fetch API)
export async function getServerSideProps(context) {
  const ref = db.collection('chats').doc(context.query.id);

  //2. PREP messages on the server
  const messagesRes = await ref.collection('messages').orderBy('timestamp', 'asc').get();

  const messages = messagesRes.docs
    .map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map(messages => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  //3. PREP the chats
  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}

const Container = styled.div`
  display: flex;
`;
const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
