
import astro from '../../Assets/Images/astro1.png';
import './404.css'

const Page404 =() =>{


    return (
        <div className="cont404">
           <div className="content404">
               <h1>404 Error </h1>
               <p>Seems like you lost in space.... </p>
           </div>
           <img alt='astranout' src={astro} />
        </div>
    )
}

export default Page404;