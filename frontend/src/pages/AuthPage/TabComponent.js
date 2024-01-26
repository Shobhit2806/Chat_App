import React from "react";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const TabComponent = ({ FirstTab, SecondTab }) => {
  return (
    <div>
      <Tabs variant="soft-rounded" colorScheme="purple" isFitted isLazy>
        <TabList>
          <Tab color="white">Login</Tab>
          <Tab color="white">Signup</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>{FirstTab}</TabPanel>
          <TabPanel>{SecondTab}</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabComponent;
