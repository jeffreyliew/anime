import React, { Component } from "react";
import "../css/backToTop.css";

export default class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      timer: 0
    };
    this.onScrollHandler = this.onScrollHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollHandler);
  }

  onScrollHandler() {
    const yOffSet =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const { visible } = this.state;

    if (yOffSet > 410) {
      if (visible) {
        return;
      }
      this.setState({ visible: !visible });
    } else {
      if (!visible) {
        return;
      }
      this.setState({ visible: !visible });
    }
  }

  onClickHandler() {
    let scroll = 250;

    let timer = setInterval(() => {
      if (window.pageYOffset === 0) {
        clearInterval(this.state.timer);
      }
      window.scrollTo(0, window.pageYOffset - scroll);
    }, 13);
    this.setState({ timer: timer });
  }

  render() {
    return (
      <div
        className="backToTop"
        style={{ display: this.state.visible ? "block" : "none" }}
        onClick={this.onClickHandler}
      >
        <i className="fas fa-arrow-up fa-2x" />
      </div>
    );
  }
}
