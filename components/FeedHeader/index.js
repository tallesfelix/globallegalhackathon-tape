//Dependencies
import React, { Component } from 'react'

//React components
import { Segment, Grid, Header } from 'semantic-ui-react'
import PageContainer from '../PageContainer'

//Redux actions

class FeedHeader extends React.Component {
    render() {
        return (
            <Segment basic style={{padding: '7em', marginTop: '30px', backgroundImage:'url(/audiencias.jpg)', backgroundAttachment: 'fixed',backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h3' style={{ fontSize: '3em', color:'#FFFF', marginTop:'25px' }}>
                                Encontre as próximas <br/> audiências públicas
                            </Header>
                            <p style={{ fontSize: '1.7em', color:'#FFFF' }}>
                                Encontre por audiencias publicas, histórico de atas e participe da lei!
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default FeedHeader