import React from 'react';

class ArticleItem extends React.Component {
  render(){
    return(
      <div>
        {this.props.data.name}
      </div>
    )
  }

}


export default ArticleItem;