//Dependecies
import React, { Component } from 'react'
import axios from 'axios'
import CKEditor from 'ckeditor4-react';
import { connect } from 'react-redux'


//React components
import { Container, Grid, Segment, Header, Icon, Image, Button, Label, Modal, Form } from 'semantic-ui-react'
import PageContainer from '../../../components/PageContainer'

//Redux Actions
import { setInteressado } from '../../../actions/audienciaActions'



class Audiencia extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nome:'',
            email:'',
            telefone:''
        }
    }

    handleChange = (event) => {
        this.setState({ 
            [ event.target.name ] : event.target.value,
        }, () => {
            console.log(this.props.query)
        })
    }

    static async getInitialProps({query}) {
        return { query }
    }

    render() {
        const { nome, email, telefone} = this.state
        return(
            <PageContainer>
                <Segment basic style={{padding: '7em', backgroundColor:'#45597D'}} />
                <Container style={{backgroundColor: 'white', paddingBottom: '1.5em', marginBottom:'5em', borderRadius: '5px', transform: 'translateY(-100px)' }}>
                    <Segment basic>
                        <Grid columns={2}>
                            <Grid.Column>
                                <Header as='h1'>{this.props.audiencia.audiencia.titulo}</Header>
                                <Header as='h2'>Motivação</Header>
                                <p>
                                {this.props.audiencia.audiencia.motivacao}
                                </p>
                                <Header as='h2'>Objetivos</Header>
                                {this.props.audiencia.audiencia.objetivos.map(objetivo => (
                                    <p>{objetivo}</p>
                                ))}

                                <Header as='h2'>Pautas</Header>
                                {this.props.audiencia.audiencia.pautas.map(pauta => (
                                    <p>{pauta}</p>
                                ))}
                            </Grid.Column>
                            <Grid.Column width={6} floated='right'>
                                <Segment>
                                    <p>
                                        <Image size='mini' src={this.props.audiencia.audiencia.entidade_foto} style={{display:'inline', marginRight:'10px'}}/>
                                        <strong>{this.props.audiencia.audiencia.entidade}</strong>
                                    </p>
                                    <p>
                                        <Icon size='large' name='calendar'/>
                                        {this.props.audiencia.audiencia.data}
                                    </p>
                                    
                                    <p>
                                        <Label color='green'>{this.props.audiencia.audiencia.categoria}</Label>
                                    </p>

                                    <p>
                                        <Icon size='large' name='user' />
                                        {this.props.audiencia.audiencia.interessados.length} Pessoas interessadas
                                    </p>

                                    <p>
                                        <Icon size='large' name='map marker' />
                                        {this.props.audiencia.audiencia.local}
                                    </p>

                                    <iframe width="353" height="220" src="https://maps.google.com/maps?q=forum&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                                    <Modal style={{transform:"translateY(-170px)", height:'53%'}} trigger={<Button primary fluid style={{marginTop:'10px',backgroundColor:'#45597D', color:'#fff'}}>Tenho interesse!</Button>}>
                                        <Modal.Header>Entrar na lista de interessados na audiência</Modal.Header>
                                        <Modal.Content>
                                        <Modal.Description>
                                            <Form onSubmit={() => this.props.setInteressado({ audId: this.props.query.id, nome, email, telefone })}>
                                                <Form.Input label='Nome completo' name='nome' onChange={this.handleChange}/>
                                                <Form.Input label='Email' name='email' onChange={this.handleChange}/>
                                                <Form.Input label='Telefone' name='telefone' onChange={this.handleChange}/>
                                                <Button fluid style={{backgroundColor:'#45597D', color:'#fff'}}>Confirmar interesse</Button>
                                            </Form>
                                        </Modal.Description>
                                        </Modal.Content>
                                    </Modal>
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Container>
            </PageContainer>
        )
    }
}

const mapStateToProps = state => ({
  audiencia: state.audiencia
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    setInteressado: (pessoa) => dispatch(setInteressado(pessoa))
})

export default connect(mapStateToProps,null)(Audiencia)
