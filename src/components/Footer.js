import React, { PropTypes } from 'react'

const Footer = () => (
  <p>
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Done
    </FilterLink>
  </p>
)

export default Footer
