// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import ImageArchitect1 from "assets/img/ImageArchitect1.png";
import ImageArchitect2 from "assets/img/ImageArchitect2.png";
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaCode, FaLaptopCode, FaDatabase, FaCogs, FaCloud,
  FaChalkboardTeacher
} from "react-icons/fa";

function Profile() {
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("blue.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px", lg: "100px" }}>
      <Flex
        direction={{ sm: "column", md: "row" }}
        mb='24px'
        maxH='330px'
        justifyContent={{ sm: "center", md: "space-between" }}
        align='center'
        boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.02)'
        border='1.5px solid'
        borderColor={borderProfileColor}
        bg={bgProfile}
        p='24px'
        borderRadius='20px'>
        <Flex
          align='center'
          mb={{ sm: "10px", md: "0px" }}
          direction={{ sm: "column", md: "row" }}
          w={{ sm: "100%" }}
          textAlign={{ sm: "center", md: "start" }}>
          <Avatar
            me={{ md: "22px" }}
            src={avatar5}
            w='80px'
            h='80px'
            borderRadius='15px'
          />
          <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
            <Text
              fontSize={{ sm: "lg", lg: "xl" }}
              color={textColor}
              fontWeight='bold'
              ms={{ sm: "8px", md: "0px" }}>
              Masrud Mubarok
            </Text>
            <Text
              fontSize={{ sm: "sm", md: "md" }}
              color={emailColor}
              fontWeight='semibold'>
              Software Developer
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction={{ sm: "column", lg: "row" }}
          w={{ sm: "100%", md: "50%", lg: "auto" }}>
          <Button p='0px' bg='transparent' variant='no-effects'>
            <Flex
              align='center'
              w={{ sm: "100%", lg: "135px" }}
              bg={colorMode === "dark" ? "navy.900" : "#fff"}
              borderRadius='8px'
              justifyContent='center'
              py='10px'
              boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.06)'
              cursor='pointer'>
              <Icon color={textColor} as={FaPenFancy} me='6px' />
              <Text fontSize='xs' color={textColor} fontWeight='bold'>
                LET'S CONNECT
              </Text>
            </Flex>
          </Button>
          <Button p='0px' bg='transparent' variant='no-effects'>
            <Flex
              align='center'
              w={{ lg: "135px" }}
              borderRadius='15px'
              justifyContent='center'
              py='10px'
              mx={{ lg: "1rem" }}
              cursor='pointer'>
              <Icon color={textColor} as={FaCube} me='6px' />
              <Text fontSize='xs' color={textColor} fontWeight='bold'>
                SEE MY WORK
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>

      <Grid templateColumns={{ base: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <Card p='16px' my={{ base: "24px", xl: "0px" }} maxWidth="100%">
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Profile Information
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column'>
              <Text fontSize='md' color='gray.400' fontWeight='400' mb='30px' wordBreak="break-word" whiteSpace="normal">
                Hey there! I'm <b>Masrud Mubarok</b>, a <b>Software Developer</b> with <b>3+ years of experience</b> in building scalable, high-performance applications.
                <br /><br />
                🔹 <b>Back-End :</b> Crafting powerful APIs and designing robust system architectures using <b>Symfony, Laravel, and Node.js</b> <br />
                🔹 <b>Front-End :</b> Creating seamless user experiences with <b>Vue.js and React.js</b> <br /> <br />

                I love solving complex problems and turning ideas into reality through clean, maintainable code.
              </Text>
              <Flex direction='column' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' mb='10px'>
                  Connect With Me :
                </Text>
                <Flex>
                  <Link href='#' color={iconColor} fontSize='lg' me='10px' _hover={{ color: "blue.500" }}>
                    <Icon as={FaLinkedin} />
                  </Link>
                  <Link href='#' color={iconColor} fontSize='lg' me='10px' _hover={{ color: "gray.500" }}>
                    <Icon as={FaGithub} />
                  </Link>
                  <Link href='#' color={iconColor} fontSize='lg' me='10px' _hover={{ color: "blue.500" }}>
                    <Icon as={FaFacebook} />
                  </Link>
                  <Link href='#' color={iconColor} fontSize='lg' me='10px' _hover={{ color: "pink.500" }}>
                    <Icon as={FaInstagram} />
                  </Link>
                  <Link href='#' color={iconColor} fontSize='lg' me='10px' _hover={{ color: "red.500" }}>
                    <Icon as={FaYoutube} />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>

        <Card p='16px' mt='-24px' maxWidth="100%">
          <CardHeader p='12px 5px' mb='12px'>
            <Flex direction='column'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                What I Do
              </Text>
              <Text fontSize='sm' color='gray.400' fontWeight='400'>
                My expertise and roles
              </Text>
            </Flex>
          </CardHeader>
          <CardBody px='5px'>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap='24px'>
              {/* Card 1 */}
              <Card p='16px' border='1px solid white' borderRadius='15px' textAlign='center' maxWidth="100%">
                <CardBody display='flex' flexDirection='column' alignItems='center'>
                  <Icon as={FaCode} color={iconColor} fontSize='4xl' mb='12px' />
                  <Text fontSize='lg' color={textColor} fontWeight='bold' mb='8px'>
                    Software Development
                  </Text>
                  <Text fontSize='sm' color={textColor} fontWeight='400'>
                    Building scalable web applications using modern technologies.
                  </Text>
                </CardBody>
              </Card>

              {/* Card 2 */}
              <Card p='16px' border='1px solid white' borderRadius='15px' textAlign='center' maxWidth="100%">
                <CardBody display='flex' flexDirection='column' alignItems='center'>
                  <Icon as={FaChalkboardTeacher} color={iconColor} fontSize='4xl' mb='12px' />
                  <Text fontSize='lg' color={textColor} fontWeight='bold' mb='8px'>
                    Programming Mentor
                  </Text>
                  <Text fontSize='sm' color={textColor} fontWeight='400'>
                    Teaching coding concepts and guiding students through projects.
                  </Text>
                </CardBody>
              </Card>
            </Grid>
          </CardBody>
        </Card>
      </Grid>

      <Card p='16px' my='24px'>
        <CardHeader p='12px 5px' mb='12px'>
          <Flex direction='column'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Projects
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='400'>
              Architects design houses
            </Text>
          </Flex>
        </CardHeader>
        <CardBody px='5px'>
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
            templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
            gap='24px'>
            <Flex direction='column'>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={ImageArchitect1} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
              </Box>
              <Flex direction='column'>
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Project #1
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  Modern
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  As Uber works through a huge amount of internal management
                  turmoil.
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    VIEW ALL
                  </Button>
                  <AvatarGroup size='xs'>
                    <Avatar name='Ryan Florence' src={avatar6} />
                    <Avatar name='Segun Adebayo' src={avatar2} />
                    <Avatar name='Kent Dodds' src={avatar3} />
                    <Avatar name='Prosper Otemuyiwa' src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column'>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={ImageArchitect2} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
              </Box>
              <Flex direction='column'>
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Project #2
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  Scandinavian
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  Music is something that every person has his or her own
                  specific opinion about.
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    VIEW ALL
                  </Button>
                  <AvatarGroup size='xs'>
                    <Avatar name='Ryan Florence' src={avatar6} />
                    <Avatar name='Segun Adebayo' src={avatar2} />
                    <Avatar name='Kent Dodds' src={avatar3} />
                    <Avatar name='Prosper Otemuyiwa' src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column'>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={ImageArchitect3} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
              </Box>
              <Flex direction='column'>
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Project #3
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  Minimalist
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  Different people have different taste, especially various
                  types of music.
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    VIEW ALL
                  </Button>
                  <AvatarGroup size='xs'>
                    <Avatar name='Ryan Florence' src={avatar6} />
                    <Avatar name='Segun Adebayo' src={avatar2} />
                    <Avatar name='Kent Dodds' src={avatar3} />
                    <Avatar name='Prosper Otemuyiwa' src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Button
              p='0px'
              bg='transparent'
              border='1px solid lightgray'
              borderRadius='15px'
              minHeight={{ sm: "200px", md: "100%" }}>
              <Flex direction='column' justifyContent='center' align='center'>
                <Icon as={FaPlus} color={textColor} fontSize='lg' mb='12px' />
                <Text fontSize='lg' color={textColor} fontWeight='bold'>
                  Create a New Project
                </Text>
              </Flex>
            </Button>
          </Grid>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Profile;