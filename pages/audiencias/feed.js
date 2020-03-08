//Dependencies
import React, { Component } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

//React components
import { Container, Segment, Card, Image, Icon, Button } from 'semantic-ui-react'
import PageLayout from '../../components/PageContainer'
import FeedHeader from '../../components/FeedHeader'

//Redux Actions
import { setAudiencia } from '../../actions/audienciaActions'

class Feed extends React.Component {

    render() {
        return (
            <PageLayout>
                <FeedHeader />
                <Container style={{paddingTop: '2em', backgroundColor: 'white', paddingBottom: '1.5em', marginBottom:'5em', borderRadius: '5px' }}>
                        
                        <Card.Group stackable itemsPerRow={3}>

                            {this.props.audiencia.audiencias.map(audiencia => (
                                <Card>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='tiny'
                                            src={audiencia.entidade_foto}
                                            alt='logo do orgão'                                
                                        />
                                        <Card.Header as='h2'>{audiencia.titulo}</Card.Header>
                                        <Card.Meta>Entidade: {audiencia.entidade}</Card.Meta>
                                        <Card.Description>
                                            <p>
                                                {audiencia.objetivos.map(objetivo => (
                                                    <p>{objetivo}</p>
                                                ))}
                                            </p>
                                            <p>
                                                <Icon name='calendar check' />
                                                Data da audiência: <strong>{audiencia.data}</strong>
                                            </p>
                                            <p>
                                                <Icon name='clock outline' />
                                                Horário: {audiencia.horario}
                                            </p>
                                            <p>
                                                <Icon name='map pin' />
                                                Endereço: {audiencia.local}
                                            </p>
                                            <Icon name='user' />
                                            {audiencia.interessados.length} Pessoas interessadas
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Link href={{pathname:'/audiencias/feed/audiencia', query:{id: audiencia.id}}} >
                                            <Button primary fluid onClick={() => this.props.setAudiencia(audiencia.id)}>
                                                Mais informações
                                            </Button>
                                        </Link>
                                    </Card.Content>
                                </Card>
                            ))
                            
                            }
                            
                            <Card>
                                <Card.Content>
                                    <Image
                                    floated='right'
                                    size='tiny'
                                    src='/semace.jpg'
                                    alt='logo do orgão'                                
                                    />
                                    <Card.Header as='h2'>Titulo da audiencia</Card.Header>
                                    <Card.Meta>Entidade: Semace</Card.Meta>
                                    <Card.Description>
                                        <p>
                                            Loren inpsum lore lorenne audianciaaa sasas
                                            asajsjs asjsjajaja sjsjsjsjs
                                        </p>
                                        <p>
                                            <Icon name='calendar check' />
                                            Data da audiência: <strong>02/05/2020</strong>
                                        </p>
                                        <p>
                                            <Icon name='clock outline' />
                                            Horário: 08:30
                                        </p>
                                        <p>
                                            <Icon name='map pin' />
                                            Endereço: Alameda dos anjos, 492
                                        </p>
                                        <Icon name='user' />
                                        42 Pessoas interessadas
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Link href='/audiencias/feed/audiencia'>
                                        <Button primary fluid>
                                            Mais informações
                                        </Button>
                                    </Link>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Card.Content>
                                    <Image
                                    floated='right'
                                    size='tiny'
                                    src='/ufc.png'
                                    alt='logo do orgão'                                
                                    />
                                    <Card.Header as='h2'>Titulo da audiencia</Card.Header>
                                    <Card.Meta>Entidade: Universidade Federal do Ceará</Card.Meta>
                                    <Card.Description>
                                        <p>
                                            Loren inpsum lore lorenne audianciaaa sasas
                                            asajsjs asjsjajaja sjsjsjsjs
                                        </p>
                                        <p>
                                            <Icon name='calendar check' />
                                            Data da audiência: <strong>02/05/2020</strong>
                                        </p>
                                        <p>
                                            <Icon name='clock outline' />
                                            Horário: 08:30
                                        </p>
                                        <p>
                                            <Icon name='map pin' />
                                            Endereço: Alameda dos anjos, 492
                                        </p>
                                        <Icon name='user' />
                                        42 Pessoas interessadas
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Button primary fluid>
                                        Mais informações
                                    </Button>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Card.Content>
                                    <Image
                                    floated='right'
                                    size='tiny'
                                    src='/ibama.png'
                                    alt='logo do orgão'                                
                                    />
                                    <Card.Header as='h2'>Titulo da audiencia</Card.Header>
                                    <Card.Meta>Entidade: Ibama</Card.Meta>
                                    <Card.Description>
                                            <p>
                                                Loren inpsum lore lorenne audianciaaa sasas
                                                asajsjs asjsjajaja sjsjsjsjs
                                            </p>
                                            <p>
                                                <Icon name='calendar check' />
                                                Data da audiência: <strong>02/05/2020</strong>
                                            </p>
                                            <p>
                                                <Icon name='clock outline' />
                                                Horário: 08:30
                                            </p>
                                            <p>
                                                <Icon name='map pin' />
                                                Endereço: Alameda dos anjos, 492
                                            </p>
                                            <Icon name='user' />
                                            42 Pessoas interessadas
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Button primary fluid>
                                        Mais informações
                                    </Button>
                                </Card.Content>
                            </Card>

                        </Card.Group>
                </Container>
            </PageLayout>
        )
    }
}

const mapStateToProps = store => ({
  audiencia: store.audiencia
});

const mapDispatchToProps = dispatch => ({
    setAudiencia: (id) => dispatch(setAudiencia(id)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(Feed)
