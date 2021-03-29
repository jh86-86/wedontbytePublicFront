import React from 'react';

import { Grid, HStack } from '@chakra-ui/react';
import ProfileInfo from 'Components/ProfileInfo';
import GenericButton from '../GenericButton';
import NewUserForm from '../NewUserForm';
import { useUserContext } from '../../Libs/userContext';
import LogoutButton from 'Components/LogoutButton';
import ProfileCard from 'Components/ProfileCard';

function ProfilePage() {
  const { userToDisplay } = useUserContext();

  return (
    <Grid placeItems="center" height={['90vh', '90vh', '90vh', '100vh']}>
      {/* <ProfileInfo /> */}
      {(userToDisplay.id && userToDisplay.group) ? <ProfileCard {...userToDisplay} /> : <NewUserForm />}

      <LogoutButton />

      <HStack spacing="2px">
        <GenericButton
          text="Create a group"
          handleClick={() => console.log('click')}
        ></GenericButton>

        <GenericButton
          text="Join a group"
          handleClick={() => console.log('click')}
        ></GenericButton>
      </HStack>
    </Grid>
  );
}

/*ON THE PROFILE PAGE
Picture in the middle
Logout button
User information
  - name
  - group you're a member of 
  - next event
  - stats

  */

export default ProfilePage;
