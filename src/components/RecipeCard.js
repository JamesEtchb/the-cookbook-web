import Card from 'react-bootstrap/Card'

export default function RecipeCard({ showFood }) {
  const data = showFood
  console.log(data)
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
      {showFood.map((data) => {
        return (
            <Card
              style={{ width: '30%', margin: '20px' }} key={data._id}>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle>{data.ingredients}</Card.Subtitle>
                <Card.Text>{data.recipe}</Card.Text>
              </Card.Body>
            </Card>
        )
      })}
    </div>
  )
}
