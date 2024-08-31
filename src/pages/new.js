import Form from '../components/Form'

const NewPet = () => {
  const petForm = {
    name: '',
    owner_name: '',
    species: '',
    age: 0,
    poddy_trained: false,
    diet: [],
    image_url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2022/03/24103516/Cavalier-King-Charles-Spaniel-puppies-sitting-together-on-the-couch.jpeg',
    likes: [],
    dislikes: [],
  }

  return <Form formId="add-pet-form" petForm={petForm} />
}

export default NewPet
