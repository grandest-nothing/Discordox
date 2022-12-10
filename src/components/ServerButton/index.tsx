import React from "react";

import Logo from "../../assets/Logo.png";
import Skull from "../../assets/skull-icon.png";

import { Button } from "./styles";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  notHome?: boolean;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
  notHome,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
      notHome={notHome}
    >
      {isHome && <img src={Logo} alt="RX" />}
      {notHome && <img src={Skull} className="skull-img" alt="asdf" />}
    </Button>
  );
};

export default ServerButton;
