import { Bookmark } from 'lucide-react';

function Card(props) {
    return (
        <div className="card">

            <div>
                <div className="top">
                    <img src={props.img} alt="imdb" />
                    <button>Save <Bookmark size={15} /> </button>
                </div>

                <div className="center">
                    <h3> {props.name} <span> {props.time} </span></h3>
                    <h2> {props.role} </h2>
                    <div className='tag'>
                        <h4> {props.r1} </h4>
                        <h4> {props.r2} </h4>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h3> {props.pay} </h3>
                    <p> {props.loc} </p>
                </div>
                <button>Apply Now</button>
            </div>

        </div>
    )
}

export default Card
