import { GetServerSidePropsContext } from "next"
import ServiceCard from "../components/ServiceCard"
import { services } from "../data"

const index = () => {
  
  return (
    <div className='flex-col flex-grow px-6 pt-1'>
     <h6 className="my-3 text-base font-medium">
        Full time Software Enginner at Mindtree Limited.I am trained 
        in MERN Stack from Mindtree Orchard Program.I have 6+ months experience 
        in web development.
      </h6>

      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:text-black'  style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
     
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
     
      </div>
 
    </div>
  )
}

export default index

