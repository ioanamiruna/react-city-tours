import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () =>
    this.setState({
      showInfo: !this.state.showInfo,
    });

  render() {
    const { id, city, img, name, info } = this.props.tour;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img}></img>
          <span className="close-btn">
            <div className="fa fa-window-close"></div>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <i className="fa fa-caret-square-o-down"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
