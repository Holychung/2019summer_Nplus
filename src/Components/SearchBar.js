import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchWord: ""
    }
    this.changeSearchWord = this.changeSearchWord.bind(this)
  }
  changeSearchWord(words){
    this.setState({ searchWord: words})
  }
  render(){
    return(
      <div>
        <div className="input-group mb-3">
          <input type="text" 
            className="form-control" 
            placeholder="Type github username" 
            aria-label="Recipient's username" 
            aria-describedby="button-addon2" 
            onChange={(e) => this.changeSearchWord(e.target.value)}
            />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" 
              type="button" 
              id="button-addon2"
              onClick={() => this.props.onFetchData(this.state.searchWord)}
              >Button</button>
          </div>
        </div>
      </div>
    )
  }

}


export default SearchBar;