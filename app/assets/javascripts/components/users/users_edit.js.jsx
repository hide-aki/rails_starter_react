var UsersEdit = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    canDelete: React.PropTypes.bool
  },

  render: function() {
    // Form is uncontrolled component
    return (
      <div className="container">
        <div className="page-header">
            <a className="btn btn-default" href="/users">
                <span className="glyphicon glyphicon-list-alt">
                </span>
                {' '}Back
            </a>
            <a className="btn btn-primary" href={this.props.user.showPath}>
                <span className="glyphicon glyphicon-info-sign">
                </span>
                {' '}Show
            </a>
            { this.props.canDelete &&
              <a data-confirm="Are you sure?" className='btn btn-danger' rel="nofollow" data-method="delete" href={this.props.user.showPath}> 
                <span className="glyphicon glyphicon-trash"></span>
                {' '}Delete
              </a>
            }
            <h1>
                Editing User
            </h1>
        </div>

        <FormErrors errors={this.props.user.errors} />
        
        <form acceptCharset="UTF-8" action={this.props.user.showPath} className="form-horizontal" id={"edit_user_"+this.props.user.id} method="post" role="form">
            <input name="authenticity_token" type="hidden" value={this.props.authenticityToken}/>
            <input name="utf8" type="hidden" value="✓"/>
            <input name="_method" type="hidden" value="patch"/>
            <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="user_name">
                    Name
                </label>
                <div className="col-sm-10">
                    <input className="form-control" id="user_name" name="user[name]" type="text" defaultValue={this.props.user.name}>
                    </input>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="user_email">
                    Email
                </label>
                <div className="col-sm-10">
                    <input className="form-control" id="user_email" name="user[email]" type="email" defaultValue={this.props.user.email}>
                    </input>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="user_role">
                    Role
                </label>
                <div className="col-sm-10">
                    <select className="form-control" id="user_role" name="user[role]" defaultValue={this.props.user.role.toLowerCase()}>
                        <option value="user">User</option>
                        <option value="manager">Manager</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <input className="btn btn-primary" data-disable-with="Update User" name="commit" type="submit" value="Update User"/>
                </div>
            </div>
        </form>
    </div>
    );
  }
});
