import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex, Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { HSeparator } from "components/Separator/Separator";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

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

  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "white"
  );
  let colorButton = useColorModeValue("white", "gray.700");
  const secondaryButtonBg = useColorModeValue("white", "transparent");
  const secondaryButtonBorder = useColorModeValue("gray.700", "white");
  const secondaryButtonColor = useColorModeValue("gray.700", "white");
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
            <Text fontSize="md" mb="16px">
              Software Developer
            </Text>
            <HSeparator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Flex justifyContent="space-between" mb="16px">
                <Text fontSize="md" fontWeight="600" mb="4px">
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
                  <Text mb="6px" textAlign="center">
                    Share your thought!
                  </Text>
                  <Flex justifyContent="center" alignContent="center">
                    <Link
                      isExternal={true}
                      href="https://twitter.com/intent/tweet?url=https://www.creative-tim.com/product/argon-dashboard-chakra/&text=Check%20Argon%20Dashboard%20Chakra%20made%20by%20@simmmple_web%20and%20@CreativeTim"
                    >
                      <Button
                        colorScheme="twitter"
                        leftIcon={<FaTwitter />}
                        me="10px"
                      >
                        <Text>Tweet</Text>
                      </Button>
                    </Link>
                    <Link
                      isExternal={true}
                      href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard-chakra/"
                    >
                      <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                        <Text>Share</Text>
                      </Button>
                  </Link>
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