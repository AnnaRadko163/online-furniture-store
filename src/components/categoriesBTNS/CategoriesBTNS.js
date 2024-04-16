import "./categoriesBTNS.sass"


export default function CategoriesBTNS(props) {
    const categories = [
        {
            key:"All",
            name:"Все"},
        {
            key:"Chairs",
            name:"Стулья"},
        {
            key:"Lamps",
            name:"Лампы"},
        {
            key:"Shelves",
            name:"Полки"},
        {
            key:"Sofas",
            name:"Диваны"},
        {
            key:"Tables",
            name:"Столы"},
    ]

  return (
    <div className='filter-btns'>
        {categories.map(e => (
            <div key={e.key}> <button  onClick={() => props.chooseCategory(e.key, e.name)} >{e.name}</button></div>
        ))}
        
    </div>
  )
}
