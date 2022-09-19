import React from 'react';
import { 
    Flex, 
    Heading, 
    IconButton, 
    useColorMode, 
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    Button,
    Link,
} from "@chakra-ui/react";
import { 
    SunIcon, 
    MoonIcon, 
    HamburgerIcon, 
    LockIcon,
    EmailIcon
} from '@chakra-ui/icons';
import { BsBug, BsInstagram, BsWhatsapp } from 'react-icons/bs'

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <React.Fragment>
        <Flex alignItems={'center'} justifyContent={'space-around'} mt={3}>
            <Link href='/'>
                <Heading size={'sm'}>Generator.ly</Heading>
            </Link>
            <Flex alignItems={'center'} justifyContent={'center'}>
                <IconButton variant={'unstyled'} onClick={toggleColorMode} aria-label="theme-button" icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon /> } />  
                <IconButton ref={btnRef} onClick={onOpen} icon={<HamburgerIcon />} /> 
            </Flex>
        </Flex>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>What do you want to generate?</DrawerHeader>

            <DrawerBody>
                <Link href='/password-generator'>
                    <Button leftIcon={<LockIcon />}>Password Generator</Button>
                </Link>
            </DrawerBody>

            <DrawerFooter>
                <Flex flexDir={'column'} alignItems={'center'} gap={2}>
                    <Heading size={'xs'}>
                        <Flex gap={0.5} alignItems={'center'}>
                            <BsBug />see any bugs?
                        </Flex>
                    </Heading>
                    <Flex gap={1} flexWrap={"wrap"} alignItems={'center'} justifyContent={'center'}>
                        <Link target={'_blank'} href='https://www.instagram.com/'>
                            <Button colorScheme={'facebook'} leftIcon={<BsInstagram />}>Instagram</Button>
                        </Link>
                        <Link target={'_blank'} href='https://wa.me/089627030604'>
                            <Button colorScheme={'whatsapp'} leftIcon={<BsWhatsapp />}>whatsapp</Button>
                        </Link>
                        <Link target={'_blank'} href='mailto:rizkyfauziilmi@gmail.com'>
                            <Button colorScheme={'twitter'} leftIcon={<EmailIcon />}>Email</Button>
                        </Link>      
                    </Flex>
                </Flex>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </React.Fragment>
  )
}