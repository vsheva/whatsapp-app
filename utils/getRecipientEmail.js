const getRecipientEmail=(users, userLogins) => users?.filter(filteredUser => filteredUser !== userLogins?.email)[0];

export default getRecipientEmail;


