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
        <Card css={{ w: "200px", h: "200px","@smMax":{
          w:"150px",h:"150px"
        } }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} css={{'@smMax':{
                fontSize:"small"
              }}} weight="bold" color="#ffffffAA">
                {category}
              </Text>
              <Text css={{'@smMax':{
                fontSize:"small"
              }}} h3 color="#ffffffAA">
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
              zIndex: 1,
              '@smMax':{
                width:"100%",height:"35%"
              }
            }}
          >
            <Row>
              <Col>
                <Text color="#000" css={{'@smMax':{
                fontSize:"10px"
              }}} size={12} >
                  {album}
                </Text>
                <Text css={{'@smMax':{
                fontSize:"10px"
              }}} color="#000" size={12}>
                  {artist}
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end" >
                  <Button css={{'@smMax':{
                    width:"30px",height:"30px",marginTop:"10px"
                  }}}
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

export const MoonIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}: any) => {
  if (filled) {
    return (
      <svg
        width={size || width || 24}
        height={size || height || 24}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
          fill={fill}
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={fill}
        d="M20.742,13.045c-0.677,0.18-1.376,0.271-2.077,0.271c-2.135,0-4.14-0.83-5.646-2.336c-2.008-2.008-2.799-4.967-2.064-7.723 c0.092-0.345-0.007-0.713-0.259-0.965C10.444,2.04,10.077,1.938,9.73,2.034C8.028,2.489,6.476,3.382,5.241,4.616 c-3.898,3.898-3.898,10.243,0,14.143c1.889,1.889,4.401,2.93,7.072,2.93c2.671,0,5.182-1.04,7.07-2.929 c1.236-1.237,2.13-2.791,2.583-4.491c0.092-0.345-0.008-0.713-0.26-0.965C21.454,13.051,21.085,12.951,20.742,13.045z M17.97,17.346c-1.511,1.511-3.52,2.343-5.656,2.343c-2.137,0-4.146-0.833-5.658-2.344c-3.118-3.119-3.118-8.195,0-11.314 c0.602-0.602,1.298-1.102,2.06-1.483c-0.222,2.885,0.814,5.772,2.89,7.848c2.068,2.069,4.927,3.12,7.848,2.891 C19.072,16.046,18.571,16.743,17.97,17.346z"
      ></path>
    </svg>
  );
};

export const SunIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}: any) => {
  if (filled) {
    return (
      <svg
        width={size || width || 24}
        height={size || height || 24}
        viewBox="0 0 24 24"
        {...props}
      >
        <g fill={fill}>
          <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
          <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
        </g>
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={fill}
        d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19H12.998V22H10.998zM10.998 2H12.998V5H10.998zM1.998 11H4.998V13H1.998zM18.998 11H21.998V13H18.998z"
      ></path>
      <path
        fill={fill}
        transform="rotate(-45.017 5.986 18.01)"
        d="M4.487 17.01H7.487V19.01H4.487z"
      ></path>
      <path
        fill={fill}
        transform="rotate(-45.001 18.008 5.99)"
        d="M16.508 4.99H19.509V6.99H16.508z"
      ></path>
      <path
        fill={fill}
        transform="rotate(-134.983 5.988 5.99)"
        d="M4.487 4.99H7.487V6.99H4.487z"
      ></path>
      <path
        fill={fill}
        transform="rotate(134.999 18.008 18.01)"
        d="M17.008 16.51H19.008V19.511000000000003H17.008z"
      ></path>
    </svg>
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
    }
  ];

  const effect = [
    {
      name: "Cats and Dogs",
      song: stormrain,
      image: rainpurple,
      album: "Heavy Rain",
      artist: "Coming soon"
    },
    {
      name: "Beach Station",
      song: beach,
      image: darkas13,
      album: "Beach Waves",
      artist: "Coming soon"
    },
    {
      name: "Scotish Summer",
      song: lightrain,
      image: citypurple,
      album: "Light Rain",
      artist: "Coming soon"
    }
  ];

  return (
    <>
      <Progress value={29} indeterminated size="xs" color="gradient" />

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
              <Image alt="logo" css={{ width: "9%",'@smMax':{
                width:"30%"
              } }} src={lightlogo} />
            </>
          ) : (
            <>
              {" "}
              <Image alt="logo" css={{ width: "9%",'@smMax':{
                width:"30%"
              } }} src={darklogo} />
            </>
          )}
        </Col>

        <Col offset={0} span={2} style={{display:"flex"}} >
          <Switch css={{'@smMax':{
            
          }}}
            iconOff={<SunIcon filled />}
            iconOn={<MoonIcon filled />}
            checked={darkMode.value}
            onChange={() => darkMode.toggle()}
          />
          <a href="https://github.com/martindevaprasad" target="_blank">
          <svg style={{marginLeft:"15px"}}
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M83.8167 24.5875C83.4783 24.1384 83.1167 23.7073 82.7334 23.2959C83.1189 22.2685 83.4118 21.2087 83.6084 20.1292C84.1888 16.18 83.6847 12.1473 82.15 8.46252C82.15 8.46252 77.4834 7.00418 66.775 14.2125C62.2288 12.9573 57.533 12.3265 52.8167 12.3375C48.0869 12.3292 43.3776 12.9599 38.8167 14.2125C28.1084 6.92085 23.4417 8.46252 23.4417 8.46252C21.9254 12.1083 21.4215 16.0958 21.9834 20.0042C22.1811 21.1286 22.4881 22.2311 22.9 23.2959C22.525 23.7125 22.15 24.1709 21.8167 24.5875C18.7075 28.4876 17.057 33.3506 17.15 38.3375C17.1402 39.5203 17.1958 40.7026 17.3167 41.8792C18.65 60.3375 30.9417 64.6292 42.65 65.9625C40.9929 67.5035 39.8692 69.532 39.4417 71.7542C39.0544 73.2362 38.8722 74.7643 38.9 76.2959V81.7542C34.2375 82.1709 29.4542 81.4917 27.9709 77.3334C26.3786 73.3532 23.7378 69.8788 20.3292 67.2792C20.0801 67.1444 19.8431 66.9882 19.6209 66.8125C19.3216 66.0259 18.7913 65.3482 18.0997 64.8686C17.4081 64.3889 16.5875 64.1297 15.7459 64.125H15.725C14.6236 64.125 13.5669 64.5611 12.7861 65.338C12.0053 66.1149 11.5639 67.1694 11.5584 68.2709C11.5459 71.6542 14.9334 73.8417 16.3209 74.5834C17.9419 76.2168 19.2459 78.1368 20.1667 80.2459C21.6834 84.5084 26.1209 90.9875 38.775 90.1459L38.7834 90.5542L38.8 91.6709C38.8 92.7759 39.239 93.8358 40.0204 94.6172C40.8018 95.3986 41.8616 95.8375 42.9667 95.8375H62.6084C63.7134 95.8375 64.7732 95.3986 65.5546 94.6172C66.336 93.8358 66.775 92.7759 66.775 91.6709C66.775 91.6709 66.8084 78.5042 66.8084 76.2959C66.8361 74.7643 66.6539 73.2362 66.2667 71.7542L66.2584 71.7292L66.275 71.7542C66.2375 71.6084 66.1834 71.4917 66.1417 71.35C65.6774 69.2856 64.6032 67.4085 63.0584 65.9625L63.1084 66.05L63.025 65.9667C74.7334 64.6334 86.9417 60.2584 88.275 41.8834C88.3959 40.7068 88.4516 39.5244 88.4417 38.3417C88.5156 33.3647 86.8835 28.5081 83.8167 24.5875Z"
              fill="url(#paint0_linear_52_24)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_52_24"
                x1="31"
                y1="34"
                x2="80.5"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C254FF" />
                <stop offset="1" stop-color="#27BEFF" />
              </linearGradient>
            </defs>
          </svg>
          </a>
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
        css={{ height: "35vh", overflowY: "auto",marginLeft:"30px"}}
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
      </Grid.Container>
      <Spacer y={1} />
      <Row>
        <Spacer x={1} />
        <Col>
          <Button shadow color="gradient" auto >
            Effects
          </Button>
        </Col>
      </Row>
      <Spacer y={1} />

      <Grid.Container
        gap={2}
        justify="flex-start"
        css={{ height: "35vh", overflowY: "auto",marginLeft:"30px" }}
      >
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
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2 8.17998C15.2932 8.30417 15.414 8.40498 15.5528 8.4744C15.6917 8.54383 15.8448 8.57998 16 8.57998C16.1553 8.57998 16.3084 8.54383 16.4472 8.4744C16.5861 8.40498 16.7069 8.30417 16.8 8.17998C17.6754 7.04483 18.8406 6.16669 20.173 5.63798C21.665 5.06298 23.495 4.94498 25.553 5.97398C28.146 7.26998 29.104 9.48498 28.94 11.95C28.771 14.48 27.404 17.261 25.293 19.372C23.08 21.586 19.266 25.396 16.503 27.497C16.3652 27.6015 16.1959 27.6561 16.023 27.6519C15.8501 27.6478 15.6837 27.585 15.551 27.474C12.998 25.414 8.86102 21.527 6.70702 19.372C4.59602 17.262 3.22902 14.479 3.06002 11.95C2.89602 9.48498 3.85402 7.26998 6.44702 5.97398C8.50502 4.94398 10.335 5.06298 11.827 5.63798C13.1593 6.16641 14.3245 7.0442 15.2 8.17898V8.17998Z"
            stroke="url(#paint0_linear_58_42)"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <mask
            id="mask0_58_42"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="1"
            y="3"
            width="30"
            height="27"
          >
            <path
              d="M5.99999 5.07999C10.665 2.74699 14.5 5.57999 16 7.57999C17.5 5.57999 21.335 2.74699 26 5.07999C32 8.07999 30.5 15.58 26 20.08C23.804 22.275 19.937 26.142 17.109 28.293C16.7932 28.5331 16.4057 28.6598 16.009 28.6525C15.6124 28.6452 15.2298 28.5045 14.923 28.253C12.33 26.16 8.16499 22.243 5.99999 20.078C1.49999 15.578 -8.58307e-06 8.07799 5.99999 5.07799V5.07999Z"
              fill="#C4C4C4"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </mask>
          <g mask="url(#mask0_58_42)">
            <path
              d="M2.04297 -19.454L30.663 9.16599M2.04297 -4.45401L30.663 24.166M2.04297 10.546L30.663 39.166M2.04297 -14.454L30.663 14.166M2.04297 0.54599L30.663 29.166M2.04297 15.546L30.663 44.166M2.04297 20.546L30.663 49.166M2.04297 -9.45401L30.663 19.166M2.04297 5.54599L30.663 34.166M2.04297 25.546L30.663 54.166"
              stroke="url(#paint1_linear_58_42)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_58_42"
              x1="16"
              y1="5.20132"
              x2="16"
              y2="27.6522"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#27BEFF" />
              <stop offset="0.5625" stop-color="#C254FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_58_42"
              x1="16.353"
              y1="-19.454"
              x2="16.353"
              y2="54.166"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#27BEFF" />
              <stop offset="0.5625" stop-color="#C254FF" />
            </linearGradient>
          </defs>
        </svg>
        <Spacer y={1}/>
        {darkMode.value == true ? (
          <>
            {" "}
            <Text
              style={{ textAlign: "center", fontFamily: "DeliusSwash" }}
              color="#fff"
            >
              {" "}
              PRE LO. Made with Love. By Mart :)
            </Text>
          </>
        ) : (
          <>
            <Text
              style={{ textAlign: "center", fontFamily: "DeliusSwash" }}
              color="#000"
            >
              {" "}
              Pre Lo. Made with Love. By Mart :)
            </Text>
          </>
        )}
      </div>
    </>
  );
};
