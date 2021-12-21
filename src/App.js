import logo from './logo.svg';
import './App.css';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import styled from "styled-components"




function App() {
  return (
	  <div>
		  <Header>
			  <H1>Iselin Julegave</H1>
		  </Header>

		  <Background className="App">
			  <JigsawPuzzle imageSrc='https://www.maritimetours.no/wp-content/uploads/2020/02/Solstrand-2-e1582637464366.jpg'
							rows={2}
							columns={2}
							onSolved={() => alert('Yeeeeey!')}/>
		  </Background>
	  </div>

  );
}

export default App;

const Background = styled.div`
  border: 5px solid #3c57ff;
  margin: 1px;
  border-radius: 20px;
`
const H1 = styled.h1`
	font-family: "Comic Sans MS";
`
const Header = styled.div`
	display: flex;
  	justify-content: center;
`
