import React, { useState } from "react";
import { Col, Row, Carousel } from "react-bootstrap";

import "./Profile.css";
import CardComponent from "../../common/CardComponent";
import IProfile from "./IPorfile";
import { ReactComponent as UserIcon } from "../../imgs/icon-user.svg";

const Profile = () => {
  const [profile, setProfile] = useState<IProfile>();

  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="profile-alignment">
            {profile?.imgUrl ? (
               <img
                  alt={profile?.name}
                  src={profile?.imgUrl} 
                  className="profile-img"
               />
            ) : (
              <UserIcon className="profile-img" />
            )}
          </div>
          <span className="profile-alignment name">
            <p>Olá, {profile?.name}</p>
          </span>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          {profile?.transactions && (
            <Carousel interval={null}>
              {profile?.transactions.map((transaction, index) => (
                <Carousel.Item key={index}>
                  <CardComponent title="Meu card de testes">
                    Você realizou uma transação de
                    {transaction.from.currency}
                    {transaction.from.amount}
                    para
                    {transaction.to.currency}
                    {transaction.to.amount}
                  </CardComponent>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Profile;
