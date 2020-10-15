import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './Imagem/foto-perfil.jpg'
import fotoExperiencia1 from './Imagem/experiencia1.png'
import fotoExperiencia2 from './Imagem/experiencia2.png'
import email from './Imagem/email.jpg'
import localizacao from './Imagem/localizacao.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={perfil} 
          nome="Rodrigo" 
          descricao="Oi, eu sou o Rodrigo. Tenho 35 anos e sou de Uberlândia - Minas Gerais"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="container-email-endereco">
        <CardPequeno
          imagem={email}
          email="E-mail: rodrfx@gmail.com"
        />
        <br/>
        <CardPequeno
          imagem={localizacao}
          endereco= "Endereço: Rua Antônio Rezende de Chaves, 1016"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={fotoExperiencia1}
          nome="Labenrisus imperdietu" 
          descricao="Sed eu enim commodo risus imperdiet placerat." 
        />
        
        <CardGrande 
          imagem={fotoExperiencia2}
          nome="Aliquam rutrum" 
          descricao="Proin ex lectus, mollis ut nisl sed, sollicitudin tempus magna." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
