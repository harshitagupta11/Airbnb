import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData,cardsData}) {
  console.log(cardsData)
  return (
    <div className="">
      <Head>
        <title>AirBnb </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5 '>Explore nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map(item=>(
            <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance}/>
          ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8 '>Live anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData?.map(item=>(
            <MediumCard key={item.title} img={item.img} title={item.title}/>
          ))}
          </div>

          <div>
            <LargeCard 
            img='https://links.papareact.com/4cj' 
            title='The Greatest Outdoors'
            description='Wishlists curated by Airbnb.'
            buttonText='Get Inspired'
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps(){
  let exploreData = await fetch('https://links.papareact.com/pyp')
  exploreData= await exploreData.json()

  let cardsData = await fetch('https://links.papareact.com/zp1')
  cardsData= await cardsData.json()
  return {
    props:{
      exploreData,
      cardsData
    }
  }
}
