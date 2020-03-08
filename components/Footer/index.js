import Link from 'next/link'
import {Menu, Container, Image, Dropdown, Segment, Grid, Header, List} from 'semantic-ui-react'

class Footer extends React.Component {
    render(){
        return(
          <Segment basic raised vertical style={{margin:'0em 0em 0em'}}>
            <Container style={{ marginTop: '15px' }}>
              <Grid divided stackable>
                <Grid.Row>
                  <Grid.Column width={14} verticalAlign='middle'>
                    <Image src='/logo.jpeg'  size='small' style={{}}/>
                  </Grid.Column>

                  <Grid.Column width={2}>
                    <Header as='h4'>
                      Redes:
                    </Header>
                    <List link>
                      <List.Item target='_blank' href='' as='a'>
                          <List.Icon name='facebook f'/>
                          <List.Content>Facebook</List.Content>
                      </List.Item>
                      <Link href='/'>
                        <List.Item as='a'>
                          <List.Icon name='home'/>
                          <List.Content>Sobre</List.Content>
                        </List.Item>
                      </Link>
                      <Link href='/#contato'>
                        <List.Item as='a'>
                          <List.Icon name='mail' />
                          <List.Content>Fale Conosco!</List.Content>
                        </List.Item>
                      </Link>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Segment textAlign='center' basic style={{fontFamily:'Roboto Condensed'}}>
                tape. | Todos os direitos reservados.
              </Segment>
            </Container>
          </Segment>
        )
    }
}


export default Footer