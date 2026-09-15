import Booking from '@/data/booking.json'
import Image from 'next/image'
export default function booking (){
  return (
    <main style={{color:'black'}}>
      <div style={{display:'flex',flexDirection:
        Booking.map((b))=>(
          <div key={b.id}>
            <image src={b.image} width={120}height={50}/>
            <p><span>{b.tag}</span></p>
            <p><span>{b.rating-no}</span><p>
              <p>{b.rating-comments}</p>
              <p>{b.no_of_people_rating} reviews</p>
              <p>{b.total__night} night</p>
              <p><del>{b.price_discount}<del></p>
              <p>{b.price}</p>
              </div>
              
              
              
        )
      }}
  )
}