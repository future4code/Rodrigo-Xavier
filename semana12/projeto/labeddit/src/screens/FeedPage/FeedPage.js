import React from 'react';
import { useHistory } from 'react-router-dom';
import  useProtectPage  from '../../hooks/useProtectPage'
import { useRequestData } from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/apiConstants'
import CardPost from '../../components/CardPost/CardPost'
import { useForm } from '../../hooks/useForm'
import { createPost } from '../../services/user';
import * as S from './styled'

function FeedPage() {
  const history = useHistory();
  useProtectPage()
  const { form, onChange } = useForm({ text: "", title: "" });
  const changeInput = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };
  const formSend = (event) => {
    event.preventDefault();
    createPost(form, history);
  };
  const data = useRequestData(`${BASE_URL}/posts`)

  return (
    <S.FeedContainer>
      <div>
        <div>
          <form onSubmit={formSend}>
            <div>Nome</div>
            <input name="title" value={form.title} onChange={changeInput} />
            <div>Escreva seu Post</div>
            <textarea
              type="text"
              name="text"
              value={form.text}
              onChange={changeInput}
            />
            <button type='submit'>Postar</button>
          </form>
        </div>
        <div>
        </div>
        {data && data.posts.map((posts => {
          return <CardPost
            key={posts.id}
            id={posts.id}
            username={posts.username}
            title={posts.title}
            text={posts.text}
            commentsCount={posts.commentsCount}
            votesCount={posts.votesCount}
          />
        }))}
      </div>
    </S.FeedContainer>
  )
}
export default FeedPage;