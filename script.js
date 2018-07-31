class Previewer extends React.Component{
  constructor(){
    super();
    this.state = {
      heading: "Here is a heading!",
      subheading: "Here is a subheading"
    };
  }
  
  render(){
    const {heading, subheading} = this.state;
    return (
      <div>
        <h2 class="headings">Editor</h2>
          <textarea id="editor" >{subheading}</textarea>
        <h2 class="headings">Previewer</h2>
        <div id="preview">
          <h1>{heading}</h1>
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
