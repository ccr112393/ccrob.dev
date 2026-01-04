import { AppShell, Avatar, Button, Divider, Group, MantineProvider, NavLink, Stack, Text, Title } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "./theme";

const defaultPadding = "md";

const NavMenu = () => {
  return (
    <Stack gap={"0"}>
      <Title order={4} pb={"xs"}>Navigation Menu</Title>
      <Divider />
      <NavLink label="About Me" />
      <NavLink label="Projects">
        <NavLink label="Ai Tools" />
        <NavLink label="SignPlan" />

      </NavLink>

      <NavLink label="Contact" />
    </Stack>
  );
}

const AppLayout = () => {
  return (
    <AppShell padding={defaultPadding} header={{ height: 60 }} footer={{ height: 30 }} navbar={{ width: 300, breakpoint: 600 }}>
      <AppShell.Header>
        <Group h={"100%"} pl={defaultPadding}>
          <Avatar src="https://avatars.githubusercontent.com/u/29787864?v=4" radius="xl" />
          <Title>Charles Robinson</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p={defaultPadding}>
        <NavMenu />
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack w={"300px"}>
          <Title order={2}>Main Content</Title>
          <Button>
            A Button
          </Button>
        </Stack>
      </AppShell.Main>
      <AppShell.Footer>
        <Group h={"100%"} pl={defaultPadding} pb="5px">
          <Text c={"gray"}>© 2026 Charles Robinson</Text>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
};

export default function App() {
  return <MantineProvider theme={theme}>
    <AppLayout />
  </MantineProvider>;
}
