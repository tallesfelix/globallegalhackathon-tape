import {Menu, Container, Image, Dropdown, Segment, Icon, Responsive, Visibility, Sidebar, Button} from 'semantic-ui-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

class MobileNavbar extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state

      return (
        <div style={{ display:"flex", flexDirection:"column", backgroundColor:'#EDEDED'}}>
        <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth} style={{cursor:'pointer'}}>
          <Sidebar
            as={Menu}
            animation='push'
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            width='thin'
            icon='labeled'
          >
              <>
                <Link href='/'>
                  <Menu.Item position='left' as='a'>Agenda</Menu.Item>
                </Link>
                <Link href='/audiencias/minhas-audiencias/futuras'>
                  <Menu.Item as='a'>Minhas audiencias futuras</Menu.Item>
                </Link>
                <Link href='/audiencias/minhas-audiencias/passadas'>
                  <Menu.Item as='a'>Minhas audiencias passadas</Menu.Item>
                </Link>
                <Link href='/audiencias/nova'>
                  <Menu.Item as='a'>Agendar audiencia</Menu.Item>
                </Link>
              </>
          </Sidebar>
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              basic
              textAlign='center'
              style={{ padding: '0em 0em', cursor: 'pointer' }}
              vertical
            >
              <Container>
                <Menu secondary size='mini'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Menu.Item as='a'>
                    <Image
                        size="tiny"
                        src="/logo-alpha.png"/>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
              </Container>
            </Segment>
            <div style={{ flex:1 }}>
              {children}
            </div>
          </Sidebar.Pusher>
        </Responsive>
        </div>
        )
    }
}
  
MobileNavbar.propTypes = {
    children: PropTypes.node,
}

export default MobileNavbar

  
  