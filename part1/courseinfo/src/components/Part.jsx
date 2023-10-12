export const Part = ({ part }) => {
    return(
        <div>
            {
                part.map(item => {
                    return(
                    <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                    <p>{item.name}</p><span>{item.exercises}</span>
                    </div>
                    )
                })
            }
          
        </div>
    )
} 
