import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HSeparator } from "components/Separator/Separator";
import React, { useState, useEffect } from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Configurator(props) {
  const {
    sidebarVariant,
    setSidebarVariant,
    secondary,
    isOpen,
    onClose,
    fixed,
    ...rest
  } = props;

  const { colorMode, toggleColorMode } = useColorMode();
  const [switched, setSwitched] = useState(colorMode !== "dark");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState("Mencari Lokasi...");
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const savedColorMode = localStorage.getItem("chakra-ui-color-mode");
    if (savedColorMode) {
      setSwitched(savedColorMode !== "dark");
    }
  }, []);

  const handleToggle = () => {
    setSwitched(!switched);
    toggleColorMode();
    localStorage.setItem("chakra-ui-color-mode", switched ? "dark" : "light");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            if (data && data.address) {
              const { city, town, village, county } = data.address;
              const cityName = city || town || village || county;
              if (cityName) {
                setLocation(cityName);
              } else {
                setLocation(userTimezone);
              }
            } else {
              setLocation(userTimezone);
            }
          } catch (error) {
            console.error("Error fetching location:", error);
            setLocation(userTimezone);
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setLocation(userTimezone);
        }
      );
    } else {
      setLocation(userTimezone);
    }
  }, []);

  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "white"
  );
  let colorButton = useColorModeValue("white", "gray.700");
  const bgDrawer = useColorModeValue("white", "navy.800");
  const settingsRef = React.useRef();

  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement={document.documentElement.dir === "rtl" ? "left" : "right"}
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent bg={bgDrawer}>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text fontSize="xl" fontWeight="bold" mt="16px">
              Masrud Mubarok
            </Text>
            <Text fontSize="sm" mb="16px">
              Software Developer
            </Text>
            <HSeparator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Flex justifyContent="space-between" mb="16px" alignItems="center">
                <Text fontSize="md" fontWeight="600" mb="0px">
                  {switched ? "Light Mode" : "Dark Mode"}
                </Text>
                <Switch
                  colorScheme="blue"
                  isChecked={switched}
                  onChange={handleToggle}
                />
              </Flex>
              <HSeparator />
              <Box mt="24px">
                <Box>
                  <Link
                    href="https://www.creative-tim.com/product/argon-dashboard-chakra?ref=creativetim-pud"
                    w="100%"
                    mb="16px"
                  >
                    <Button
                      w="100%"
                      mb="16px"
                      bg={bgButton}
                      color={colorButton}
                      fontSize="xs"
                      variant="no-effects"
                      px="30px"
                    >
                      Download CV
                    </Button>
                  </Link>
                </Box>
                <Box w="100%">
                  <Text fontSize="sm" mb="6px" textAlign="center">
                    Time / Location
                  </Text>
                </Box>
                <Box w="100%">
                  <Flex justifyContent="center" alignContent="center" mb="16px">
                    <Button
                      leftIcon={<FaClock />}
                      w="48%"
                      mb="16px"
                      bg={bgButton}
                      color={colorButton}
                      fontSize="xs"
                      variant="no-effects"
                      px="16px"
                      marginRight="10px"
                      borderRadius="8px"
                      border="1px solid"
                    >
                      {currentTime.toLocaleTimeString()}
                    </Button>
                    <Button
                      leftIcon={<FaMapMarkerAlt />}
                      w="48%"
                      mb="16px"
                      bg={bgButton}
                      color={colorButton}
                      fontSize="xs"
                      variant="no-effects"
                      px="16px"
                      borderRadius="8px"
                      border="1px solid"
                    >
                      {location}
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}