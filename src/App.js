import './App.css';
import kupa from './kupa2.jpg';

function App() {

const cupes = [
{
  id:1,
  title:'Kaliteli Kontrol'
},
{
  id:2,
  title:'İşaret'
},
{
  id:3,
  title:"Makine"
},
{
  id:4,
  title:'Ütü'
},
{
  id:5,
  title:'Katlama'
}
]


  return (
  <div className='body'>
    <h1 className='main-title'>Haftanın şampiyonları</h1>
  <div className='cup-card-container'>
 
 {
  cupes.map((cup) => {


    return (
      <div className='cup-card-wrapper' style={{}} key={cup.id}>  
      <div className='cup-card'>
      <div className='cup-card-section'>
        <div className='circle-space'/>
      <h2 className='card-sub-title'>{cup.title}</h2>
        </div>
        <div className='cup-card-section'>
        <div className='img-wrapper' >
<img src={kupa}/>
        </div>
      <h2 className='card-sub-title'>Ad Soyad</h2>
        </div>
      </div>
 
    </div>
    )
  })
 }
 
 


   

 
    
   
  </div>
  </div>
  );
}

export default App;
