import { Grid } from '@mui/material'
import CardNews from '../News/CardNews'

const data = [{ id: 1, title: 'Title 1', description: 'this is new content' }]

const NewsTL = () => {
  return (
    <div>
      <h1 className='text-2xl text-blue-900 md:text-3xl text-center font-semibold uppercase mt-10'>
        Tin tức liên quan
      </h1>
      <Grid container>
        <Grid></Grid>
      </Grid>
    </div>
  )
}

export default NewsTL
