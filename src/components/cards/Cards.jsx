import Card from "../card/Card"

export default function Cards(props) {
   const cardsContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
   }


   return (
      <div style={cardsContainer}>
         {props.characters.map((character) =>
         <Card 
         id={character.id}
         key={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin}
         image={character.image}
         onClose={props.onClose}
         />
         )}
      </div>
      )

}
