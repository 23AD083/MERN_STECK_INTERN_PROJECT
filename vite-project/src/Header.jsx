function Header() {

    let data = ["RM","Jin","Suga","Jhope","Jimin","V","Jungkook"];


    return (
        <div>
             <div>
                <h3><i>Header</i></h3>
            </div>
            <div>
                {data.map((i,k)=>{
                    return(
                        <li key={k}>{i}</li>
                    )
                })}
            </div>
        </div>
       
    )
}
export default Header;
