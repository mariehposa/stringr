import React, { Component } from "react";
import upArrow from '../img/up-arrow.svg';
import { StyledDiv, StyledImg } from "./styles";

export default class TopScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <StyledDiv className="scroll-to-top" onClick={() => this.scrollToTop()}>
        {is_visible && (
          <StyledImg src={upArrow} />
        )}
      </StyledDiv >
    );
  }
}
