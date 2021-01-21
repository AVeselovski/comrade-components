import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { border, color, flexbox, layout, position, space, typography } from "styled-system";

const StyledCardHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space[3]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .card-title {
    margin: 0;
  }

  ${flexbox}
  ${layout}
  ${space}
`;

const CardHeader = ({ children, ...props }) => <StyledCardHeader {...props}>{children}</StyledCardHeader>;

CardHeader.propTypes = {
  children: propTypes.node.isRequired
};

const StyledCardBody = styled.div`
  padding: ${({ theme }) => theme.space[3]};

  ${flexbox}
  ${layout}
  ${space}
`;

const CardBody = ({ children, ...props }) => <StyledCardBody {...props}>{children}</StyledCardBody>;

CardBody.propTypes = {
  children: propTypes.node.isRequired
};

const StyledCardItem = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.space[2]};
  padding-top: ${({ theme }) => theme.space[2]};

  &:last-of-type {
    border-bottom: none;
  }

  ${flexbox}
  ${layout}
  ${space}
`;

const CardItem = ({ children, ...props }) => <StyledCardItem {...props}>{children}</StyledCardItem>;

CardItem.propTypes = {
  children: propTypes.node.isRequired
};

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;
  display: block;

  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

/**
 * This is `Card`, for Card stuff...
 *
 * Accepts **`border`**, **`color`**, **`flexbox`**, **`layout`**, **`position`**, **`space`** and
 * **`typography`** props from `styled-system`.
 *
 * Additionally `Card.Header`, `Card.Body` and `Card.Item` accept
 * **`flexbox`**, **`layout`** and **`space`** props from `styled-system` for easy
 * displaying and positioning of content.
 */
class Card extends React.Component {
  static Header = CardHeader;
  static Body = CardBody;
  static Item = CardItem;

  render() {
    const { children, ...props } = this.props;

    return (
      <StyledCard className="styled-box" {...props}>
        {children}
      </StyledCard>
    );
  }
}

Card.propTypes = {
  children: propTypes.node.isRequired
};

export default Card;
