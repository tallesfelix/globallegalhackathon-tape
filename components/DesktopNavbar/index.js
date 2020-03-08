import {Menu, Container, Image, Dropdown, Segment, Icon, Responsive, Visibility, Sidebar, Button} from 'semantic-ui-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

class DesktopNavbar extends Component {
    constructor(props){
        super(props);
        this.state = {
          activeItem: ''
        }
    }

    hideFixedMenu = () => this.setState({ fixed: false })

    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed, activeItem } = this.state

        return(
            <div style={{ display:"flex", flexDirection:"column", backgroundColor:'#EDEDED'}}>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                        <Menu borderless fixed='top' size='small' >
                            <Container>
                                <Menu.Item as='a' name='home' onClick={() => this.handleItemClick('home')}>
                                    <Image
                                    size="small"
                                    src="/logo.jpeg"/>
                                </Menu.Item>
                                <Menu.Menu position='right'>
                                    <Link href='/audiencias/feed'>
                                        <Menu.Item as ='a' header>
                                            Agenda
                                        </Menu.Item>
                                    </Link>
                                    {/* <Menu.Item as='a' header>
                                        Entrar
                                    </Menu.Item> */}
                                    <Dropdown trigger = {
                                        <span>
                                            <Image avatar src='/semace.jpg' /> <strong>Semace</strong>
                                        </span>
                                    } item simple className='link item'>
                                    <Dropdown.Menu>
                                        <Link href='/audiencias/minhas-audiencias/futuras'>
                                            <Dropdown.Item>Minhas audiencias</Dropdown.Item>
                                        </Link>
                                        <Link href='/audiencias/nova'>
                                            <Dropdown.Item>Agendar audiencia</Dropdown.Item>
                                        </Link>
                                        {/* <Dropdown.Item onClick={this.props.logout}>Sair</Dropdown.Item> */}
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Menu.Menu>
                                {/* <Menu.Menu position='right'>
                                    <Dropdown trigger = {
                                        <span>
                                        <Image avatar src='/image'/> Talles
                                        </span>
                                    } item simple className='link item'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Minha conta</Dropdown.Item>
                                        <Dropdown.Item>Editar dados</Dropdown.Item>
                                        <Dropdown.Item>Sair</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Menu.Menu> */}
                            </Container>
                        </Menu>
                    </Visibility>
                        <div style={{ flex:1 }}>
                            {children} 
                        </div>
                </Responsive>    
            </div>   
        )
    }
}

DesktopNavbar.propTypes = {
    children: PropTypes.node,
}

export default DesktopNavbar