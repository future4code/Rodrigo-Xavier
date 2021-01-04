import React from 'react';
import like from '../../assets/like.svg'
import nolike from '../../assets/nolike.svg'
import { useHistory } from 'react-router-dom';
import { goToPostPage } from '../../routes/coordinator';
import * as S from './styled';

export default function CardPost(props) {
    const history = useHistory();
    return (
        <S.ContainerCardPost>
            <h4>{props.username}</h4>
            <p>{props.text}</p>
            <img src={nolike} alt='nao gostei' />  {props.votesCount} <img src={like} alt='gostei' />
            {props.commentsCount}
            <button onClick={() => goToPostPage(history)} > comentario</button>
        </S.ContainerCardPost>
    )
}