//Dependecies
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import ataTemplate from '../../../util/ataTemplate'
var QRCode = require('qrcode.react');



//React components
import { Container, Grid, Segment, Header, Icon, Image, Button, Label, Modal, Form } from 'semantic-ui-react'
import PageContainer from '../../../components/PageContainer'

//Redux Actions
import { enviarAta } from '../../../actions/audienciaActions'


class Convite extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          ataReuniao: ''
        }
    }

    componentDidMount() {
        this.CKEditor = require('@ckeditor/ckeditor5-react')
        this.ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
    }

    static async getInitialProps({query}) {
        return { query }
    }

    handleEditorChange() {
		return ( event, editor ) => {
			this.setState( { ataReuniao: editor.getData() } );
			console.log( this.state );
		}
	}

    render() {
        return(
            <PageContainer>
                <Segment basic style={{padding: '7em', backgroundColor:'#45597D'}} />
                <Container style={{backgroundColor: 'white', paddingBottom: '1.5em', marginBottom:'5em', borderRadius: '5px', transform: 'translateY(-100px)' }}>
                    <Segment basic>
                        <Grid celled>
                            <Grid.Row columns={2}>
                                <Grid.Column width={11}>
                                    Pessoas na reuniao...
                                </Grid.Column>
                                <Grid.Column width={5} textAlign='center'>
                                    <QRCode value={`http://localhost:3000/audiencias/minhas-audiencias/acontecendo?id=${this.props.query.id}`} />
                                    <Header as='h3'>bit.ly/viaduto-coco</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header as='h1'>Ata da audiencia</Header>
                                    {this.CKEditor && 
                                        <CKEditor
                                            editor={ ClassicEditor }
                                            data={ataTemplate}
                                            onBlur={this.handleEditorChange()}
                                        />
                                    }
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                        
                        <Modal style={{transform:"translateY(-170px)", height:'30%'}} trigger={<Button fluid style={{ color: '#fff', backgroundColor:'#45597D'}}>Encerrar audiencia</Button>}>
                            <Modal.Header>Tem certeza que deseja encerrar audiencia?</Modal.Header>
                            <Modal.Content>
                            <Modal.Description>
                                <p>Ao encerrar a audiencia, as atas serão enviadas aos presentes via email.</p>
                                <Button fluid style={{backgroundColor:'#45597D', color:'#fff'}}>Confirmar interesse</Button>
                            </Modal.Description>
                            </Modal.Content>
                        </Modal>
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
    enviarAta: (ataReuniao) => dispatch(enviarAta(ataReuniao)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(Convite)
