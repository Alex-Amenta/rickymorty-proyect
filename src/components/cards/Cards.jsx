import Card from "../card/Card"

export default function Cards(props) {
   const cardsContainer = {
      display: "flex",
      flexwrap: "wrap",
      justifyContent: "space-evenly"
   }


   return (
      <div style={cardsContainer}>
         {props.characters.map((character) =>
         <Card 
         key={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin}
         image={character.image}
         />
         )}
      </div>
      )

}
