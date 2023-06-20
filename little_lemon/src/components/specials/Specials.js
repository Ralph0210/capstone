import React from 'react'
import './specials.css'
import Greek_Salad from '../../assets/gsalad.jpg'
import Bruchetta from "../../assets/bruschetta-2.jpg"
import Lemon_Dessert from '../../assets/lemon dessert.jpg'

const Specials = () => {

  const specials = [
    { picture: Greek_Salad,
      name: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    { picture: Bruchetta,
      name: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
    },
    {
      picture: Lemon_Dessert,
      name: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
  ]

  const Menu = () => {
    return (
      <>
        {specials.map((dish, index) => (
          <div key={index}>
            <div className='card' tabIndex={0}>
            <div className='menu_image_container'>
              <img src={dish.picture} alt={dish.name} />
            </div>
            <div className='dish_content'>
              <div className='dish_title'>
              <h2 tabIndex={0}>{dish.name}</h2>
              <h3 tabIndex={0}>{dish.price}</h3>
              </div>
              <article tabIndex={0}>{dish.description}</article>
              <a href='#'>Order delivery</a>
            </div>
            </div>
            </div>
      ))}
      </>
    )
  }


  return (
    <div>
      <div className='specials section__padding'>
         <h2 tabIndex={0}>Specials</h2>
        <button className='online_menu' tabIndex={0}>Online Menu</button>
      </div>

      <div className='specials_cards'>
        <Menu />
      </div>

    </div>
  )
}

export default Specials