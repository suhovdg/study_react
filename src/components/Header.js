import React, { Component } from 'react';



import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

import Link from './Link'

const List =styled.ul`
  display: flex;
  justify-content: space-between;
  align-item
`

class Header extends React.Component {
	render(){
		return(
			<Row>
			  <Col lg={12} >
			    <nav>
			       <List>
                   <Link link='#' text=" Вызов мастера"/>
                   <Link link='#' text=" Прайс на ремонт"/>
                   <Link link='#' text=" Наши премимущнества"/>
                   <Link link='#' text=" Отзывы клиентов"/>
                   </List>
			    </nav>
			  </Col> 
			</Row>
			)
	}

}

export default Header