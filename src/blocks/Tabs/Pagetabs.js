import { createMuiTheme, MuiThemeProvider, Tab, Tabs } from "@material-ui/core";
import { React, useState } from "react";
import { CustomAppBar } from "./AppBar/AppbarElements";

const Pagetabs = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createMuiTheme({
    overrides: {
      MuiTabs: {
        indicator: {
          backgroundColor: "#00e1ff",
        },
      },
      MuiTab: {
        root: {
          "&$selected": {
            color: "#00e1ff",
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CustomAppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="full width tabs example"
        >
          <Tab value="one" label="Cursos" />
          <Tab value="two" label="Actividad" />
        </Tabs>
      </CustomAppBar>
      {/* <TabPanel value={value} index="one">
        Item One
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
      <TabPanel value={value} index="three">
        Item Three
      </TabPanel> */}
    </MuiThemeProvider>
  );
};

export default Pagetabs;
