import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { FooterSection, DetailsContainer , DetailsCard,
    SocialIcons
} from "./styledComponent";

const sections = [
  {
    title: "ABOUT MEALMOB",
    items: ["Who We Are", "Blog", "Report Fraud", "Press Kit", "Contact Us"],
  },
  {
    title: "LEARN MORE",
    items: ["Cliams", "Privacy", "Terms", "Policies", "Conditions"],
  },
  {
    title: "AVAILABLE",
    items: ["Warangal", "Hanumkonda", "Kazipet"],
  },

  {
    title: "FOR RESTAURANTS",
    items: ["Partner With Us", "Apps For You"],
  },
];

const items = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://www.github.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://www.twitter.com/",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/",
  },
];
const Footer = () => {
  return (
    <FooterSection>
      <h2>MealMOB</h2>
      <DetailsContainer>
        {sections.map((section, index) => (
          <DetailsCard key={index}>
            <h6>{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </DetailsCard>
        ))}
      </DetailsContainer>
      <hr />
      {/* Social ICONS */}
      <SocialIcons>
        <p>All rights reserved by Pranay Kallepu 2024.</p>
        <div>
          {items.map((item, index) => (
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon />
            </a>
          ))}
        </div>
      </SocialIcons>
    </FooterSection>
  );
};

export default Footer;
