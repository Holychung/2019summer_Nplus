import React from 'react';
import axios from 'axios';

import ArticleBox from '../../Components/ArticleBox'
import SearchBar from '../../Components/SearchBar'

class SearchPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      dropdownTitle: '看板選擇',
      forumName: "game",
      articleList: []
    }
    this.onClickDropDown = this.onClickDropDown.bind(this)
    this.changeDropDownTitle = this.changeDropDownTitle.bind(this)
    this.changeForum = this.changeForum.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.changeArticle = this.changeArticle.bind(this)
  }
  onClickDropDown(title){
    this.changeDropDownTitle(title)
    this.changeForum(title)
  }
  changeDropDownTitle(title){
    this.setState({ dropdownTitle: title })
  }
  changeForum(forumName){
    if(forumName === '遊戲'){
      this.setState({ forumName: 'game' })
    }else if(forumName === '寵物'){
      this.setState({ forumName: 'pet' })
    }else if(forumName === '心情'){
      this.setState({ forumName: 'mood' })
    }
  }
  fetchData(userName){
    // let url = "https://www.dcard.tw/_api/posts?popular=false"
    let url = `https://api.github.com/users/${userName}/repos`
    axios.get(url)
    .then(response => this.changeArticle(response.data))
    .catch(err => console.log(err))
  }
  changeArticle(data){
    this.setState({ articleList: data})
  }
  render(){
    return(
      <div className="container">
        <div className="row justify-content-center">
          <div className="dropdown d-none">
            <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.dropdownTitle}
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" onClick={()=>this.onClickDropDown('遊戲')}>遊戲</a>
              <a className="dropdown-item" onClick={()=>this.onClickDropDown('寵物')}>寵物</a>
              <a className="dropdown-item" onClick={()=>this.onClickDropDown('心情')}>心情</a>
            </div>
          </div>

          <SearchBar onFetchData={this.fetchData}/>
          
        </div>
        <ArticleBox data={this.state.articleList} />
        
      </div>
    )
  }

}

export default SearchPage;