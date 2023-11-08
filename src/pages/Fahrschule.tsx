import cover from '../assets/cover.jpg';


export default function Fahrschule() {
    return (
        <div className="home--container">
            
            <div className="home--container--top">
                <p>04361/49108</p>
                <h1><span className="willkommen--span">Willkommen bei der</span> <br/><span className="name--span">Fahrschule Am Gymnasium</span></h1>
                <img src={cover} alt="cover" />
            </div>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatibus, quas, quibusdam, voluptatum quia quod dolorum
                necessitatibus voluptates quos doloremque doloribus. Quasi
                voluptates, voluptas doloribus natus quia quae quas. Quisquam
                voluptatibus, quas, quibusdam, voluptatum quia quod dolorum
                necessitatibus voluptates quos doloremque doloribus. Quasi
                voluptates, voluptas doloribus natus quia quae quas.
            </p>
        </div>
    )
}   
