import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TagsInput from "../../components/tags-input/TagsInput";
import TechnologiesModal from "../../components/technologies-modal/TechnologiesModal";
import { useAppDipatch } from "../../hooks/redux";
import { UpdateUserInterface } from "../../models/interfaces/users/update-user.interface";
import { TechnologyType } from "../../models/types/TechnologyType";
import { fetchUpdateProfile } from "../../redux/actions/userActions";
import { RootState } from "../../redux/store";
import technologiesService from "../../services/technologies";
import { mockAllTechnologies, mockUserTechnologies } from "./constants/mock-technologies";

import './UpdateProfile.css';

export const UpdateProfile = () => {
  const dipatch = useAppDipatch();
  // Кнопки добавление аватара и обложки просто замокай
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
  const [userTechnologiesIds, setTechnologiesIds] = useState(user?.technology || []);
  const [userTechnologies, setUserTechnologies] = useState(new Array<TechnologyType>);

  const [allTechnologies, setAllTechnologies] = useState(new Array<TechnologyType>);

  const [isTechModalOpen, setIsTechModalOpen] = useState(false);

  useEffect(() => {
    userTechnologiesIds.forEach(async (techId) => {
      const technology = await technologiesService.getTechnologiesById(techId);

      setUserTechnologies((oldState) => {
        return [...oldState, technology as TechnologyType]
      })
    });
  }, []);

  useEffect(() => {
    const technologiesSolver = async () => {
      const technologiesList =
        await technologiesService.getTechnologiesList();

      setAllTechnologies(technologiesList as TechnologyType[]);
    };

    technologiesSolver();
  }, [isTechModalOpen]);

  const openOrCloseTechModal = () => {
    setIsTechModalOpen(!isTechModalOpen);
  };

  const submitUpdateProfile = async (e: any) => {
    e.preventDefault();
    // TODO implement builder class
    const bodyToSend: UpdateUserInterface = {
      phone: phoneNumber,
      username: gradebookNumber,
      technology: userTechnologies.map((tech) => tech.id),
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

  const handleChangeTechnology = (id: number, isSelected: boolean) => {
    if (isSelected) {
      const technology = allTechnologies.find((tech) => tech.id === id);

      if (technology) {
        setUserTechnologies((oldState) => {
          return [...oldState, technology];
        });
      }

      return;
    }

    setUserTechnologies((oldState) => {
      return oldState.filter((tech) => tech.id !== id);
    });
  }

  return(
    <main>
      <form>
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
          tagsHandler={setUserTechnologies}
          tags={userTechnologies}
          onButtonClick={openOrCloseTechModal}
        />
        {
          isTechModalOpen &&
          <TechnologiesModal
            onCloseModal={openOrCloseTechModal}
            onChangeTech={handleChangeTechnology}
            onSubmitForm={() => {}}
            userTechnologies={userTechnologies as TechnologyType[]}
            allTechnologies={allTechnologies as TechnologyType[]}
          />
        }
        <button type="submit" onClick={submitUpdateProfile}>Save</button>
      </form>
    </main>
  );
}