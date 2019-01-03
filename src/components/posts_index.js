import React, { Component } from 'react';
import  { connect } from 'react-redux';
import  { Link } from 'react-router-dom';

import  { fetchPosts } from '../actions';
import _ from 'lodash';


class PostsIndex extends Component
{
componentDidMount()
{
this.props.fetchPosts();
}

renderPosts()
{

return _.map(this.props.posts, post => {
return (
  <li key={post.id} className="list-group-item" >
  {post.title}
  </li>
);
});

}

render(){
  console.log(this.props.posts);
return(

<div>
<div className="text-xs-right">
<Link className="btn btn-primary" to="/posts/new">
Add A post
</Link>
</div>
<h3>Posts</h3>
<ul>
{this.renderPosts()}
</ul>
 </div>

);}

}

function mapStateToProps(state)
{
return {posts : state.posts}

}

//export default connect(null,{fetchPosts: fetchPosts})(PostsIndex);
export default connect(mapStateToProps,{fetchPosts})(PostsIndex);
