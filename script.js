//https://stackoverflow.com/questions/34686523/using-marked-in-react/34688574


class Previewer extends React.Component{

   constructor(props){
    super(props);
    this.state = {
      text:
       "# Preview Markdown here! \n\
## You can include different text features, like... \n\
\n\**Bold**, _Italicized_, and ~~Crossed-out~~ text!\n\
\n\You can add a link: [link](https://www.freecodecamp.com)\n\
\n\> Or a Block Quote! \n\
\n\- You can even include a list.\n\- Neat, huh?\n\
\n\## You can include code, too! \n\
\n\You can write INLINE code: `<h1>Hello World!</h1>` \n\n\
\n\```\n\
 // And MULTI-LINE code: \n\
function count{ \n\
  for(var i=0, i<=5; i++){ \n\
    console.log(i);\n\
  }\n\
}\n\
```\n\n\
![Happy camper](http://justsomething.co/wp-content/uploads/2015/06/happy-animals-32.jpg)"
    }
  }
  
  //Change state as you type. Ensures that Previewer matches Editor.
  changeText(text){
    this.setState({ text: text});
  }
  
  //Turn raw text into Markdown
  getMarkdownText(md) {
       var rawMarkup = marked(md, {sanitize: true});
       return { __html: rawMarkup }
  }
  
  render() {
    return (
      <div>
        <h1 class = "headings">Editor</h1>
        <textarea id="editor" onChange={(event) => this.changeText(event.target.value)}>{this.state.text}</textarea>
        <h1 class = "headings">Previewer</h1>
        <div  dangerouslySetInnerHTML={this.getMarkdownText(this.state.text)} id="preview"></div>
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <Previewer></Previewer>
  </div>, document.getElementById('root'))
