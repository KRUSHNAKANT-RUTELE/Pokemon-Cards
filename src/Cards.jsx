
export default function Cards({pic,name,info}) {
  return (
    <div className="Cards">
        <img className='PokCards' src={pic} alt='Pokemon img'/>
        <h1>{name}</h1>
        <p>{info}</p>
    </div>
  )
}
