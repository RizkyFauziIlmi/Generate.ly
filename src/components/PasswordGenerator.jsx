import { CopyIcon, DeleteIcon, LockIcon, NotAllowedIcon, SettingsIcon } from '@chakra-ui/icons'
import { Button, Checkbox, Flex, Heading, IconButton, Input, InputGroup, InputRightElement, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, UnorderedList, useBoolean, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const PasswordGenerator = () => {
    const [password, setPassword] = React.useState("");
    const [chars, setChars] = React.useState("0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    const [length, setLength] = React.useState(12);
    const [uppercase, setUppercase] = useBoolean(true);
    const [lowercase, setLowercase] = useBoolean(true);
    const settingModal = useDisclosure()
    const toast = useToast();

    const handleChange = (event) => setPassword(event.target.value)
    const handleCharsSet = (event) => {
        let newString = '';
        for(const chr of event.target.value) {
            if(newString.includes(chr) === false) {
                newString += chr
            }
        }
        setChars(newString)
    }
    const handleClearChars = () => {
        setChars('')
    }

    const handleCopyToast = () => {
        if (password === '') {
            toast({
                title: 'Error',
                description: 'Generate the Password first before Copy',
                status: 'error',
                duration: 2000,
                isClosable: true
            })
        } else {
            toast({
                title: 'Succeed',
                description: 'Copied to Clipboard!',
                status: 'success',
                duration: 2000,
                isClosable: true
            })
        }
    }

    const generatePassword = () => {
        let pass = "";
        for (var i = 0; i <= length; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            if (uppercase && lowercase) {
                pass += chars.substring(randomNumber, randomNumber +1)
                setPassword(pass)
            } else if (uppercase) {
                pass += chars.substring(randomNumber, randomNumber +1).toUpperCase();
                setPassword(pass)
            } else if (lowercase) {
                pass += chars.substring(randomNumber, randomNumber +1).toLowerCase()
                setPassword(pass)
            } else {
                pass += chars.substring(randomNumber, randomNumber +1)
                setPassword(pass)
            }
        }
    }

  return (
    <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
        <Flex flexDir={'column'} alignItems={'center'} borderRadius={5} boxShadow={'dark-lg'} p={5} width={'80vw'}>
            <Heading size={'md'} pb={3}>🔑 Password Generator</Heading>
            <Input 
                variant={'filled'} 
                value={password}
                onChange={handleChange}
                isReadOnly
            />
            <Flex m={2} gap={1}>
                <Button leftIcon={<LockIcon />} size={'sm'} onClick={generatePassword}>Generate</Button>
                <CopyToClipboard
                    text={password}
                    onCopy={handleCopyToast}
                >
                    <Button leftIcon={<CopyIcon />} size={'sm'} >Copy</Button>
                </CopyToClipboard>
                <Button leftIcon={<SettingsIcon />} size={'sm'} onClick={settingModal.onOpen}>Setting</Button>
            </Flex>
            <Modal onClose={settingModal.onClose} isOpen={settingModal.isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Adjust your password</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <UnorderedList fontWeight={'bold'}>
                            <ListItem>
                                <Text>Length Password : {length}</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Uppercase : {uppercase.toString()}</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Lowercase : {lowercase.toString()}</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Character Combination : {chars}</Text>
                            </ListItem>
                        </UnorderedList>
                        <Flex flexDir={'column'} mt={5}>
                            <Heading size={'md'} alignSelf={'center'}>
                                <SettingsIcon /> Setting
                            </Heading>
                            <Slider value={length} onChange={(event) => setLength(event)} defaultValue={12} min={1} max={128} step={1}>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                            <Checkbox defaultChecked={uppercase ? true : false} onChange={setUppercase.toggle}>
                                Uppercase
                            </Checkbox>
                            <Checkbox defaultChecked={lowercase ? true : false} onChange={setLowercase.toggle}>
                                Lowercase
                            </Checkbox>
                            <InputGroup>
                                <Input 
                                    value={chars}
                                    onChange={handleCharsSet}
                                    placeholder="Character Combination"
                                />
                                <InputRightElement>
                                    <IconButton colorScheme={chars === '' ? 'red' : 'green'} aria-label='clear'onClick={handleClearChars} icon={chars === '' ? <NotAllowedIcon /> : <DeleteIcon />}/>
                                </InputRightElement>
                            </InputGroup>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    </Flex>
  )
}
