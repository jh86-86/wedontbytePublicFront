import React from "react";

import { Grid } from "@chakra-ui/react";
import NewUserForm from "../NewUserForm";
import { useUserContext } from "../../Libs/userContext";
import LogoutButton from "Components/LogoutButton";
import ProfileCard from "Components/ProfileCard";
import EventCard from "Components/EventCard";

function ProfilePage() {
  const { userToDisplay, nextEvent } = useUserContext();

  return (
    <Grid placeItems="center" height={["90vh", "90vh", "90vh", "100vh"]}>
      {userToDisplay.id && userToDisplay.group ? (
        <ProfileCard {...userToDisplay} />
      ) : (
        <NewUserForm />
      )}

      <LogoutButton />

      <EventCard {...nextEvent} willAttend={true} />
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
