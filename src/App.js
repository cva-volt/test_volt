import React, {Component} from "react";
import UserSelect from "./components/userSelect";
import Comment from "./components/comment";
import ApiClient from "./apiClient";

import "./App.css";

const apiClient = new ApiClient();

class App extends Component {
  state = {
    posts: [],
    selectedPostId: "",
    comments: [],
  };

  componentWillMount() {
    apiClient.getPosts().then(posts => {
      this.setState({posts});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserSelect
            options={this.state.posts.map(p => p.id)}
            value={this.state.selectedPostId}
            onChange={this.handleChangePostId}
          />
          {this.state.comments.map(this.renderComment)}
        </header>
      </div>
    );
  }

  renderComment = comment => <Comment key={comment.id} comment={comment} />;

  handleChangePostId = e => {
    this.setState({selectedPostId: e.target.value}, this.getComments);
  };

  getComments = () => {
    if (this.state.selectedPostId) {
      apiClient.getComments(this.state.selectedPostId).then(comments => {
        this.setState({comments});
      });
    }
  };
}

export default App;
