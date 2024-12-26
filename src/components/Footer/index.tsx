import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Content, Copyright, Column, Image } from "./styles";
import restaurant from "../../assets/restaurant.jpg";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Content>
        <Image src={restaurant} alt="Restaurant Food" />
        <Column>
          <h4>
            Little
            <br />
            Lemon
          </h4>
          <ul>
            <li>
              {" "}
              <HashLink to="/">Home</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Menu</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/bookings">Reservations</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Order Online</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Login</HashLink>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                123 A Detroit <br />
                25 street,
                <br />
                Detroit 12345 <br />
                USA
              </address>
            </li>
            <li>
              {" "}
              <a href="tel:+123456789" target="_blank" rel="external">
                +1 99 123-546
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="mailto:contact@littlelemon.com"
                target="_blank"
                rel="external"
              >
                contact@littlelemon.com
              </a>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="external"
              >
                Facebook
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="external"
              >
                Instagram
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://twitter.com/" target="_blank" rel="external">
                Twitter
              </a>{" "}
            </li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <span>Developed by Behnam.</span>
        <p>© 2024 Little Lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
