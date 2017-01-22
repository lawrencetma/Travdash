import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { intlShape } from 'react-intl';
import Users from 'meteor/nova:users';
import { Link } from 'react-router';

const UsersProfileSummary = ({user}, context) => {

  const lastTrip = user.went;
  const homeTown = user.from;
  const currCity = user.lives;

  return (

    <div className="card visible-md-block visible-lg-block mb-4">
      <div className="card-block">
        <h6 className="mb-3">{context.intl.formatMessage({id:"users.about"})}&nbsp;
          <small>·&nbsp;<Link to={Users.getEditUrl(user)}>{context.intl.formatMessage({id:"forms.edit"})}</Link></small>
        </h6>
        <ul className="list-unstyled list-spaced">

          { lastTrip ? <li><Telescope.components.Icon name="calendar" iconClass="text-muted mr-3"/>{context.intl.formatMessage({id:"users.went"})} {lastTrip}</li> : "" }

          { currCity ? <li><Telescope.components.Icon name="home" iconClass="text-muted mr-3"/></span>{context.intl.formatMessage({id:"users.lives"})} {currCity}</li> : "" }

          { homeTown ?  <li><Telescope.components.Icon name="location-pin" iconClass="text-muted mr-3"/></span>{context.intl.formatMessage({id:"users.from"})} {homeTown}</li> : "" }
        </ul>
      </div>
    </div>
  )
}

UsersProfileSummary.contextTypes = {
  user: React.PropTypes.object,
  intl: intlShape
};

UsersProfileSummary.displayName = "UsersProfileSummary";

module.exports = UsersProfileSummary;
