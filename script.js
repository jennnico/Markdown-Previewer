class Previewer extends React.Component{
  constructor(){
    super();
    this.state = {
        heading: "Here is a heading!",
        subheading: "Here is a subheading"
        
    };
  }
  
  changeHeading(heading){
    this.setState({ heading: heading});
  }
  
  handleChange(e){
    const heading = e.target.value;
    this.props.changeHeading(heading);
  }
  
  render(){
    const {subheading} = this.state;
    return (
      <div>
        <h2 class="headings">Editor</h2>
          <textarea id="editor" onChange={(event) => this.changeHeading(event.target.value)}></textarea>
        <h2 class="headings">Previewer</h2>
        <div id="preview">
          <h1>{this.state.heading}</h1>
          <h2>{subheading}</h2>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <Previewer></Previewer>
  </div>, document.getElementById('root'))
