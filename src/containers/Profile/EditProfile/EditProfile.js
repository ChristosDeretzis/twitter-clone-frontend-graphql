import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Loader from '../../../components/Loader/Loader';
import CoverPhoto from "../../../components/CoverPhoto/CoverPhoto";
import { PROFILE, EDIT_PROFILE } from '../../../queries/Profile';
import { IS_LOGGED_IN } from '../../../queries/User';
import "./EditProfile.css";
import { uploadImage } from '../../../utils';
import Avatar from '../../../components/Avatar/Avatar';
import { TextField } from '@mui/material';
import Button from '../../../components/Button/Button';
import { useHistory } from "react-router-dom";


const EditProfile = (props) => {
    const {
        data: { User }
    } = useQuery(IS_LOGGED_IN);

    const { data, loading } = useQuery(PROFILE, {
        variables: { userName: User.userName }
    });

    const [newCoverPhoto, setNewCoverPhoto] = useState("");
    const [newAvatar, setNewAvatar] = useState("");

    const [coverPhoto, setCoverPhoto] = useState(data.profile && data.profile.coverPhoto);
    const [avatar, setAvatar] = useState(data.profile && data.profile.avatar);
    const [firstName, setFirstName] = useState(data.profile && data.profile.firstName);
    const [lastName, setLastName] = useState(data.profile && data.profile.lastName);
    const [location, setLocation] = useState(data.profile && data.profile.location);
    const [dob, setDob] = useState(data.profile && data.profile.dob);
    const [website, setWebsite] = useState(data.profile && data.profile.website);
    const [bio, setBio] = useState(data.profile && data.profile.bio);

    const onChangeCoverPhoto = async (e) => {
        setNewCoverPhoto(await uploadImage(e.target.files[0]));
    }

    const onChangeAvatar = async (e) => {
        setNewAvatar(await uploadImage(e.target.files[0]));
    }

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    
    const onChangeLocation = (e) => {
        setLocation(e.target.value);
    }

    const onChangeDob = (e) => {
        setDob(e.target.value);
    }

    const onChangeWebsite = (e) => {
        setWebsite(e.target.value);
    }

    const onChangeBio = (e) => {
        setBio(e.target.value);
    }

    const [editProfileMutation] = useMutation(EDIT_PROFILE, {
        refetchQueries: [{ query: PROFILE, variables: { userName: User.userName }}]
    });

    const handleEditProfile = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName) {
            return alert("You cannot leaveout firstname/lastname empty");
        }

        try {
            await editProfileMutation({
              variables: {
                firstName: firstName,
                lastName: lastName,
                dob: dob,
                bio: bio,
                location: location,
                website: website,
                avatar: newAvatar ? newAvatar : avatar,
                coverPhoto: newCoverPhoto ? newCoverPhoto : coverPhoto,
              },
            });
      
            alert("Your profile has been updated 🥳");
          } catch (err) {
            console.log(err.message);
          }
      
          window.location.href=`/${User.userName}`;
    }

    if (loading) return <Loader />;

     return (
         <div className="edit-profile-wrapper">
             <div className="header">
                 Edit Profile
             </div>
             <div className="flex-wrapper">
                 <form onSubmit={handleEditProfile}>
                     <div className="cover-photo-wrapper">
                         <label htmlFor="cover-photo-input">
                             <CoverPhoto
                                src={newCoverPhoto ? newCoverPhoto : coverPhoto}
                                alt="cover"
                            />
                         </label>
                         <input type="file" id="cover-photo-input" accept="image/*" onChange={onChangeCoverPhoto} />
                     </div>
                     <div className="avatar-wrapper">
                         <label htmlFor="avatar-input">
                             <Avatar 
                                src={newAvatar ? newAvatar : avatar}
                                alt="avatar"
                            />
                         </label>
                         <input type="file" id="avatar-input-file" accept="image/*" onChange={onChangeAvatar} />
                     </div>
                     <TextField
                        name="firstName"
                        label="First Name"
                        id="firstName"
                        variant="outlined"
                        margin="normal"
                        defaultValue={firstName}
                        value={firstName}
                        onChange={onChangeFirstName}
                    />
                    <TextField
                        name="lastName"
                        label="Last Name"
                        id="lastName"
                        variant="outlined"
                        margin="normal"
                        defaultValue={lastName}
                        value={lastName}
                        onChange={onChangeLastName}
                    />
                    <TextField
                        name="location"
                        label="Location"
                        id="location"
                        variant="outlined"
                        margin="normal"
                        defaultValue={location}
                        value={location}
                        onChange={onChangeLocation}
                    />
                    <TextField
                        name="dob"
                        label="Date of Birth"
                        id="dob"
                        variant="outlined"
                        margin="normal"
                        defaultValue={dob}
                        value={dob}
                        onChange={onChangeDob}
                    />
                    <TextField
                        name="website"
                        label="Website"
                        id="dob"
                        variant="outlined"
                        margin="normal"
                        defaultValue={website}
                        value={website}
                        onChange={onChangeWebsite}
                    />
                    <TextField
                        name="bio"
                        label="Bio"
                        id="bio"
                        variant="outlined"
                        margin="normal"
                        defaultValue={bio}
                        value={bio}
                        onChange={onChangeBio}
                        multiline
                        rows={3}
                    />
                    <Button 
                        disabled={loading} 
                        type="submit" 
                        label={loading ? "Saving" : "Save"}
                    />
                 </form>
             </div>
         </div>
     );
}

export default EditProfile;