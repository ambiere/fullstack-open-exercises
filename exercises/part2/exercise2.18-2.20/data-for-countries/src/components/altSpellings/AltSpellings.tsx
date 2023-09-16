import style from './altSpellings.module.css'

type AltSpellingsPropsType = {
  altSpellings: [string, string][]
}

function AltSpellings({ altSpellings }: AltSpellingsPropsType) {
  if (altSpellings.length > 0) {
    return (
      <div className={style.altSpellingsWrapper}>
        <p>Altenative spelling:</p>
        <p>
          <span>/{altSpellings[0][1]}/ </span>
          {Boolean(altSpellings[1]) && <span>/{altSpellings[1][1]}/</span>}
          {altSpellings.length > 2 && (
            <button className={style.altSpellingsBtn}> {altSpellings.length - 2}+ more</button>
          )}
        </p>
      </div>
    )
  }
}

export default AltSpellings
