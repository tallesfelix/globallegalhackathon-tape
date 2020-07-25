//Dependencies
import React, { Component } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

//React components
import { Container, Segment, Grid, Button, Icon, List, Header } from 'semantic-ui-react'
import PageLayout from '../../../components/PageContainer'

//Redux Actions

class Relatorio extends React.Component {
    static async getInitialProps({query}) {
        return { query }
    }

    render() {
        return (
            <PageLayout>
                <Segment basic style={{padding: '7em', backgroundColor:'#DB5461'}} />
                <Container style={{paddingTop: '2em', backgroundColor: 'white', paddingBottom: '1.5em', marginBottom:'5em', borderRadius: '5px', transform: 'translateY(-100px)' }}>
                    <Header as='h1'>Relatório {this.props.audiencia.audiencia.titulo}</Header>
                    <Grid celled>
                            <Grid.Row columns={2}>
                                <Grid.Column width={11}>
                                    <Header>Participantes:</Header>
                                    <List bulleted>
                                        <List.Item>IBAMA</List.Item>
                                        <List.Item>Ceuma</List.Item>
                                        <List.Item>Aêgla Benevides</List.Item>
                                        <List.Item>Jones Oliveira</List.Item>
                                        <List.Item>Camila Lobo</List.Item>
                                        <List.Item>Talles Felix Gomes</List.Item>
                                        <List.Item>Thais Lima</List.Item>
                                        <List.Item>Wilmar Filho</List.Item>
                                        <List.Item>Rebecca Albuquerque</List.Item>
                                        <List.Item>Pablo Filgueiras</List.Item>
                                    </List>

                                </Grid.Column>
                                <Grid.Column width={5} textAlign='center'>
                                    <Icon name='file pdf outline' size='huge'/>
                                    <Button fluid style={{backgroundColor:'#45597D', color:'#fff', marginTop:'15px'}}>Visualizar ata</Button>
                                    <Icon name='file powerpoint outline' size='huge'style={{marginTop:'15px'}}/>
                                    <Button fluid style={{backgroundColor:'#45597D', color:'#fff', marginTop:'15px'}}>Visualizar slides</Button>                                    
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                </Container>
            </PageLayout>
        )
    }
}

const mapStateToProps = store => ({
  audiencia: store.audiencia
});


export default connect(mapStateToProps,null)(Relatorio)
