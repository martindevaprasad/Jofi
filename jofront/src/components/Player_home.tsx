import React from "react";
import {
  Grid,
  Card,
  Text,
  Image,
  Col,
  Spacer,
  Badge,
  Button,
  Progress
} from "@nextui-org/react";
import { Switch, useTheme } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import header from "../Assets/header.jpg";
import { Container, Row } from "@nextui-org/react";
import rainpurple from "../Assets/Rain_purple.gif";
import citypurple from "../Assets/aesthetic-purple.gif";
import "../Assets/font/font.css";
import darklogo from "../Assets/darklogo.png";
import lightlogo from "../Assets/lightlogo.png";
import anulmalae from "../Assets/songs/Anul_Malae.mp3";
import moon from "../Assets/DetailedNarrowLice-size_restricted.gif";
import darkas1 from "../Assets/darkas (1).gif";
import darkas2 from "../Assets/darkas (2).gif";
import darkas3 from "../Assets/darkas (3).gif";
import darkas4 from "../Assets/darkas (4).gif";
import darkas5 from "../Assets/darkas (5).gif";
import darkas6 from "../Assets/darkas (6).gif";
import darkas7 from "../Assets/darkas (7).gif";
import darkas8 from "../Assets/darkas (8).gif";
import darkas9 from "../Assets/darkas (9).gif";
import darkas11 from "../Assets/200w.gif";
import darkas12 from "../Assets/7RuY.gif";
import darkas13 from "../Assets/beachef.gif";
import darkas10 from "../Assets/darkas (10).gif";

import beach from "../Assets/songs/sandy-beach-calm-waves-water-nature-sounds-8052.mp3";
import lightrain from "../Assets/songs/light-rain-ambient-114354.mp3";
import stormrain from "../Assets/songs/rain-and-thunder-16705.mp3";
import Sahana from "../Assets/songs/Sahana.mp3";
import Ondra from "../Assets/songs/Ondra Renda.mp3";
import Mast from "../Assets/songs/Mast.mp3";
import Unakul from "../Assets/songs/unnakul naane.mp3";
import MunbeVaa from "../Assets/songs/Munbe Vaa.mp3";
import Mannipaya from "../Assets/songs/Mannipaaya.mp3";
import Mayiliragey from "../Assets/songs/Mayilirage.mp3";
import kadhaipoma from "../Assets/songs/Kadhaippoma.mp3";
import Jupiter from "../Assets/songs/Jupiter Mazha.mp3";







export const SongPlayer = ({
  album,
  artist,
  category,
  image,
  name,
  audio
}: any) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const playSongHandler = () => {
    console.log("true");
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current?.play();
      setIsPlaying(!isPlaying);
    }
  };
  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audio;
    }
  }, [audio]);

  console.log(audio);
  return (
    <div>
      <Grid md={2}>
        <Card css={{ w: "200px", h: "200px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" color="#ffffffAA">
                {category}
              </Text>
              <Text h3 color="#ffffffAA">
                {name}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={image}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={12}>
                  {album}
                </Text>
                <Text color="#000" size={12}>
                  {artist}
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button
                    onClick={playSongHandler}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g transform="translate(0 24) scale(1 -1)">
                          <path
                            fill="currentColor"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67a1 1 0 0 1 0 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84z"
                          />
                        </g>
                      </svg>
                    }
                    flat
                    auto
                    rounded
                    color="secondary"
                  ></Button>
                  <audio ref={audioRef} />


                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </div>
  );
};

export const Player_home = () => {
  const { theme } = useTheme();
  const darkMode = useDarkMode(false);
  const { type, isDark } = useTheme();

  const songData = [
    {
      category: "LOFI",
      name: "Anul Malae",
      image: darkas1,
      artist: "Harris Jayaraj",
      album: "Varanam Aayiram",
      song: anulmalae
    },
    {
      category: "Reverbed",
      name: "Ondra Inranda",
      image: darkas8,
      artist: "Harris Jayaraj",
      album: "kaakha kaakha",
      song: Ondra
    },
    {
      category: "Reverbed",
      name: "Sahana Saral",
      image: moon,
      artist: "AR Rahman",
      album: "Sivaji",
      song: Sahana
    },
    {
      category: "Reverbed",
      name: "Mast Magan",
      image: darkas2,
      artist: "Arjit Singh",
      album: "2 States",
      song: Mast
    },
    {
      category: "Reverbed",
      name: "Unakkul Naanae",
      image: darkas3,
      artist: "Harris Jayaraj",
      album: "PachaikiliMuthu",
      song: Unakul
    },
    {
      category: "Reverbed",
      name: "Munbe Vaa",
      image: darkas5,
      artist: "AR Rahman ",
      album: "Sillunu oru kadhal",
      song: MunbeVaa
    },
    {
      category: "Reverbed",
      name: "Mayiliragey",
      image: darkas6,
      artist: "AR Rahman",
      album: "Anbe Aaruyirey",
      song: Mayiliragey
    },
    {
      category: "Reverbed",
      name: "Mannipaaya",
      image: darkas10,
      artist: "AR Rahman",
      album: "Vinnaithaandi",
      song: Mannipaya
    },
    {
      category: "Reverbed",
      name: "Kadhaipoma",
      image: darkas11,
      artist: "Loen James",
      album: "Oh My Kadavule",
      song: kadhaipoma
    },
    {
      category: "Reverbed",
      name: "Jupiter Mazha",
      image: darkas12,
      artist: "Dhanwin",
      album: "Apoorva Santhya",
      song: Jupiter
    },
  ];

  const effect = [
    {
      name:"Cats and Dogs",
      song:stormrain,
      image:rainpurple,
      album:"Heavy Rain",
      artist:"Coming soon"
    },
    {
      name:"Beach Station",
      song:beach,
      image:darkas13,
      album:"Beach Waves",
      artist:"Coming soon"
    },
    {
      name:"Scotish Summer",
      song:lightrain,
      image:citypurple,
      album:"Light Rain",
      artist:"Coming soon"
    },
  ]

  return (
    <>
    
    <Progress value={29}  indeterminated size="xs"  color="gradient" />

      <Row justify="space-between" align="center">
        <Spacer x={2} />
        <Col span={8}>
          {/* <Text
            size={24}
            weight="black"
            css={{
              color: "#ff4ecd",
          
              padding: "$2 $4",
              "@hover":{
                color:"#4ED1EC"
              }
            }}
          >
            Jo-Fi{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14.5 6.92L13 5.77V3.4c0-.26.22-.48.5-.48s.5.21.5.48V4h2v-.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92L6 6.07l5.05 15.25c.15.45.55.68.95.68s.8-.23.95-.69L18 6.07l-3.5.85zM13.28 8.5l.76.58l.92-.23L13 14.8V8.29l.28.21zm-3.32.59l.76-.58l.28-.22v6.51L9.03 8.86l.93.23z"
              />
            </svg>
          </Text> */}
          {darkMode.value == true ? (
            <>
              {" "}
              <img alt="logo" style={{ width: "9%" }} src={lightlogo} />
            </>
          ) : (
            <>
              {" "}
              <img alt="logo" style={{ width: "9%" }} src={darklogo} />
            </>
          )}
        </Col>
        <Col offset={0} span={2}>
          <Switch checked={darkMode.value} onChange={() => darkMode.toggle()} />
        </Col>
      </Row>
      <Spacer y={1} />

      <Row>
        <Spacer x={1} />
        <Col>
        <Button shadow color="gradient" auto>
         Lofi
        </Button>
        </Col>
      </Row>
      <Spacer y={1} />
      {/* <Spacer x={4}/> */}
      <Grid.Container
        gap={2}
        justify="flex-start"
        style={{ height: "35vh", overflowY: "auto",marginLeft:"50px" }}
      >
        {songData.map((item, index) => (
          <SongPlayer
            category={item.category}
            album={item.album}
            name={item.name}
            artist={item.artist}
            image={item.image}
            audio={item.song}
          />
        ))}
        {/* <Grid md={2}>
          <Card css={{ w: "200px", h: "200px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text size={12} weight="bold" color="#ffffffAA">
                  LOFI
                </Text>
                <Text h3 color="#ffffffAA">
                  Anal Melae
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={rainpurple}
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
              />
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop:
                  "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1
              }}
            >
              <Row>
                <Col>
                  <Text color="#000" size={12}>
                    Available soon.
                  </Text>
                  <Text color="#000" size={12}>
                    Get notified.
                  </Text>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g transform="translate(0 24) scale(1 -1)">
                            <path
                              fill="currentColor"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67a1 1 0 0 1 0 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84z"
                            />
                          </g>
                        </svg>
                      }
                      flat
                      auto
                      rounded
                      color="secondary"
                    ></Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid md={2}>
          <Card css={{ w: "200px", h: "200px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text size={12} weight="bold" color="#ffffffAA">
                  LOFI
                </Text>
                <Text h3 color="#ffffffAA">
                  Anal Melae
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={citypurple}
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
              />
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop:
                  "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1
              }}
            >
              <Row>
                <Col>
                  <Text color="#000" size={12}>
                    Available soon.
                  </Text>
                  <Text color="#000" size={12}>
                    Get notified.
                  </Text>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g transform="translate(0 24) scale(1 -1)">
                            <path
                              fill="currentColor"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67a1 1 0 0 1 0 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84z"
                            />
                          </g>
                        </svg>
                      }
                      flat
                      auto
                      rounded
                      color="secondary"
                    ></Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Grid> */}
      </Grid.Container >
      <Spacer y={1} />
      <Row >
        <Spacer x={1} />
        <Col >
        <Button shadow color="gradient" auto>
         Effects
        </Button>
        </Col>
      </Row>
      <Spacer y={1} />

      <Grid.Container 
       gap={2}
       justify="flex-start"
       style={{ height: "35vh", overflowY: "auto",marginLeft:"50px" }}>
      {effect.map((item, index) => (
        <>
          <SongPlayer
         
            album={item.album}
            name={item.name}
            artist={item.artist}
            image={item.image}
            audio={item.song}
          />
          </>
        ))}
      </Grid.Container>
    </>
  );
};
