import React from "react";
import {
  ProfileContainer,
  ProfilePhoto,
  ProfileTitle,
  ProfileLine,
  ProfButtonDiv,
  ProfInput,
  ProfInputButton,
} from "./ProfileDiv/ProfileDivElements";
import { CustomLine } from "./HorizontalLine/HorizontalLineElements";
import { ProfileButton } from "./ProfButton/ProfButtonElements";
import { ProfTextField } from "./ProfInput/ProfInputElement";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfilePhoto>
        <p>S</p>
      </ProfilePhoto>
      <ProfileTitle>
        <h1>sealtiel</h1>
        <span>sealtiel+course@x8bit.com</span>
        <p>Creado el: 19/04/2021</p>
        <p>No suscrito al newsletter</p>
      </ProfileTitle>
      <ProfileLine>
        <CustomLine />
      </ProfileLine>
      <ProfButtonDiv>
        <p>Acciones</p>
        <ProfileButton>Convertir en usuario</ProfileButton>
        <ProfileButton>Enviar correo de reestablecer contraseña</ProfileButton>
        <ProfileButton>Establecer contraseña manualmente</ProfileButton>
      </ProfButtonDiv>
      <ProfileLine>
        <CustomLine />
      </ProfileLine>
      <ProfInput>
        <ProfInputButton>
          <p>Nombre</p>
          <ProfTextField
            id="filled-full-width"
            fullWidth
            margin="normal"
            variant="filled"
            placeholder="Nombre del contacto"
          ></ProfTextField>
          <p>Correo</p>
          <ProfTextField
            id="filled-full-width"
            fullWidth
            margin="normal"
            variant="filled"
            placeholder="correo@example.com"
          ></ProfTextField>
          <p>Pais</p>
          <ProfTextField
            id="filled-full-width"
            fullWidth
            margin="normal"
            variant="filled"
            placeholder="Mexico"
          ></ProfTextField>
          <p>Estado</p>
          <ProfTextField
            id="filled-full-width"
            fullWidth
            margin="normal"
            variant="filled"
            placeholder="Nuevo Leon"
          ></ProfTextField>
          <p>Ciudad</p>
          <ProfTextField
            id="filled-full-width"
            fullWidth
            margin="normal"
            variant="filled"
            placeholder="Monterrey"
          ></ProfTextField>
        </ProfInputButton>
        <ProfileButton>Guardar</ProfileButton>
      </ProfInput>
    </ProfileContainer>
  );
};

export default Profile;
