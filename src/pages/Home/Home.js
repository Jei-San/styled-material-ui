import Sidebar from "../../blocks/Sidebar/Sidebar";
import { StylesProvider } from "@material-ui/core/styles";
import Pagetabs from "../../blocks/Tabs/Pagetabs";
import { TabPage } from "../../blocks/Tabs/PTDivs/DivElements";
import {
  AppDivMain,
  DrawerDiv,
  InfoContainer,
} from "../../blocks/AppDiv/AppDiv";
import Profile from "../../blocks/Profile/Profile";

function Home() {
  return (
    <AppDivMain>
      <StylesProvider injectFirst>
        <DrawerDiv>
          <Sidebar />
        </DrawerDiv>
        <Profile></Profile>
        <TabPage>
          <Pagetabs />
          <InfoContainer></InfoContainer>
        </TabPage>
      </StylesProvider>
    </AppDivMain>
  );
}

export default Home;
