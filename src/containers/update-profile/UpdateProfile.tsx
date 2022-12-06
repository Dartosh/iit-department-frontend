import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TagsInput from "../../components/tags-input/TagsInput";
import { useAppDipatch } from "../../hooks/redux";
import { UpdateUserInterface } from "../../models/interfaces/users/update-user.interface";
import { fetchUpdateProfile } from "../../redux/actions/userActions";

import { RootState } from "../../redux/store";

import './UpdateProfile.css';

export const UpdateProfile = () => {
  const dipatch = useAppDipatch();
  const { user } = useSelector((store: RootState) => store.user);

  const [firstName, setFirstName] = useState(user?.first_name || '');
  const [middleName, setMiddleName] = useState(user?.middle_name || '');
  const [lastName, setLastName] = useState(user?.last_name || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [gradebookNumber, setGradebookNumber] = useState(user?.username || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phone || '');
  // Пока данное поле на бэкенде отсутствует
  // const [email, setEmail] = useState(user?.email || '');
  const [github, setGithub] = useState(user?.github || '');
  const [technologies, setTechnologies] = useState(user?.technology || []);

  const submitUpdateProfile = async (e: any) => {
    e.preventDefault();
    // TODO implement builder class
    const bodyToSend: UpdateUserInterface = {
      phone: phoneNumber,
      username: gradebookNumber,
      technology: technologies,
    };

    // TODO Да, знаю, трэш, потом переделаю
    if (firstName && firstName !== user?.first_name) {
      bodyToSend.first_name = firstName;
    }

    if (middleName && middleName !== user?.middle_name) {
      bodyToSend.middle_name = middleName;
    }

    if (lastName && lastName !== user?.last_name) {
      bodyToSend.last_name = lastName;
    }

    if (bio && bio !== user?.bio) {
      bodyToSend.bio = bio;
    }

    if (github && github !== user?.github) {
      bodyToSend.github = github;
    }

    console.log(bodyToSend);

    dipatch(fetchUpdateProfile(user?.id!, bodyToSend));
  }

  return(
    <main>
      <form onSubmit={submitUpdateProfile}>
        <label>First name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(e.target.value) }
          }
        />
        <label>Middle name: </label>
        <input
          type="text"
          value={middleName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMiddleName(e.target.value) }
          }
        />
        <label>Last name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value) }
          }
        />
        <label>Bio: </label>
        <input
          type="text"
          value={bio}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setBio(e.target.value) }
          }
        />
        <label>Gradebook number: </label>
        <input
          type="text"
          value={gradebookNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setGradebookNumber(e.target.value) }
          }
        />
        <label>Phone number: </label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPhoneNumber(e.target.value) }
          }
        />
        <label>Github: </label>
        <input
          type="text"
          value={github}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setGithub(e.target.value) }
          }
        />
        <TagsInput
          tagsHandler={setTechnologies}
          tags={technologies}
        />
        <button type="submit">Save</button>
      </form>
    </main>
  );
}