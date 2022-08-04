
export default function Home({data}){
  return(
    <>
     {data.map(d=> {
       return <Card key={d.id} id={d.id} name={d.name}/>
     })}
    </>
  );
}

function Card({id,name}){
  return(
    <div class="bg-dark card mx-4 my-2 p-3 text-center">
      <div class="card-body">
        <h4 style={{height:"30px",width:"30px",paddingTop:'10px'}} class="badge bg-light text-dark rounded-circle">{id}</h4>
        <h2 class="text-warning">{name}</h2>
      </div>
    </div>
  );
}