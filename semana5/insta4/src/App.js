import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import foto1 from './img/foto1.jpeg'
import foto2 from './img/foto2.jpg'
import fotopost1 from './img/fotopost1.jpeg'
import fotopost2 from './img/fotopost2.jpeg'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={foto1}
          fotoPost={fotopost1}
        />

        <Post
          nomeUsuario={'João'}
          fotoUsuario={foto2}
          fotoPost={fotopost2}
        />
      </div>
    );
  }
}

export default App;
