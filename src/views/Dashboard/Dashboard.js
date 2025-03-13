import React from "react";
import { Avatar, Box, Button, Flex, Grid, Icon, Image, Link, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import avatar5 from "assets/img/avatars/avatar5.png"; 
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
import Card from "components/Card/Card"; 
import CardBody from "components/Card/CardBody"; 
import CardHeader from "components/Card/CardHeader";
import { FaFacebook, FaInstagram, FaPaperPlane, FaLinkedin, FaGithub, FaYoutube, FaCode, FaReact, FaNodeJs, FaLaravel, FaJava, FaChalkboardTeacher } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb, SiExpress } from "react-icons/si";

function Dashboard() {
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.900", "white");
  const iconColor = useColorModeValue("blue.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.600", "gray.300");
  let colorButton = useColorModeValue("gray.700", "gray.700");

  return (
    <Flex direction='column' pt={{ base: "120px", md: "55px", lg: "55px" }} >
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
          w="100%"
          justify={{ sm: "center", lg: "right" }}
          align="center"
        >
          <Button
            p="0px"
            w={{ sm: "100%", lg: "40%" }}
            bg="transparent"
            variant="no-effects"
            mb={{ sm: "10px", lg: "0px" }}
            mr={{ lg: "10px" }}
            onClick={() => window.location.href = "mailto:masrud.mubarok21@gmail.com"}
          >
            <Flex
              align="center"
              w="100%"
              bg={colorMode === "dark" ? "#fff" : "#fff"}
              borderRadius="8px"
              justifyContent="center"
              py="10px"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{ boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.25)" }}
            >
              <Icon color={colorButton} as={FaPaperPlane} me="6px" fontSize="20px" />
              <Text fontSize="xs" color={colorButton} fontWeight="bold">
                masrud.mubarok21@gmail.com
              </Text>
            </Flex>
          </Button>

          <Button
            p="0px"
            w={{ sm: "100%", lg: "25%" }}
            bg="transparent"
            variant="no-effects"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Flex
              align="center"
              w="100%"
              bg={colorMode === "dark" ? "#fff" : "#fff"}
              borderRadius="8px"
              justifyContent="center"
              py="10px"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{ boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.25)" }}
            >
              🚀 &nbsp;
              <Text fontSize="xs" color={colorButton} fontWeight="bold">
                Explore My Craft
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
            <Text fontSize={{ base: 'sm', md: 'md' }} color={emailColor} fontWeight='400' mb='30px' wordBreak="break-word" whiteSpace="normal" textAlign="justify">
              Hey there! I'm <b>Masrud Mubarok</b>, a <b>Software Developer</b> with <b>3+ years of experience</b> in building scalable, high-performance applications.
              <br /><br />
              🔹 <b>Back-End:</b> Crafting powerful APIs and designing robust system architectures using <b>Symfony, Laravel, and Node.js</b> <br />
              🔹 <b>Front-End:</b> Creating seamless user experiences with <b>Vue.js and React.js</b> <br /><br />

              I thrive on solving complex problems, writing clean and maintainable code, and transforming innovative ideas into functional software solutions. 
              Always eager to learn and stay up-to-date with the latest technologies, I enjoy collaborating with teams to build products that make a difference. 🚀
            </Text>
              <Flex direction='column' mb='18px'>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor} fontWeight='bold' mb='10px'>
                  Connect With Me :
                </Text>
                <Flex>
                  <Link href='https://www.linkedin.com/in/masrudmubarok/' color={iconColor} fontSize='lg' me='10px' _hover={{ color: "blue.500" }}>
                    <Icon as={FaLinkedin} />
                  </Link>
                  <Link href='https://github.com/masrudmubarok/' color={iconColor} fontSize='lg' me='10px' _hover={{ color: "gray.500" }}>
                    <Icon as={FaGithub} />
                  </Link>
                  <Link href='#' color={iconColor} fontSize='lg' me='10px' _hover={{ color: "blue.500" }}>
                    <Icon as={FaFacebook} />
                  </Link>
                  <Link href='#' color={iconColor} fontSize='lg' me='10px' _hover={{ color: "pink.500" }}>
                    <Icon as={FaInstagram} />
                  </Link>
                  <Link href='https://www.youtube.com/channel/UCQlzVd6RFAYCfMVxlYLunvg' color={iconColor} fontSize='lg' me='10px' _hover={{ color: "red.500" }}>
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
              <Text fontSize='sm' color={emailColor} fontWeight='400'>
                My expertise and roles
              </Text>
            </Flex>
          </CardHeader>
          <CardBody px='5px'>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="24px">
            {/* Card 1 */}
            <Card
              p="16px"
              border="1px solid white"
              borderRadius="15px"
              textAlign="center"
              maxWidth="100%"
              boxShadow="0px 5px 20px rgba(109, 105, 105, 0.1)"
            >
              <CardBody display="flex" flexDirection="column" alignItems="center">
                <Icon as={FaCode} color={iconColor} fontSize="4xl" mb="12px" />
                <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} fontWeight="bold" mb="8px">
                  Software Development
                </Text>
                <Text fontSize="sm" color={emailColor} fontWeight="400">
                  Building scalable web applications using modern technologies.
                </Text>
              </CardBody>
            </Card>

            {/* Card 2 */}
            <Card
              p="16px"
              border="1px solid white"
              borderRadius="15px"
              textAlign="center"
              maxWidth="100%"
              boxShadow="0px 5px 20px rgba(109, 105, 105, 0.1)"
            >
              <CardBody display="flex" flexDirection="column" alignItems="center">
                <Icon as={FaChalkboardTeacher} color={iconColor} fontSize="4xl" mb="12px" />
                <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} fontWeight="bold" mb="8px">
                  Programming Mentor
                </Text>
                <Text fontSize="sm" color={emailColor} fontWeight="400">
                  Teaching coding concepts and guiding students through projects.
                </Text>
              </CardBody>
            </Card>
          </Grid>
          </CardBody>
        </Card>
      </Grid>

      <Card p={{ base: '12px', md: '16px' }} my='24px' id='projects'>
        <CardHeader p='12px 5px' mb='12px'>
          <Flex direction='column'>
            <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} fontWeight='bold'>
              Projects
            </Text>
            <Text fontSize='sm' color={emailColor} fontWeight='400'>
              Building innovative and scalable software solutions.
            </Text>
          </Flex>
        </CardHeader>
        <CardBody px='5px'>
          <Grid
            templateColumns={{ sm: '1fr', md: '1fr 1fr', xl: 'repeat(4, 1fr)' }}
            templateRows={{ sm: '1fr 1fr 1fr auto', md: '1fr 1fr', xl: '1fr' }}
            gap='24px'
          >
            <Flex direction='column' border='1px solid rgba(128, 128, 128, 0.1)' borderRadius='15px' p='10px'>
              <Box mb='20px' position='relative' borderRadius='15px' overflow='hidden'>
                <Image src={ImageArchitect3} borderRadius='15px' w='100%' h='100%' objectFit='cover' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'
                ></Box>
              </Box>
              <Flex direction='column' p='6px'>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={emailColor} fontWeight='600' mb='10px' mt='-16px'>
                  Web
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} fontWeight='bold' mb='10px'>
                  SIMKEU PPTIK
                </Text>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={emailColor} fontWeight='400' mb='20px'>
                  A financial management system for PPTIK STIKI Malang.
                </Text>
                <Flex justify='space-between' align='center' direction={{ base: 'column', md: 'row' }}>
                  <Flex gap='10px'>
                    <Button variant='dark' minW='110px' h='36px'>
                      Demo
                    </Button>
                    <Button variant='dark' minW='110px' h='36px'>
                      Source
                    </Button>
                  </Flex>
                  <Flex gap='8px' align='center' mt={{ base: '10px', md: '0' }}>
                    <Flex gap='6px'>
                      <FaLaravel size={20} color='#FF2D20' />
                      <SiTailwindcss size={20} color='#06B6D4' />
                      <SiMysql size={20} color='#4479A1' />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' border='1px solid rgba(128, 128, 128, 0.1)' borderRadius='15px' p='10px'>
              <Box mb='20px' position='relative' borderRadius='15px' overflow='hidden'>
                <Image src={ImageArchitect3} borderRadius='15px' w='100%' h='100%' objectFit='cover' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'
                ></Box>
              </Box>
              <Flex direction='column' p='6px'>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={emailColor} fontWeight='600' mb='10px' mt='-16px'>
                  Web
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} fontWeight='bold' mb='10px'>
                  Devlite
                </Text>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={emailColor} fontWeight='400' mb='20px'>
                  A handbook platform for learning and refining software development skills.
                </Text>
                <Flex justify='space-between' align='center' direction={{ base: 'column', md: 'row' }}>
                  <Flex gap='10px'>
                    <Button variant='dark' minW='110px' h='36px'>
                      Demo
                    </Button>
                    <Button variant='dark' minW='110px' h='36px'>
                      Source
                    </Button>
                  </Flex>
                  <Flex gap='8px' align='center' mt={{ base: '10px', md: '0' }}>
                    <Flex gap='6px'>
                      <FaReact size={20} color="#61DBFB" />
                      <Image src="https://docusaurus.io/img/docusaurus.png" alt="Docusaurus" width={5} height={5} />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' border='1px solid rgba(128, 128, 128, 0.1)' borderRadius='15px' p='10px'>
              <Box mb='20px' position='relative' borderRadius='15px' overflow='hidden'>
                <Image src={ImageArchitect3} borderRadius='15px' w='100%' h='100%' objectFit='cover' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'
                ></Box>
              </Box>
              <Flex direction='column' p='6px'>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={emailColor} fontWeight='600' mb='10px' mt='-16px'>
                  Web
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} fontWeight='bold' mb='10px'>
                  PPTIK Academy Admin
                </Text>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={emailColor} fontWeight='400' mb='20px'>
                  Admin panel for managing courses, payments, and users.
                </Text>
                <Flex justify='space-between' align='center' direction={{ base: 'column', md: 'row' }}>
                  <Flex gap='10px'>
                    <Button variant='dark' minW='110px' h='36px'>
                      Demo
                    </Button>
                    <Button variant='dark' minW='110px' h='36px'>
                      Source
                    </Button>
                  </Flex>
                  <Flex gap='8px' align='center' mt={{ base: '10px', md: '0' }}>
                    <Flex gap='6px'>
                      <FaLaravel size={20} color='#FF2D20' />
                      <SiTailwindcss size={20} color='#06B6D4' />
                      <SiMysql size={20} color='#4479A1' />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' border='1px solid rgba(128, 128, 128, 0.1)' borderRadius='15px' p='10px'>
              <Box mb='20px' position='relative' borderRadius='15px' overflow='hidden'>
                <Image src={ImageArchitect3} borderRadius='15px' w='100%' h='100%' objectFit='cover' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'
                ></Box>
              </Box>
              <Flex direction='column' p='6px'>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={emailColor} fontWeight='600' mb='10px' mt='-16px'>
                  Mobile
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} fontWeight='bold' mb='10px'>
                  PPTIK Academy
                </Text>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={emailColor} fontWeight='400' mb='20px'>
                  A financial management system for PPTIK STIKI Malang.
                </Text>
                <Flex justify='space-between' align='center' direction={{ base: 'column', md: 'row' }}>
                  <Flex gap='10px'>
                    <Button variant='dark' minW='110px' h='36px'>
                      Demo
                    </Button>
                    <Button variant='dark' minW='110px' h='36px'>
                      Source
                    </Button>
                  </Flex>
                  <Flex gap='8px' align='center' mt={{ base: '10px', md: '0' }}>
                    <Flex gap='6px'>
                      <FaJava size={20} color="#007396" />
                      <FaLaravel size={20} color="#FF2D20" />
                      <SiMysql size={20} color="#4479A1" />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' border='1px solid rgba(128, 128, 128, 0.1)' borderRadius='15px' p='10px'>
              <Box mb='20px' position='relative' borderRadius='15px' overflow='hidden'>
                <Image src={ImageArchitect3} borderRadius='15px' w='100%' h='100%' objectFit='cover' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'
                ></Box>
              </Box>
              <Flex direction='column' p='6px'>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={emailColor} fontWeight='600' mb='10px' mt='-16px'>
                  Web
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} fontWeight='bold' mb='10px'>
                  Khelsya Store
                </Text>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={emailColor} fontWeight='400' mb='20px'>
                  An e-commerce website for selling thrift fashion products.
                </Text>
                <Flex justify='space-between' align='center' direction={{ base: 'column', md: 'row' }}>
                  <Flex gap='10px'>
                    <Button variant='dark' minW='110px' h='36px'>
                      Demo
                    </Button>
                    <Button variant='dark' minW='110px' h='36px'>
                      Source
                    </Button>
                  </Flex>
                  <Flex gap='8px' align='center' mt={{ base: '10px', md: '0' }}>
                    <Flex gap='6px'>
                      <SiMongodb size={20} color="#4DB33D" />
                       <SiExpress size={20} color="#808080" />
                       <FaReact size={20} color="#61DBFB" />
                       <FaNodeJs size={20} color="#68A063" />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Grid>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Dashboard;