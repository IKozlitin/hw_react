const Card = (props) => {
    return (        
        <div className="card mb-3" style={{width: "777px"}}>
            <div class="row g-0">
                <div class="col-md-4">
                <img src={props.image} class="img-fluid rounded" style={{width: "100px"}} alt={props.name} />
            </div>
                <div class="col-md-8 d-flex justify-content-center align-items-center">
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.text}</p>                       
                    </div>
                </div>
            </div>
        </div>        
    );
};

export default Card;
