import React from 'react';
import useProtectPage from '../../hooks/useProtectPage';
import { PostContainer } from './styled'

function PostPage() {
  useProtectPage()
  return (
    <PostContainer>
      PostPage
    </PostContainer>
  )
}

export default PostPage;