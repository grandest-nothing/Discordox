import React from "react";

import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton notHome />
      <ServerButton notHome />
      <ServerButton notHome hasNotifications />
      <ServerButton notHome mentions={3} />
      <ServerButton notHome />
      <ServerButton notHome />
      <ServerButton notHome />
      <ServerButton notHome mentions={78} />
      <ServerButton notHome hasNotifications />
      <ServerButton notHome />
      <ServerButton notHome />
    </Container>
  );
};
export default ServerList;
