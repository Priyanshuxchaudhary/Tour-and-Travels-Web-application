import React,{useState} from 'react'
import firstimage from '../assets/firstimage.jpg'
import {FiTarget} from 'react-icons/fi'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {BsFillInfoSquareFill} from 'react-icons/bs'


const Package1 = () => {

  const [selectedDate,setSelectedDate] = useState(null);

  return (
    <div className='pb-4'>
        <img src={firstimage} className=' w-full h-[450px] object-cover '/>
        <div className=' ml-32 mr-32 grid grid-cols-2 gap-20'>
        <div>
        <h2 className='font-[Righteous] p-5 font-extrabold'>
            Kedarnath Tour Package 4D/3N
        </h2>
        <div className='bg-gray-300 rounded-2xl w-full h-[25px] '></div>
        <div className='px-4 py-7 flex'>
            <div className='bg-black w-[5px] h-[28px] mx-2'></div>
            <h3>Kedarnath Tour Package Highlights </h3>
        </div>
        <div className='flex mx-6'><FiTarget className='mt-1 mx-3'/>Witness one of the twelve Jyotirlingas of Lord Shiva, Kedarnath Shrine amidst the snow covered mountain peaks</div>

        <div className='flex mx-6'><FiTarget className='mt-1 mx-3'/>Get a chance to visit the Bhairav Temple dedicated to Bhairav, a fierce manifestation of Lord Shiva</div>
        <div className='flex mx-6'><FiTarget className='mt-1 mx-3'/>Behold the glory of Kedarnath Temple which stands tall at an average height of 11759 ft. above sea level</div>
        <div className='flex mx-6'><FiTarget className='mt-1 mx-3'/>Seek blessings from GauriKund Temple on your way to Kedarnath which is dedicated to Goddess Parvati</div>

        <div className='bg-gray-300 rounded-2xl w-full h-[25px] my-5 '></div>
        
        <div className='px-4 py-7 flex'>
            <div className='bg-black w-[5px] h-[28px] mx-2'></div>
            <h3>Kedarnath Tour Package From Rishikesh Overview </h3>
        </div>
        <div className='mx-10'>
        <div className=' mb-10'>
          <div className='underline '>About the Destination:</div>
          <div className='mb-16'>A trip to Kedarnath feels like opening a door to salvation. Mighty snow-capped Garhwal Himalayan ranges, legendary temple walls and one of the 12 Jyotirlingas of Lord Shiva makes this destination a once in a lifetime experience. Bathe in the aura of spirituality and thrill as you trek amidst the mighty Himalayas all the way to the head of the beautiful Mandakini River</div>
          <div>It stands tall as one of the famous pilgrimage destinations where thousands of tourists and pilgrims come every year to seek the blessings of Lord Shiva. One can also visit the Bhairav Temple, the fierce manifestation of Lord Shiva, nestled south of the Kedarnath Temple, approximately one kilometre uphill. The scenic views on the way to the Kedarnath Temple will make you spellbound and the divinity that roams in the air will make your every second worthwhile. </div>
        </div>

        <div className=''>
          <div className='underline mb-2'>Quick info:</div>
        
          <div className='flex mb-2'>
            <div className='font-bold mx-1'>Route:</div>
            <div>Rishikesh - Guptkashi - Kedarnath - Guptkashi - Rishikesh</div>
          </div>

          <div className='flex mb-2'>
            <div className='font-bold mx-1'>Duration:</div>
            <div>4 Days, 3 Nights</div>
          </div>

          <div className='flex mb-2'>
            <div className='font-bold mx-1'>Start Point:</div>
            <div>Rishikesh</div>
          </div>

          <div className='flex mb-2'>
            <div className='font-bold mx-1'>End Point</div>
            <div>Rishikesh</div>
          </div>

        </div>

        <div className='mt-8 mb-8'>
          <div className='underline mb-2'>Inclusions:</div>
          <ul className='list-disc mx-5  ' >
            <li className='font-light text-base py-1'>Hotel accommodation as per package selected</li>
            <li className='font-light text-base py-1'>Airport pick up and drop as per your flight timings</li>
            <li className='font-light text-base py-1'>Stay on a double and triple sharing basis</li>
            <li className='font-light text-base py-1'>Buffet breakfast and dinner on all days</li>
            <li className='font-light text-base py-1'>Comfortable and hygienic vehicle (Sedan/Innova/Xylo/Similar) for sightseeing on all days as per the itinerary
            Sightseeing as per itinerary</li>
            <li className='font-light text-base py-1'>All toll tax, parking, fuel and driver allowances</li>
          </ul>
        </div>

        <div className=' mb-10'>
          <div className='underline mb-3 '>How to reach:</div>
          <div className='mb-16'>The nearest airport to Rishikesh is Jolly Grant airport, Dehradun, all the flights from the major cities are available here. You can also take the train to Haridwar and then travel further in a cab for Rishikesh. Haridwar is connected to all the major cities by railways.</div>
        </div>

      </div>
      <div className='bg-gray-300 rounded-2xl w-full h-[25px] '></div>
      <div className='bg-gray-200'>
        <div className='px-4 py-7 flex '>
              <div className='bg-black w-[5px] h-[28px] mx-2'></div>
              <h3>Kedarnath Tour Package Itinerary </h3>
        </div>
        <div className='flex mx-7 font-semibold'>
          <div className=' rounded-sm mx-3 '>Day 1</div>
          <div>Rishikesh - Guptkashi (204 KM/08 HR)</div>
          <ul className='list-disc mx-5  ' >
            <li className='font-light text-base py-1'>You will be picked from Rishikesh in the morning and will be taken directly to the Guptkashi.</li>
            <li className='font-light text-base py-1'>The route will be covering the Byasi, Devprayag, Srinagar, Rudraprayag, and Agastmuni hill stations on the way.s</li>
            <li className='font-light text-base py-1'>Have your lunch in the midway and you will reach the destination in the evening.</li>
            <li className='font-light text-base py-1'>Check in into the hotel and enjoy the evening.</li>
            <li className='font-light text-base py-1'>Overnight stay at Guptkashi.</li>
            
          </ul>
        </div>

        <div className='bg-gray-300 w-full h-[10px] '></div>

        <div className='flex mx-7 font-semibold'>
          <div className=' rounded-sm mx-3 '>Day 2 </div>
          <div>Rishikesh - Guptkashi (204 KM/08 HR)</div>
          <ul className='list-disc mx-5  ' >
            <li className='font-light text-base py-1'>You will be picked from Rishikesh in the morning and will be taken directly to the Guptkashi.</li>
            <li className='font-light text-base py-1'>The route will be covering the Byasi, Devprayag, Srinagar, Rudraprayag, and Agastmuni hill stations on the way.s</li>
            <li className='font-light text-base py-1'>Have your lunch in the midway and you will reach the destination in the evening.</li>
            <li className='font-light text-base py-1'>Check in into the hotel and enjoy the evening.</li>
            <li className='font-light text-base py-1'>Overnight stay at Guptkashi.</li>
            
          </ul>
        </div>

        <div className='bg-gray-300 w-full h-[10px] '></div>

        <div className='flex mx-7 font-semibold'>
          <div className=' rounded-sm mx-3 '>Day 3</div>
          <div>Rishikesh - Guptkashi (204 KM/08 HR)</div>
          <ul className='list-disc mx-5  ' >
            <li className='font-light text-base py-1'>You will be picked from Rishikesh in the morning and will be taken directly to the Guptkashi.</li>
            <li className='font-light text-base py-1'>The route will be covering the Byasi, Devprayag, Srinagar, Rudraprayag, and Agastmuni hill stations on the way.s</li>
            <li className='font-light text-base py-1'>Have your lunch in the midway and you will reach the destination in the evening.</li>
            <li className='font-light text-base py-1'>Check in into the hotel and enjoy the evening.</li>
            <li className='font-light text-base py-1'>Overnight stay at Guptkashi.</li>
            
          </ul>
        </div>

        <div className='bg-gray-300 w-full h-[10px] '></div>

        <div className='flex mx-7 font-semibold'>
          <div className=' rounded-sm mx-3 '>Day 4</div>
          <div>Rishikesh - Guptkashi (204 KM/08 HR)</div>
          <ul className='list-disc mx-5  ' >
            <li className='font-light text-base py-1'>You will be picked from Rishikesh in the morning and will be taken directly to the Guptkashi.</li>
            <li className='font-light text-base py-1'>The route will be covering the Byasi, Devprayag, Srinagar, Rudraprayag, and Agastmuni hill stations on the way.s</li>
            <li className='font-light text-base py-1'>Have your lunch in the midway and you will reach the destination in the evening.</li>
            <li className='font-light text-base py-1'>Check in into the hotel and enjoy the evening.</li>
            <li className='font-light text-base py-1'>Overnight stay at Guptkashi.</li>
            
          </ul>
        </div>

      </div>
      <div className='bg-gray-300 rounded-2xl w-full h-[25px] mb-5  '></div>

        

        </div>

        <div className=' pt-5'>
          <div className='text-white flex max-w-sm bg-yellow-700 rounded-xl font-bold flex-col items-center'>
            <div className=' flex gap-3 '>
              Starting from<p className='line-through'>23999</p> 
            </div >
            <div className='mt-5  '>
              <h1>INR 16999/-</h1>
              <h5 className=''>per adult</h5>
            </div>
            
          </div>

          <h4 className=' my-5 font-bold'>Kedarnath Tour Package from Rishikesh</h4>

          <form action='' className=' max-w-sm flex flex-col pt-3 gap-4 pb-3'>
            <input className='p-2 bg-gray-200 rounded-xl border-black' type={Text} name="name" placeholder='Enter your name' />
            <input className='w-full p-2 bg-gray-200 rounded-xl border-black' type={Text} name="phone" placeholder='Contact no' />
            <input className='w-full p-2 bg-gray-200 rounded-xl border-black' type={Text} name="email " placeholder='Email' />
            <input className='w-full p-2 bg-gray-200 rounded-xl border-black' type={Text} name="travellers" placeholder='Enter no. of travellers' />
            
          </form>
          <div className='flex flex-col'>
          <ReactDatePicker
            
            placeholderText='Choose starting date '
            selected={selectedDate}
            onChange={date=>setSelectedDate(date)}
            minDate={new Date()}
            showMonthDropdown
            showYearDropdown
          />
          
          <button type="button" class=" justify-center max-w-sm mt-2 font-bold text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm and Pay</button>
          </div>
          

        </div >

        </div>
    </div>
  )
}

export default Package1