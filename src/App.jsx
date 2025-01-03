import './App.css'
import image_omelette from './assets/images/image-omelette.jpeg'

function App() {

  return (
    <>
      <div className='h-fit bg-stone-100-site flex justify-center items-center py-24 max-md:p-0'>

        <div className='bg-branco-site w-[45rem] rounded-xl'>
          
          <div className='pt-8 px-8 max-md:p-0'>
            <img src={image_omelette} alt="" className='rounded-xl max-md:rounded-none'/>
          </div>
          
          <section className='p-8 max-md:p-7'>

            <div className='space-y-3'>
              <h1 className='font-font-young text-[2.2rem]'>Simple Omelette Recipe</h1>

              <p className='text-stone-900-site text-[16px] max-md:whitespace-break-spaces'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            </div>

            <div className='bg-rose-50-site p-5 rounded-xl my-6 space-y-3'>
              <h2 className='text-rose-800-site font-semibold font-font-outfit text-xl'>Preparation time</h2>
              
              <ul className='space-y-3 ml-2 px-5'>
                <li className='marker:text-rose-800-site pl-4'>
                  <b>Total:</b> <label className='text-stone-600-site'> Approximately 10 minutes </label>
                </li>

                <li className='marker:text-rose-800-site pl-4'>
                  <b>Preparation:</b> <label className='text-stone-600-site'> 5 minutes </label>
                </li>

                <li className='marker:text-rose-800-site pl-4'>
                  <b>Cooking:</b> <label className='text-stone-600-site'> 5 minutes </label>
                </li>
              </ul>

            </div>

            <div className='border-b-[1px] pb-8 space-y-4'>
              <h2 className='text-marrom-800-site text-[1.7rem] font-font-young'>Ingredients</h2>

              <ul className='space-y-3 text-stone-600-site ml-2 px-5'>
                <li className='marker:text-marrom-800-site pl-4'>
                  <p>2-3 large eggs</p>
                </li>

                <li className='marker:text-marrom-800-site pl-4'>
                  <p>Salt, to taste</p>
                </li>

                <li className='marker:text-marrom-800-site pl-4'>
                  <p>Pepper, to taste</p>
                </li>

                <li className='marker:text-marrom-800-site pl-4'>
                  <p>1 tablespoon of butter or oil</p>
                </li>

                <li className='marker:text-marrom-800-site pl-4'>
                  <p>Optional fillings:cheese, diced vegetables, cooked meats, herbs</p>
                </li>
              </ul>
            </div>

            <div className='py-8 border-b-[1px] break-words space-y-4'>
              <h2 className='text-marrom-800-site text-[1.7rem] font-font-young'>Instructions</h2>

              <ol className='space-y-3 text-stone-900-site ml-2 px-5 text-[16px] max-md:whitespace-break-spaces'>
                <li className='marker:text-marrom-800-site marker:font-bold pl-4'>
                  <b> Beat the eggs: </b> <label> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
                  You can add a tablespoon of water or milk for a fluffier texture. </label>
                </li>

                <li className='marker:text-marrom-800-site marker:font-bold pl-4'>
                  <b> Heat the pan: </b> <label>Place a non-stick frying pan over medium heat and add butter or oil.</label>
                </li>

                <li className='marker:text-marrom-800-site marker:font-bold pl-4'>
                  <b> Cook the omelette: </b> <label> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
                  the eggs evenly coat the surface. </label>
                </li>

                <li className='marker:text-marrom-800-site marker:font-bold pl-4'>
                  <b> Add fillings (optional): </b> <label> When the eggs begin to set at the edges but are still slightly runny in the 
                  middle, sprinkle your chosen fillings over one half of the omelette. </label>
                </li>

                <li className='marker:text-marrom-800-site marker:font-bold pl-4'>
                  <b> Fold and serve: </b> <label> As the omelette continues to cook, carefully lift one edge and fold it over the 
                  fillings. Let it cook for another minute, then slide it onto a plate. </label>
                </li>

                <li className='marker:text-marrom-800-site marker:font-bold pl-4'>
                  <b> Enjoy: </b> <label> Serve hot, with additional salt and pepper if needed. </label>
                </li>
              </ol>
            </div>

            <div className='text-stone-900-site py-6 space-y-4'>
              <h2 className='text-marrom-800-site text-[1.7rem] font-font-young'> Nutrition </h2>

              <p className='text-stone-900-site text-[16px]'>
                The table below shows nutritional values per serving without the additional fillings.
              </p>

              <ul className='ml-2'>
                <li className='grid grid-cols-2 justify-evenly pb-2 pt-2 border-b-[1px]'>
                <label className='text-stone-900-site pl-6'>Calories</label>
                <label className='text-marrom-800-site font-bold'>277kcal</label>
                </li>
                
                <li className='grid grid-cols-2 justify-evenly pb-2 pt-2 border-b-[1px]'>
                <label className='text-stone-900-site pl-6'>Carbs</label>
                <label className='text-marrom-800-site font-bold'>0g</label>
                </li>
                
                <li className='grid grid-cols-2 justify-evenly pb-2 pt-2 border-b-[1px]'>
                <label className='text-stone-900-site pl-6'>Protein</label>
                <label className='text-marrom-800-site font-bold'>20g</label>
                </li>
                
                <li className='grid grid-cols-2 justify-evenly pb-1 pt-2'>
                <label className='text-stone-900-site pl-6'>Fat</label>
                <label className='text-marrom-800-site font-bold'>22g</label>
                </li>

              </ul>
            </div>

          </section>

        </div>

      </div>
    </>
  )
}

export default App
