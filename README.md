ReactJS Github API 
===
- NCTU+ 2019 暑訓

![](https://i.imgur.com/chUmegf.png)
---
![](https://i.imgur.com/FjHG0PE.png)


- API intro + JSON format
https://medium.com/pyladies-taiwan/%E7%88%AC%E8%9F%B2-%E5%BE%9Edcard%E7%B6%B2%E7%AB%99%E7%9C%8B%E7%88%AC%E8%9F%B2%E5%85%A5%E9%96%80-ii-91e2357b82c6
- Restful API
https://ithelp.ithome.com.tw/articles/10157431

- yarn install 
https://yarnpkg.com/lang/zh-hant/docs/install/#mac-stable

- yarn create react-app your_app_name
cd your_app_name
yarn start

- yarn add react-router-dom
教學
http://www.ucamc.com/e-learning/javascript/278-%E7%B0%A1%E5%96%AE%E4%BB%8B%E7%B4%B9%E4%BA%86%E8%A7%A3react-router-4%E6%95%99%E5%AD%B8.html

### React Router
- import module
```javascript=
import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
```
```jsx=
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' component={ NavBar }/>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/search' component={ SearchPage }/>
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
```

### Bootstrap 4
https://getbootstrap.com/docs/4.1/getting-started/introduction/


```jsx=
class NavBar extends React.Component {
  render(){
    return(
      <div className="container p-3">
      	<div className="row justify-content-center">
	        <Link to='/' className="mx-3">Home</Link>
	        <Link to='/search'>Search</Link>
      	</div>
      </div>
    )
  }
}
```

// dropdown
```jsx=
<div className="dropdown">
  <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {this.state.dropdownTitle}
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" onClick={()=>this.onClickDropDown('遊戲')}>遊戲</a>
    <a className="dropdown-item" onClick={()=>this.onClickDropDown('寵物')}>寵物</a>
    <a className="dropdown-item" onClick={()=>this.onClickDropDown('心情')}>心情</a>
  </div>
</div>
```

- input 
```jsx=
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
```

### github api
https://developer.github.com/v3/repos/#list-user-repositories


### yarn add axios
axios GET 
https://github.com/axios/axios

let url = `https://api.github.com/users/${userName}/repos`

### Thanks!
