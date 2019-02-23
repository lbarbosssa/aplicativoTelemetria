import React, { Component } from "react";

import { Badge, Text } from "native-base";

export default class BadgeEvent extends Component {
  render() {
    return (
      <Badge>
        <Text>{this.props.value}</Text>
      </Badge>
    );
  }
}
