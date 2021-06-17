import InboxIcon from "@material-ui/icons/MoveToInbox";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SettingsIcon from "@material-ui/icons/Settings";
import { CustomAccordionDetails } from "../Accordion/AccordionDetails/AccordionDetailsElements";
import { AccLink } from "../Link/LinkElements";
import {
  AccordionTypography,
  CustomTypography,
} from "../Typography/TypographyElements";

export const SidebarAccData = [
  {
    index: 1,
    title: <AccordionTypography>Contenido</AccordionTypography>,
    icon: <InboxIcon />,
    acctext: (
      <CustomAccordionDetails>
        <CustomTypography>
          <AccLink href="/a">Eventos</AccLink>
        </CustomTypography>
        <CustomTypography>
          <AccLink href="/b">Cursos</AccLink>
        </CustomTypography>
        <CustomTypography>
          <AccLink href="/c">Categorias</AccLink>
        </CustomTypography>
        <CustomTypography>
          <AccLink href="/d">Videos</AccLink>
        </CustomTypography>
        <CustomTypography>
          <AccLink href="/e">Instrutores</AccLink>
        </CustomTypography>
      </CustomAccordionDetails>
    ),
  },
  {
    index: 2,
    title: <AccordionTypography>Marketing</AccordionTypography>,
    icon: <AttachMoneyIcon />,
    acctext: (
      <CustomAccordionDetails>
        <CustomTypography>
          <AccLink href="/a">Ofertas/Paquetes</AccLink>
        </CustomTypography>
        <CustomTypography>
          <AccLink href="/b">Paginas de destino</AccLink>
        </CustomTypography>
        <CustomTypography>
          <AccLink href="/c">Formularios</AccLink>
        </CustomTypography>
        <CustomTypography>
          <AccLink href="/d">Templates de correo</AccLink>
        </CustomTypography>
        <CustomTypography>
          <AccLink href="/e">Automatizaciones</AccLink>
        </CustomTypography>
      </CustomAccordionDetails>
    ),
  },
  {
    index: 3,
    title: <AccordionTypography>Administrador</AccordionTypography>,
    icon: <SettingsIcon />,
    acctext: (
      <CustomAccordionDetails>
        <CustomTypography>
          <AccLink href="/a">Mis sitios</AccLink>
        </CustomTypography>
        <CustomTypography>
          <AccLink href="/b">Configuracion</AccLink>
        </CustomTypography>
        <CustomTypography>
          <AccLink href="/c">Colaboradores</AccLink>
        </CustomTypography>
      </CustomAccordionDetails>
    ),
  },
];
