import style from './badges.module.css'

type BadgePropsType = {
  country: {
    unMember: boolean
    independent: boolean
    landlocked: boolean
    area: number
    continents: string
  }
}

function Badge({ country }: BadgePropsType) {
  return (
    <div className={style.badges}>
      {country.unMember && <span>UN Member</span>}
      {country.independent && <span>Independent</span>}
      {country.landlocked && <span>Land-locked</span>}
      <span>{country.area} km&sup2;</span>
      <span>{country.continents}</span>
    </div>
  )
}

export default Badge
