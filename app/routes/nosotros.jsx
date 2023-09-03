import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return[
    {title: 'GuitarLA - SObre Nosotros'},
    {description: 'VEnta de guitarras, blog de música'},
  ]
}
export function links(){
  return[
    {
      rel:'stylesheet',
      href:styles
    },
    {
      rel:'preload',
      href: imagen,
      as: 'image'
    }
    
  ]
}
function Nosotros() {
  return (
    <main className="contenedor nosotros">

      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Quisque mattis in ligula vel posuere. Quisque ornare dignissim accumsan. Donec placerat, ex vitae blandit fermentum, nulla libero blandit eros, in elementum risus neque ut metus. Nunc pharetra leo eros, nec maximus sapien ultricies nec. In mi libero, ornare sed venenatis vel, tempor non nunc. Etiam metus velit, tristique et justo et, vestibulum porta nulla.
          </p>
          <p>Ut sodales lectus quam, in mollis nunc cursus eu. Suspendisse varius, risus at ultrices 
          posuere, enim tellus dictum dolor, blandit hendrerit mauris lectus eu sem. 
          Nulla id orci mi.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
