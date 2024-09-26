import {
  AppBar, Container,
  // Hidden,  // TODO
  List, Typography, Toolbar, Breadcrumbs
} from '@suid/material'
import { useAtomValue } from 'solid-jotai'
import { Component, Show } from 'solid-js'

// import { darkModeState } from 'src/store/Theme/atoms'
import Link from './Link'
import NavCollections from './NavCollections'
import NavDatabases from './NavDatabases'
import { selectedCollectionState, selectedDatabaseState } from '@/stores/globalAtoms'

const NavBar: Component<{
  // collections: Mongo['collections']
  // databases: Mongo['databases']
  // show: {
  //   databases: boolean
  //   collections: boolean
  // }
}> = () => {
  const selectedDatabase = useAtomValue(selectedDatabaseState)
  console.log('selectedDatabase: ', selectedDatabase() !== undefined);
  const selectedCollection = useAtomValue(selectedCollectionState)
  console.log('selectedCollection: ', selectedCollection() !== undefined);
  return (
    <AppBar position="relative">
      <Container>
        <Toolbar disableGutters variant="dense">
          {/* <Hidden mdDown> */}
          <List
            aria-labelledby="main navigation"
            component="nav"
            sx={{	// navDisplayFlex
              display: 'flex',
              p: 0,
              alignItems: 'center',
              // justifyContent: 'space-between'
            }}
          >
            <Link href="/"
            // passHref
            // style={{ display: 'flex', margin: 12 // padding: 0, verticalAlign: 'middle' }}
            >
              {/* TODO change with Vike Image */}
              <img src="/favicon.ico" height={24} width={24} alt="logo" />
            </Link>

            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                // mr: 2,
                // display: { xs: 'flex', md: 'none' },
                // flexGrow: 1,
                // fontFamily: 'monospace',
                // fontWeight: 700,
                // letterSpacing: '.3rem',
                px: 1.5,
                py: 1,
                color: 'rgb(153, 143, 143)',
                textDecoration: 'none',
                ':hover': {
                  color: 'white'
                }
              }}
            >
              Mongo Express
            </Typography>

            <Breadcrumbs aria-label="breadcrumb" separator=">" >
              <NavDatabases />

              <Show when={selectedDatabase()}>
                <NavCollections />
              </Show>
            </Breadcrumbs>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar