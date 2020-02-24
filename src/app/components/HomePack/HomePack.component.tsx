import React from "react";
import { Col, Row } from "react-bootstrap";
import { ProfilePack, ProfilePackAddon } from "../../helpers/Interface.helper";
import HomePackAddon from "../HomePackAddon/HomePackAddon.component";

type Props = {
  key: string;
  pack: ProfilePack;
};

const HomePack = (props: Props) => {
  const { pack } = props;

  return (
    <div>
      <Row>
        <Col>
          {pack.category} - {pack.version}
        </Col>
      </Row>
      <Row>
        {pack.addons?.map(
          (
            value: ProfilePackAddon,
            index: number,
            array: ProfilePackAddon[]
          ) => {
            return (
              <Col xs={6}>
                <HomePackAddon addon={value} key={`${index}`} />
              </Col>
            );
          }
        )}
      </Row>
    </div>
  );
};

export default HomePack;
