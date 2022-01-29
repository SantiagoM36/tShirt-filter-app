import React from 'react';

const AboutUs = props => {
    const { image, title } = props.product;
    return (
        <article className='container mt-5'>
            <div className="mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={`/assets/img/${image}`} alt={title} className='img-fluid' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title aboutUs">About Us</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem ante, aliquam in turpis non, ultrices viverra turpis. Suspendisse dictum ex in convallis aliquet. Aenean blandit imperdiet velit vitae finibus. Cras rutrum volutpat auctor. Donec hendrerit quam metus, sit amet pulvinar massa consequat nec. Phasellus euismod odio urna, ut vehicula arcu gravida non. Nam sit amet pellentesque elit, in ultricies diam. Mauris iaculis, ligula volutpat pharetra tristique, leo mauris blandit tellus, eget egestas magna ligula vitae dui. Nulla varius ultricies vestibulum. Nunc vitae lectus suscipit, ultricies augue vel, faucibus lectus. Duis commodo sed erat a consectetur. Donec mattis molestie scelerisque.
                                Curabitur libero risus, egestas non erat et, euismod pretium urna. Nunc quis nibh nec elit mattis varius quis sit amet dolor. Duis placerat dapibus laoreet. Fusce in nulla sem. Sed viverra est quis est consectetur condimentum elementum sed est. Nulla facilisi. Quisque a rhoncus enim, eget sagittis diam. Maecenas at volutpat tortor. Nunc sit amet sem in purus mattis porta a vel metus. Aliquam sodales dui sed fermentum luctus. Nam sit amet felis sed lectus scelerisque ullamcorper. Proin ut malesuada quam, sed interdum metus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AboutUs;