import PropTypes from 'prop-types';
import React from 'react';

function Article(props) {
    return (
        <article
          id={props.id}
          className={`${props.article === props.id ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
        <h2 className="major">{props.title}</h2>
          {props.children}
          {props.close}
        </article>
    );
}

export default Article;