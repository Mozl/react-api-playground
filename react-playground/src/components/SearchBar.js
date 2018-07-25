import React from 'react';
let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  componentDidMount() {
    let searchTerm = this.state.term;
    fetch(url+searchTerm)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            result: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })} />
        </div>

        <div>
          {this.state.term}
        </div>
      </div>
    );
  }
}

export default SearchBar;
