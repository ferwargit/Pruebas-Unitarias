// Funcion de ayuda del componente ProfileCard
// Tengo que exportarla para tenerla disponible en otros archivos
// Recibe un texto y devuelve el mismo texto con la primera letra en mayuscula de cada palabra del texto
// export function titleCase(text) {

// }
export function titleCase(text) {

  // Si el texto es vacio, devuelvo el mismo texto
  if(text === '') return text;
  // 
  const arr = text.split(' ');
  // 
  const result = [];
  // Aqui recorro cada una de las palabras
  for(let elem of arr) {
    result.push(elem[0].toUpperCase() + elem.substring(1).toLowerCase());
  }
  return result.join(' ');
}


const ProfileCard = ({ name, surname, age, description }) => {
  return(
    <div></div>
  )
}

export default ProfileCard;