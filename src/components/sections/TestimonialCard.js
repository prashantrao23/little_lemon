import Star from '../../assets/star.png';
export default function TestimonialCard(props) {
    return (
        <article className="card" >

            <div className="card">
                <div className="row g-0 ">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={Star} className="img-fluid rounded-start" alt="delivery icon" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </article>

    );
}