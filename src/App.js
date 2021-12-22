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
							rows={3}
							columns={4}
							onSolved={() => alert('Gratulerer med vel gjennomført pusling! Nå må du holde av helgen 5-6 mars, fordi din julegave er en minihelg på Solstrand Hotel & Bad, med kveldens 3 retters.')}/>
		  </Background>
	  </div>

  );
}

export default App;

const Background = styled.div`
  border: 5px solid;
  margin: 1px;
  border-image:
		  linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red) 1;
`
const H1 = styled.h1`
	font-family: "Comic Sans MS";
  background: -webkit-linear-gradient(violet, indigo, blue, green, yellow, orange, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Header = styled.div`
	display: flex;
  	justify-content: center;
`
