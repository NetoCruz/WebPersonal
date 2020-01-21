import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import '../assets/styles/components/Proyects.scss'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <Grid className="projects-grid-1">
          {/* Project 1 */}
          <Cell col={4}>
          <Card  shadow={5} style={{width: '320px', height: '300px', margin: 'auto'}}>
            
         

            <CardTitle shadow={0} className="proyect-1" style={{color: '#565264', height: '176px', }} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button href="https://github.com/NetoCruz/Climapp" target="_blank" rel="noopener noreferrer"  colored>GitHub</Button>
              <Button disabled colored>CodePen</Button>
              <Button href="https://netocruz.github.io/Climapp/" target="_blank" rel="noopener noreferrer" colored> Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
</Cell>
          {/* Project 2 */}
<Cell col={4}>
          <Card  shadow={5} style={{width: '320px', height: '300px', margin: 'auto'}}>
            <CardTitle className="proyect-2" style={{color: '#fff', height: '176px', }} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button  disabled  colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button href="https://platzis-netocruz.netlify.com/" target="_blank" rel="noopener noreferrer"  colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
</Cell>
<Cell col={4}>
          {/* Project 3 */}
          <Card  shadow={5} style={{width: '320px', height: '300px', margin: 'auto'}}>
            <CardTitle className="proyect-3"  style={{color: '#fff', height: '176px'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button  href="https://github.com/NetoCruz/Invie-Responsive" target="_blank" rel="noopener noreferrer" colored>GitHub</Button>
              <Button disabled colored>CodePen</Button>
              <Button  href="https://netocruz.github.io/Invie-Responsive/" target="_blank" rel="noopener noreferrer" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
          </Card>
        </Cell>
        </Grid>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <Grid className="projects-grid-1">
          {/* Project 1 */}
          <Cell col={4}>
          <Card  shadow={5} style={{width: '320px', height: '300px', margin: 'auto'}}>
            <CardTitle className="proyect-4" style={{color: '#fff', height: '176px', }} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button href="https://www.behance.net/gallery/73834399/Landing-Page-Design-to-LiBENK" target="_blank" rel="noopener noreferrer"  colored>Behance</Button>
              <Button disabled colored>CodePen</Button>
 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
</Cell>
          {/* Project 2 */}
<Cell col={4}>
          <Card  shadow={5} style={{width: '320px', height: '300px', margin: 'auto'}}>
            <CardTitle className="proyect-5" style={{color: '#fff', height: '176px', }} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button href=" https://www.behance.net/gallery/72602225/Landing-Page-Design" target="_blank" rel="noopener noreferrer"   colored>Behance</Button>
              <Button disabled colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
</Cell>
<Cell col={4}>
          {/* Project 3 */}
          <Card  shadow={5} style={{width: '320px', height: '300px', margin: 'auto'}}>
            <CardTitle className="proyect-6"  style={{color: '#fff', height: '176px'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button  href="https://www.instagram.com/p/BxIwFyIhKNA/" target="_blank" rel="noopener noreferrer" colored>Behance</Button>
              <Button disabled colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
          </Card>
        </Cell>
        </Grid>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <h3 className="text-center">Mis Proyectos</h3>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>FrontEnd</Tab>
          <Tab>Ui</Tab>
          <Tab>Diseño Gráfico</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;