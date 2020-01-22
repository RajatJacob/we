import React from 'react';
import './style.scss';
import Container from '../Container';

export default class Card extends React.Component {
    render() {
        return (
            <Container>
                <div className="Card">
                    {
                        this.props.noContainer
                        ? this.props.children
                        :
                        (
                            <Container>
                                { this.props.children }
                            </Container>
                        )
                    }
                </div>
            </Container>
        )
    }
}