import React from 'react';
import {FirebaseContext} from '../../contexts/FirebaseContext';
import ReactDOM from 'react-dom';
import { Card } from "react-bootstrap"
import { storage } from '../../contexts/FirebaseContext';

export default class View extends React.Component {

const resume = {
  basics: {
    name: "Richard Hendriks",
    label: "Frontend Developer",
    picture: "",
    email: "richard.hendriks@gmail.com",
    phone: "(912) 555-4321",
    website: "https://richardhendricks.com",
    summary:
      "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinal!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!",
    location: {
      address: "2712 Broadway St",
      postalCode: "CA 94115",
      city: "San Francisco",
      countryCode: "US",
      region: "California"
    },
    profiles: [
      {
        network: "Twitter",
        username: "neutralthoughts",
        url: ""
      },
      {
        network: "SoundCloud",
        username: "dandymusicnl",
        url: "https://soundcloud.com/dandymusicnl"
      }
    ]
  },
  work: [
    {
      company: "Pied Piper",
      position: "CEO/President",
      website: "https://piedpiper.com",
      startDate: "2013-12-01",
      endDate: "2014-12-01",
      summary:
        "Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.",
      highlights: [
        "Build an algorithm for artist to detect if their music was violating copy right infringement laws",
        "Successfully won Techcrunch Disrupt",
        "Optimized an algorithm that holds the current world record for Weisman Scores"
      ]
    }
  ],
  volunteer: [
    {
      organization: "CoderDojo",
      position: "Teacher",
      website: "https://coderdojo.com/",
      startDate: "2012-01-01",
      endDate: "2013-01-01",
      summary: "Global movement of free coding clubs for young people.",
      highlights: ["Awarded 'Teacher of the Month'"]
    }
  ],
  education: [
    {
      institution: "University of Oklahoma",
      area: "Information Technology",
      studyType: "Bachelor",
      startDate: "2011-06-01",
      endDate: "2014-01-01",
      gpa: "4.0",
      courses: ["DB1101 - Basic SQL", "CS2011 - Java Introduction"]
    }
  ],
  awards: [
    {
      title: "Digital Compression Pioneer Award",
      date: "2014-11-01",
      awarder: "Techcrunch",
      summary: "There is no spoon."
    }
  ],
  publications: [
    {
      name: "Video compression for 3d media",
      publisher: "Hooli",
      releaseDate: "2014-10-01",
      website: "https://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)",
      summary:
        "Innovative middle-out compression algorithm that changes the way we store data."
    }
  ],
  skills: [
    {
      name: "Web Development",
      level: "Master",
      keywords: ["HTML", "CSS", "Javascript"]
    },
    {
      name: "Compression",
      level: "Master",
      keywords: ["Mpeg", "MP4", "GIF"]
    }
  ],
  languages: [
    {
      language: "English",
      fluency: "Native speaker"
    }
  ],
  interests: [
    {
      name: "Wildlife",
      keywords: ["Ferrets", "Unicorns"]
    }
  ],
  references: [
    {
      name: "Erlich Bachman",
      reference:
        "It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company."
    }
  ]
};

const textColor = "#303936";

const Top = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  flex: 1;
  color: ${textColor};
  display: flex;
  flex-direction: row;
  max-width: 1000px;
`;

const SideBar = styled.div`
  flex: 0.3;
  background: #d7e9e9;
`;

const Content = styled.div`
  flex: 0.7;
  background: white;
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid ${textColor};
  margin: 16px;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
`;

const TitleCircle = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  border: 2px solid ${textColor};
  border-radius: 32px;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.h2`
  font-size: 25px;
  font-weight: 100;
  text-align: center;
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${textColor};
  margin: 16px;
`;

const ContactItem = styled.p``;

const SectionTitle = styled(SubTitle)`
  text-align: left;
`;
const SummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${textColor};
  margin: 16px;
`;

const Summary = styled.p`
  font-family: "Roboto", sans-serif;
`;

const App = ({ resume }) => (
  <Body>
    <Top>
      <SideBar>
        <TitleBox>
          <Title>{resume.basics.name.toUpperCase()}</Title>
          <TitleCircle>
            <SubTitle>{`${resume.basics.name.split(" ")[0][0]}/${
              resume.basics.name.split(" ")[1][0]
            }`}</SubTitle>
          </TitleCircle>
          <SubTitle>{resume.basics.label.toUpperCase()}</SubTitle>
        </TitleBox>
        <ContactBox>
          <ContactItem>
            <i className="fa fa-envelope-o" /> {resume.basics.email}
          </ContactItem>
          <ContactItem>
            <i className="fa fa-phone" /> {resume.basics.phone}
          </ContactItem>
          <ContactItem>
            <i className="fa fa-file-code-o" /> {resume.basics.website}
          </ContactItem>
        </ContactBox>
      </SideBar>
      <Content>
        <SummaryBox>
          <SectionTitle>
            <i className="fa fa-user-circle-o" /> Summary
          </SectionTitle>
          <Summary>{resume.basics.summary}</Summary>
        </SummaryBox>
      </Content>
    </Top>
  </Body>
);

render(<App resume={resume} />, document.getElementById("root"));
}
