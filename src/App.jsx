import './App.css'
import image_omelette from './assets/images/image-omelette.jpeg'

function App() {

  return (
    <>
      <div className='w-screen h-screen bg-stone-100-site flex flex-col justify-center items-center'>

        <div className='bg-branco-site w-[38rem] h-[33rem] rounded-xl'>
          
          <div className='p-4'>
            <img src={image_omelette} alt="" />
          </div>
          
          <section>

          </section>

        </div>

      </div>
    </>
  )
}

export default App
