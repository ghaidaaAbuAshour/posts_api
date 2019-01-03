import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';




class PostsNew extends Component
{

/*renderTitleField(field)
{
return(
<div className="form-group">
<label>Title</label>
<input className="form-control"
type="text"
{...field.input}
//onChange={field.input.onChange}
/>
</div>
);

}


renderTagsField(field)
{
return(
<div className="form-group">
<label>categories</label>
<input className="form-control"
type="text"
{...field.input}
//onChange={field.input.onChange}
/>
</div>
);

}*/

renderField(field)
{
  //const className=`form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
  const { meta: { touched, error }} = field;
  const className=`form-group ${touched && error ? 'has-danger' : ''}`;

return(
<div className={className}>
<label>{field.label}</label>
<input className="form-control"
type="text"
{...field.input}
//onChange={field.input.onChange}
/>
<div className="text-help">
{touched ? error : ''}
</div>
</div>
//show hint if touched or not {field.meta.touched ? field.meta.error : ''}

);

}

onSubmit(values)
{
  //this === component
  console.log(values);
  this.props.createPost(values, () =>
  {
    this.props.history.push('/');
  });

}

  render()
  {
const { handleSubmit }=this.props;

return(
<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
<Field
label="Title For Post"
name="title"
component={this.renderField}
/>

<Field
label="Categories"
name="categories"
component={this.renderField}
/>

<Field
label="Post Content"
name="content"
component={this.renderField}
/>

<button type="submit" className="btn btn-primary" >Submit </button>
<Link className="btn btn-danger" to="/">
Cancel
</Link>
</form>
);
  }

}

function validate(values)
{
//console.log(values);  {title:'', categories : '', content: ''}
const errors = {};

//validate the inputs form 'values'

/*if(values.title.length < 3)
{
  errors.title="title must be at least 3 characters!";
}
*/
if(!values.title)
{
  errors.title="Enter a title";
}

if(!values.categories)
{
  errors.categories="Enter some categories";
}

if(!values.content)
{
  errors.content="Enter some content please ";
}



//if errors is empty ,the form is fine to submit
//if errors has any properties , redux form assumes form is invalid
return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
connect(null,{ createPost })(PostsNew)
);
