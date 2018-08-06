//https://stackoverflow.com/questions/34686523/using-marked-in-react/34688574
/*I originally stored the texts in an array, inside of this.state.
I then mapped over that array in the return statement (for #editor and #preview)
This gave me multiple text areas, one for each item in the array.
I only want one text area, so I combined all the items of the array into one.
*/

//First attempt
class Previewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      item1: "This is a Heading.",
      item2: "This is a subheading."
    }
  }
  
  //Change h1 in the previewer using the editor
  changeHeading(heading){
    this.setState({ heading: heading});
  }

  //look again at textarea
  render(){
    const {subheading} = this.state;
    return (
      <div>
        <h2 class="headings">Editor</h2>
           <br/>
        <Editor />
        <textarea><Editor /></textarea>
          <textarea id="editor" onChange={(event) => this.changeHeading(event.target.value)} >{this.state.heading}</textarea>

         {this.state.arr.map(x => <textarea>{Object.values(x)}</textarea>)}
        <h2 class="headings">Previewer</h2>
        <div id="preview">
          <h1>{this.state.heading}</h1>
          <h2>{subheading}</h2>
        </div>
      </div>
    )
  }
}
/////////////

class MarkdownExample extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      //new array with only ONE value, a string
      arr:[
       "# Here is a heading \n \
 ## Here is a subheading \n \
 Here is a link: [link](https://www.freecodecamp.com) \n \
\n \Heres some code, `<div></div>`, between 2 backticks. \n \
\n \ ```// this is multi-line code: function anotherExample(firstLine, lastLine) \n \
        \n \{if (firstLine == '```' && lastLine == '```') \n \
\n \{return multiLineCode;}}``` \n \
\n \- And of course there are lists.- Some are bulleted.- With different indentation levels.- That look like this. \n \
\n \ Here is a > Block Quote! \n \
\n \You can also make text **bold**... whoa!"
    ]
    }
  }
  
  //function to create Markdown text
  getMarkdownText(md) {
       var rawMarkup = marked(md, {sanitize: true});
       return { __html: rawMarkup }
  }
  
  render() {
    return (
      <div>
        <h1 class = "headings">Editor</h1>
        <textarea id="editor">{this.state.arr}</textarea> {/* Used .map here, but it made multiple textareas. */}
        <h1 class = "headings">Previewer</h1>
        <div  dangerouslySetInnerHTML={this.getMarkdownText(this.state.arr[0])} id="preview"></div> {/* Used .map here, too. No longer necessary */}
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <MarkdownExample></MarkdownExample>
  </div>, document.getElementById('root'))





 
