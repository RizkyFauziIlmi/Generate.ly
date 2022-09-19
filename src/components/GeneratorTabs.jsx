import React from 'react'
import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel } 
from '@chakra-ui/react'
import { PasswordGenerator } from './PasswordGenerator'

export const GeneratorTabs = () => {
  return (
    <div>
        <Tabs isLazy>
            <TabList>
                <Tab>Password Generator</Tab>
                <Tab>Two</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <PasswordGenerator />
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
  )
}
