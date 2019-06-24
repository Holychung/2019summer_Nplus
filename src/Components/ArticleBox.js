import React from 'react';

import ArticleItem from './ArticleItem'

class ArticleBox extends React.Component {
  render(){
    return(
      <div>
        {
          this.props.data.length === 0 ? 
            <div className="text-muted text-center">empty</div>
          : <div className="text-center">
              {
                this.props.data.map((article) => 
                  <div key={article.id}>
                    <ArticleItem data={article} />
                  </div>
                )
              }
            </div>   
        }
      </div>
    )
  }

}


export default ArticleBox;