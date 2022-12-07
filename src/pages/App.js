import logoGit from '../assets/github.png';
import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import {api} from '../services/api';

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState(''); 

  const handleSearchRepo = async () =>{
      const {data} = await api.get(`repos/${currentRepo}`);

      if(data.id){
        const isExist = repos.find(repo => repo.id === data.id)
        if(!isExist){
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return
        } 
      }
        alert('Repositório não encontrado ou já está na lista');
      
  }

  const handleRemoveRepo = (id) => {
      setCurrentRepo = '';
      setRepos = [];
  }


  return (
    <Container>
      <img src={logoGit} width={70} height={70} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
