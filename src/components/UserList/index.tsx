import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="grandest nothing" />

      <Role>Disponível - 18</Role>
      <UserRow nickname="rodox" isBot />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
      <UserRow nickname="nasty" />
    </Container>
  );
};
export default UserList;
