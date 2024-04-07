type Props = {
    className: string
    color: string
    img: string
    title: string
    description: string
    url?: string
  }
  
  const CardsWidget30 = ({className, color, img, title, description,url}: Props) => (
    <a href={url}
      className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end ${className}`}
      style={{
        overflow: 'hidden',
        backgroundColor: color,
        backgroundImage: `url('${img}')`,
        backgroundSize: 'cover',
      }}
    >
      <div className='card-header pt-5'>
        <div className='card-title d-flex flex-column'>
          <span className='fs-2hx fw-bold text-white me-2 lh-1 ls-n2'>{description}</span>
  
          <span className='text-white fw-bold pt-1 fw-semibold fs-7'>{title}</span>
        </div>
      </div>
    </a>
  )
  export {CardsWidget30}