const quotes = [
{
  author: 'Walt Disney',
  quote: 'The way to get started is to quit talking and begin doing' },

{
  author: 'Nelson Mandela',
  quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall' },

{
  author: 'Maya Angelou',
  quote: 'You will face many defeats in life, but never let yourself be defeated' },

{
  author: 'Bob Marley',
  quote: 'Love the life you live. Live the life you love' },

{
  author: 'Muhammad Ali',
  quote: 'Don’t count the days; make the days count' }];



class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '' };

    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    var random = Math.floor(Math.random() * quotes.length);
    var randomAuthor = quotes[random].author;
    var randomQuote = quotes[random].quote;

    this.setState({
      quote: randomQuote,
      author: randomAuthor });

  }

  componentDidMount() {
    this.newQuote();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("h1", { id: "text" }, "\"", this.state.quote, "\""), /*#__PURE__*/
      React.createElement("h4", { id: "author" }, "- ", this.state.author), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", type: "button", onClick: this.newQuote }, "New Quote"), /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "https://twitter.com/intent/tweet", target: "_blank" }, /*#__PURE__*/React.createElement("i", { class: "fab fa-twitter-square" }))));


  }}
;

ReactDOM.render( /*#__PURE__*/
React.createElement(RandomQuote, null),
document.getElementById('root'));