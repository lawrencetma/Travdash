import Telescope from 'meteor/nova:lib';
import React from 'react';
import {FormattedMessage } from 'react-intl';
import { ListContainer } from "meteor/utilities:react-list-container";
import { ModalTrigger } from "meteor/nova:core";
import Comments from "meteor/nova:comments";

const TripsCommentsThread = ({document}, {currentUser}) => {

  const trip = document;

  return (
    <div className="trips-comments-thread">
      <h4 className="trips-comments-thread-title"><FormattedMessage id="comments.comments"/></h4>
      <ListContainer
        collection={Comments}
        publication="comments.list"
        selector={{tripId: trip._id}}
        terms={{tripId: trip._id, view: "tripComments"}}
        limit={0}
        parentProperty="parentCommentId"
        joins={Comments.getJoins()}
        component={Telescope.components.CommentsList}
        listId="comments.list"
      />
      { currentUser ?
        <div className="trips-comments-thread-new">
          <h4><FormattedMessage id="comments.new"/></h4>
          <Telescope.components.CommentsNew type="comment" postId={trip._id} />
        </div> :
        <div>
          <ModalTrigger size="small" component={<a><FormattedMessage id="comments.please_log_in"/></a>}>
            <Telescope.components.UsersAccountForm/>
          </ModalTrigger>
        </div> }
    </div>
  )
};

TripsCommentsThread.displayName = "TripsCommentsThread";

TripsCommentsThread.contextTypes = {
  currentUser: React.PropTypes.object
};

module.exports = TripsCommentsThread;
export default TripsCommentsThread;
