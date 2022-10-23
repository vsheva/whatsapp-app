import React from 'react';
import styled from 'styled-components'
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@mui/icons-material/Search';


const Sidebar = () => {
    return <Container>
        <Header>
            <UserAvatar/>

            <IconsContainer>
                <IconButton>
                    <ChatIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>

            </IconsContainer>
        </Header>

        <Search>
            <SearchIcon/>
            <SearchInput placeholder='Search in chats'/>
        </Search>
    </Container>;
};

export default Sidebar;

const Container = styled.div``;

const Header = styled.div`
display: flex;
position:sticky;
top: 0;
background-color: white;
z-index: 1;
justify-content: space-between;
align-items: center;
padding:15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
cursor:pointer;

:hover {
opacity:0.8;
}
`;

const IconsContainer = styled.div``;

const Search= styled.div``;

const SearchInput= styled.input`

`;