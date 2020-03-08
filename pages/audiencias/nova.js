//Dependecies
import React, { Component } from 'react'
import axios from 'axios'
import CKEditor from 'ckeditor4-react';
import { categorias } from '../../util/categorias'
import MaskedInput from "react-text-mask"

//React components
import { Container, Button, Segment, Form, Header, Image, Label } from 'semantic-ui-react'
import PageContainer from '../../components/PageContainer'

//Redux Actions

let ago = (name) => `<p>Editor ${name} content</p>`

class NovaAudiencia extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            template: '',
        }
    }

    render() {
        return(
            <PageContainer>
                <Segment basic style={{padding: '7em', backgroundColor:'#45597D'}} />
                <Container style={{backgroundColor: 'white', paddingBottom: '1.5em', marginBottom:'5em', borderRadius: '5px', transform: 'translateY(-100px)' }}>
                    <Segment basic>
                        <Header as='h1'>Criar nova audiência pública</Header>
                        <Form>
                            <Form.Input label='Titulo'/>
                            <Form.Select label='Categoria' options={categorias}/>
                            <Form.Input label='Data' children={
                                    <MaskedInput
                                    name='data'
                                    mask={[ /[0-9]/, /\d/, '/', /\d/, /\d/, '/',/\d/, /\d/, /\d/, /\d/]}
                                    placeholder="DD/MM/AAAA"
                                />}
                            />
                            <Form.Input label='Local' />
                            <Form.Input label='Horário' children={
                                    <MaskedInput
                                    name='data'
                                    mask={[ /[0-9]/, /\d/, ':', /\d/, /\d/]}
                                    placeholder="HH:MM"
                                />} 
                            />
                            <Form.Input label='Objetivos' />
                            <Form.Input label='Pautas' />
                            <Form.Input label='Convidados' />

                            <Button fluid style={{ backgroundColor:'#45597D', color:'#fff' }}>Criar audiencia</Button>
                        </Form>
                    </Segment>
                </Container>
            </PageContainer>
        )
    }
}

export default NovaAudiencia


// Audiencia publica # - titulo
// categoria
// data
// local
// horario
// // objetivo(s)
// pautas
// convidados -> orgãos nao consta em ata automatica
// interessados nao consta em ata automaticamente





// participantes = [nome, cargo, empresa/entidade/orgão]