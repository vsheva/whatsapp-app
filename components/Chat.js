import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useRouter } from 'next/router';
import getRecipientEmail from '../utils/getRecipientEmail';
import { auth, db } from '../firebase';

const Chat = ({ id, users }) => {
  const router = useRouter();
  console.log('router in chat', router);

  const enterChat = () => {
    router.push(`/chat/${id}`);
  }; /*routing to [id] -> <Container onClick={enterChat}>*/

  //const getRecipientEmail=(users, userLogins) => users?.filter(filteredUser => filteredUser !== userLogins?.email)[0];
  const [user] = useAuthState(auth);
  const [recipientSnapshot] = useCollection(
    db.collection('users').where('email', '==', getRecipientEmail(users, user)),
  );

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);

  console.log(recipientEmail);

  //first letter in the avatar or photoURl
  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}

      {/*<UserAvatar/>*/}
      <p>{recipientEmail}</p>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;
const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
