//Dependencies
import React, { Component } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

//React components
import { Container, Segment, Card, Image, Icon, Button, Header } from 'semantic-ui-react'
import PageLayout from '../../../components/PageContainer'
import FeedHeader from '../../../components/FeedHeader'

//Redux Actions
import { setAudiencia } from '../../../actions/audienciaActions'

class MinhasAudiencias extends React.Component {

    render() {
        return (
            <PageLayout>
                <Segment basic style={{padding: '7em', backgroundColor:'#DB5461'}} />

                <Container style={{paddingTop: '2em', backgroundColor: 'white', paddingBottom: '1.5em', marginBottom:'5em', borderRadius: '5px', transform: 'translateY(-100px)' }}>
                        <Header as='h1'>Audiências futuras</Header>

                        <Card.Group stackable itemsPerRow={3}>

                            {this.props.audiencia.audiencias.map(audiencia => (
                                <>
                                {audiencia.entidade === 'Semace' && audiencia.status === 'futura' &&
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
                                            <Link href={{pathname:'/audiencias/minhas-audiencias/convite', query:{id: audiencia.id}}} >
                                                <Button primary fluid onClick={() => this.props.setAudiencia(audiencia.id)}>
                                                    Mais informações
                                                </Button>
                                            </Link>
                                        </Card.Content>
                                    </Card>
                                }
                                </>
                                ))
                            }
                            
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

export default connect(mapStateToProps,mapDispatchToProps)(MinhasAudiencias)
