export default function RecipeCard({ showFood }) {
  const data = showFood
  console.log(data)
  return (
    <>
      {showFood.map((data) => {
        return (
          <ul key={data._id}>
            <li>{data.name}</li>
            <li>{data.ingredients}</li>
            <li>{data.recipe}</li>
          </ul>
        )
      })}
    </>
  )
}
