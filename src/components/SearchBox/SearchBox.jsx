import css from './SearchBox.module.css';

export default function SearchBox({value, onSelect}){
const handleChange=(e)=>{
    onSelect(e.target.value);
}
    return(
        <div className={css.searchBox}>
            <input type="text" value={value} onChange={handleChange}>
            </input>
        </div>
    )
}