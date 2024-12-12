import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          isInverse={false}
          image={Single}
          title={'Single User'}
          price={'$149'}
          storage={'500 GB Storage'}
          grantedUser={'1 Granted User'}
          volume={'Send up to 2 GB'}
        />
        <Card
          isInverse={true}
          image={Double}
          title={'Double User'}
          price={'$149'}
          storage={'500 GB Storage'}
          grantedUser={'1 Granted User'}
          volume={'Send up to 2 GB'}
        />
        <Card
          isInverse={false}
          image={Triple}
          title={'Triple User'}
          price={'$149'}
          storage={'500 GB Storage'}
          grantedUser={'1 Granted User'}
          volume={'Send up to 2 GB'}
        />
      </div>
    </div>
  )
}

interface CardProps {
  isInverse: boolean
  image: string
  title: string
  price: string
  storage: string
  grantedUser: string
  volume: string
}

const Card = ({ isInverse, ...props }: CardProps) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 ${
        isInverse ? 'bg-gray-100 md:my-0 my-8' : 'my-4'
      } rounded-lg hover:scale-105 duration-300`}
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-transparent"
        src={props.image}
        alt="/"
      />
      <h2 className="text-2xl font bold text-center py-8">{props.title}</h2>
      <p className="text-center text-4xl font-bold">{props.price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{props.storage}</p>
        <p className="py-2 border-b mx-8 mt-8">{props.grantedUser}</p>
        <p className="py-2 border-b mx-8 mt-8">{props.volume}</p>
      </div>
      <button
        className={`${
          isInverse ? 'bg-black text-[#00df9a]' : 'bg-[#00df9a] text-black'
        } w-[200px] rounded-md font-medium my-6 mx-auto py-3`}
      >
        Start Trial
      </button>
    </div>
  )
}

export default Cards
