import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"


const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  background-color: cadetblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledLink = styled(Link)`
  color: white;
  font-family: fantasy;
  font-size: xx-large;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLink to="/">
      {siteTitle}
    </StyledLink>
    <div>
      Fall 2024
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ""
}

export default Header
